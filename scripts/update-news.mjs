import { mkdir, writeFile } from "node:fs/promises";

const categories = [
  {
    id: "politics",
    label: "International Politics",
    query: "(international politics OR diplomacy OR election OR government)",
  },
  {
    id: "conflict",
    label: "War & Conflict",
    query: "(war OR conflict OR ceasefire OR military)",
  },
  {
    id: "economy",
    label: "Economy",
    query: "(economy OR inflation OR market OR trade)",
  },
  {
    id: "literature",
    label: "Literature & Books",
    query: "(literature OR books OR novel OR author)",
  },
  {
    id: "entertainment",
    label: "Entertainment",
    query: "(film OR music OR celebrity OR entertainment)",
  },
  {
    id: "technology",
    label: "Technology",
    query: "(technology OR artificial intelligence OR software OR cybersecurity)",
  },
  {
    id: "climate",
    label: "Climate",
    query: "(climate OR weather OR energy OR environment)",
  },
  {
    id: "science",
    label: "Science & Health",
    query: "(science OR health OR research OR medicine)",
  },
];

const generatedAt = new Date().toISOString();
const output = {
  generatedAt,
  source: "GDELT article list + publisher meta descriptions",
  categories: {},
};

for (const category of categories) {
  const articles = await fetchGdeltArticles(category);
  const enriched = [];

  for (const article of articles) {
    const summary = await fetchPublisherSummary(article.url);
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

const totalStories = Object.values(output.categories).reduce((sum, stories) => sum + stories.length, 0);
if (!totalStories) {
  console.error("No stories were fetched. Keeping existing data/news.json unchanged.");
  process.exitCode = 1;
  process.exit();
}

await mkdir("data", { recursive: true });
await writeFile("data/news.json", `${JSON.stringify(output, null, 2)}\n`);
await writeFile("data/news-data.js", `window.NEWS_CACHE = ${JSON.stringify(output, null, 2)};\n`);
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
