import { mkdir, writeFile } from "node:fs/promises";

const categories = [
  {
    id: "politics",
    label: "International Politics",
    query: "(international politics OR diplomacy OR election OR government)",
    rss: "https://www.theguardian.com/world/rss",
  },
  {
    id: "conflict",
    label: "War & Conflict",
    query: "(war OR conflict OR ceasefire OR military)",
    rss: "https://www.theguardian.com/world/rss",
  },
  {
    id: "economy",
    label: "Economy",
    query: "(economy OR inflation OR market OR trade)",
    rss: "https://www.theguardian.com/business/rss",
  },
  {
    id: "literature",
    label: "Literature & Books",
    query: "(literature OR books OR novel OR author)",
    rss: "https://www.theguardian.com/books/rss",
  },
  {
    id: "entertainment",
    label: "Entertainment",
    query: "(film OR music OR celebrity OR entertainment)",
    rss: "https://www.theguardian.com/culture/rss",
  },
  {
    id: "f1",
    label: "Formula 1",
    query: "(Formula 1 OR F1 OR Grand Prix OR Ferrari OR Red Bull Racing OR McLaren OR Mercedes F1)",
    rss: "https://www.theguardian.com/sport/formulaone/rss",
    keywords: ["formula 1", "f1", "grand prix", "verstappen", "ferrari", "mclaren", "mercedes", "red bull"],
  },
  {
    id: "sims",
    label: "The Sims",
    query: "(The Sims OR Sims 4 OR Sims 5 OR Project Rene OR life simulation game)",
    rss: "https://www.pcgamer.com/rss/",
    keywords: ["the sims", "sims 4", "sims 5", "project rene", "maxis", "ea"],
  },
  {
    id: "new-tech-products",
    label: "New Tech Products",
    query: "(new tech products OR gadget launch OR smartphone launch OR laptop launch OR wearable device)",
    rss: "https://www.theverge.com/rss/index.xml",
    keywords: ["phone", "smartphone", "laptop", "gadget", "wearable", "device", "launch", "review", "tablet", "chip"],
  },
  {
    id: "technology",
    label: "Technology",
    query: "(technology OR artificial intelligence OR software OR cybersecurity)",
    rss: "https://www.theguardian.com/technology/rss",
  },
  {
    id: "climate",
    label: "Climate",
    query: "(climate OR weather OR energy OR environment)",
    rss: "https://www.theguardian.com/environment/rss",
  },
  {
    id: "science",
    label: "Science & Health",
    query: "(science OR health OR research OR medicine)",
    rss: "https://www.theguardian.com/science/rss",
  },
];

const generatedAt = new Date().toISOString();
const output = {
  generatedAt,
  source: "GDELT article list + publisher meta descriptions",
  categories: {},
};

for (const category of categories) {
  let articles = await fetchGdeltArticles(category);
  if (!articles.length) {
    articles = await fetchRssArticles(category);
  }

  const enriched = [];

  for (const article of articles) {
    const summary = article.summary || await fetchPublisherSummary(article.url);
    enriched.push({
      title: article.title || "Untitled story",
      summary,
      source: article.sourceCommonName || article.domain || "Public news source",
      url: article.url || "#",
      seendate: article.seendate || generatedAt,
      domain: article.domain || "",
    });
  }

  output.categories[category.id] = enriched;
}

const totalStories = Object.values(output.categories).reduce(
  (sum, stories) => sum + stories.length,
  0
);

if (!totalStories) {
  console.warn("No stories were fetched. Keeping existing news cache unchanged.");
  process.exit(0);
}

await mkdir("data", { recursive: true });
await writeFile("data/news.json", `${JSON.stringify(output, null, 2)}\n`);
await writeFile(
  "data/news-data.js",
  `window.NEWS_CACHE = ${JSON.stringify(output, null, 2)};\n`
);

console.log(`Wrote data/news.json at ${generatedAt}`);

async function fetchGdeltArticles(category) {
  const url = new URL("https://api.gdeltproject.org/api/v2/doc/doc");
  url.searchParams.set("query", `${category.query} sourcelang:english`);
  url.searchParams.set("mode", "ArtList");
  url.searchParams.set("format", "json");
  url.searchParams.set("sort", "DateDesc");
  url.searchParams.set("timespan", "24h");
  url.searchParams.set("maxrecords", "8");

  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(12000) });
    if (!response.ok) throw new Error(`GDELT ${response.status}`);
    const payload = await response.json();
    return dedupeByUrl(payload.articles || []).slice(0, 5);
  } catch (error) {
    console.warn(`Could not fetch ${category.id}: ${error.message}`);
    return [];
  }
}

async function fetchRssArticles(category) {
  if (!category.rss) return [];

  try {
    const response = await fetch(category.rss, {
      headers: {
        "user-agent": "EverydayNewsReader/1.0 (+https://example.local)",
        accept: "application/rss+xml, application/xml, text/xml",
      },
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) throw new Error(`RSS ${response.status}`);

    const xml = await response.text();
    const parsed = parseRssItems(xml, category);
    const filtered = category.keywords?.length
      ? parsed.filter((article) => articleMatchesKeywords(article, category.keywords))
      : parsed;
    return (filtered.length ? filtered : parsed).slice(0, 5);
  } catch (error) {
    console.warn(`Could not fetch RSS for ${category.id}: ${error.message}`);
    return [];
  }
}

async function fetchPublisherSummary(url) {
  if (!url || url === "#") return "";

  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "EverydayNewsReader/1.0 (+https://example.local)",
        accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(9000),
    });

    if (!response.ok) return "";

    const html = await response.text();
    return extractDescription(html);
  } catch {
    return "";
  }
}

function extractDescription(html) {
  const candidates = [
    /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+name=["']twitter:description["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:description["'][^>]*>/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["'][^>]*>/i,
  ];

  for (const pattern of candidates) {
    const match = html.match(pattern);
    if (match?.[1]) return decodeHtml(match[1]);
  }

  return "";
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 420);
}

function dedupeByUrl(articles) {
  const seen = new Set();

  return articles.filter((article) => {
    if (!article.url || seen.has(article.url)) return false;
    seen.add(article.url);
    return true;
  });
}

function parseRssItems(xml, category) {
  const items = [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)];
  const source = new URL(category.rss).hostname.replace(/^www\./, "");

  return items
    .map((match) => {
      const item = match[0];
      const title = stripTags(readTag(item, "title"));
      const url = stripTags(readTag(item, "link"));
      const summary = stripTags(readTag(item, "description"));
      const seendate = readTag(item, "pubDate");

      return {
        title,
        summary,
        sourceCommonName: source,
        url,
        seendate: seendate ? new Date(seendate).toISOString() : generatedAt,
        domain: source,
      };
    })
    .filter((article) => article.title && article.url);
}

function articleMatchesKeywords(article, keywords) {
  const text = `${article.title} ${article.summary}`.toLowerCase();
  return keywords.some((keyword) => text.includes(keyword.toLowerCase()));
}

function readTag(item, tagName) {
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = item.match(pattern);
  return match?.[1] ? decodeHtml(match[1]) : "";
}

function stripTags(value) {
  return value
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
