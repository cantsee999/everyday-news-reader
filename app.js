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
    id: "f1",
    label: "Formula 1",
    query: "(Formula 1 OR F1 OR Grand Prix OR Ferrari OR Red Bull Racing OR McLaren OR Mercedes F1)",
  },
  {
    id: "sims",
    label: "The Sims",
    query: "(The Sims OR Sims 4 OR Sims 5 OR Project Rene OR life simulation game)",
  },
  {
    id: "new-tech-products",
    label: "New Tech Products",
    query: "(new tech products OR gadget launch OR smartphone launch OR laptop launch OR wearable device)",
  },
  {
    id: "technology",
    label: "Technology",
    query: "(technology OR artificial intelligence OR software OR cybersecurity)",
    hidden: true,
  },
  {
    id: "climate",
    label: "Climate",
    query: "(climate OR weather OR energy OR environment)",
    hidden: true,
  },
  {
    id: "science",
    label: "Science & Health",
    query: "(science OR health OR research OR medicine)",
    hidden: true,
  },
];

const fallbackStories = {
  politics: [
    {
      title: "Leaders meet for a new round of diplomatic talks",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Regional election results reshape a coalition government",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "New sanctions package draws mixed reactions from allies",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  conflict: [
    {
      title: "Ceasefire talks continue as aid groups seek safe access",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Border tensions rise after overnight strikes",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Humanitarian agencies warn of pressure on hospitals",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  economy: [
    {
      title: "Markets watch central bank signals after fresh inflation data",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Shipping costs become a new concern for global retailers",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Trade ministers discuss rules for critical minerals",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  literature: [
    {
      title: "Prize shortlist highlights translated novels and memoirs",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Libraries report a rise in younger readers joining book clubs",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "A new biography renews debate about a famous poet",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  entertainment: [
    {
      title: "A summer film opens strongly in several international markets",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Music festival organizers announce a simpler fan ticket policy",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Streaming platforms compete for a new drama series",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  f1: [
    {
      title: "Formula 1 teams prepare upgrade packages before the next Grand Prix",
      summary: "Several teams are expected to bring car updates as the season moves into another race weekend. The useful thing to watch is whether the upgrades improve real race pace or only look strong in practice sessions.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Driver market talk grows as teams review next season lineups",
      summary: "F1 teams and drivers are being linked with possible contract moves. The story matters because one confirmed seat can change the whole grid and affect younger drivers waiting for a chance.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Race strategy becomes a focus after tire management decides key positions",
      summary: "Teams are studying pit stop timing, tire wear, and safety car risk after strategy shaped the final result. For readers, the key is not only who was fastest, but how the team made decisions under pressure.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  sims: [
    {
      title: "The Sims community reacts to a new update and bug fixes",
      summary: "Players are checking whether the latest update improves gameplay stability or creates new problems. The important part is how the patch affects everyday play, mods, saves, and popular custom content.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Fans discuss what they want from the next Sims expansion",
      summary: "Community conversations are focusing on features such as deeper life stages, better building tools, careers, worlds, and family gameplay. The signal is what players feel is missing from the current game.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Life simulation games compete for players who want more creative control",
      summary: "New and upcoming life sim games are trying to attract players with open building, character stories, and flexible customization. This matters because competition may push The Sims to improve faster.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  "new-tech-products": [
    {
      title: "New phone launch focuses on battery life, camera tools, and AI features",
      summary: "A new smartphone is being marketed around practical upgrades rather than one dramatic change. The useful questions are price, battery performance, camera quality, update support, and whether the AI tools save real time.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Laptop makers push lighter designs with stronger chips for everyday work",
      summary: "New laptops are focusing on portability, battery life, and better performance for office work, school, and creative apps. The key is whether reviews confirm the claims under normal daily use.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Wearable device updates add health tracking but raise privacy questions",
      summary: "New wearables are adding more sensors and software features for sleep, fitness, and health trends. The main tradeoff is convenience versus how much personal data the device collects and shares.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  technology: [
    {
      title: "AI companies face new questions about safety and data use",
      summary: "Technology firms are under pressure to explain how their AI systems use data and reduce harmful mistakes. The story matters because regulation, product design, and public trust are now moving together.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Cybersecurity teams warn about a rise in account takeover attempts",
      summary: "Security researchers say attackers are using stolen passwords and automated tools to break into online accounts. The practical takeaway is to use stronger passwords, two-factor authentication, and careful login alerts.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "New software tools promise faster work but raise training questions",
      summary: "Companies are testing tools that automate routine writing, coding, and office tasks. The key issue is whether workers receive enough training to use the tools well instead of simply working faster under pressure.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  climate: [
    {
      title: "Cities prepare for higher heat risks as summer temperatures rise",
      summary: "Local governments are planning cooling centers, public alerts, and support for vulnerable residents. The story matters because heat can become a health emergency even when it does not look dramatic on the news.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Energy officials weigh reliability as power demand grows",
      summary: "Power grids are facing more pressure from heat, industry, and digital infrastructure. The next thing to watch is whether governments invest in storage, transmission, and cleaner backup capacity.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Flood planning becomes a larger issue for coastal communities",
      summary: "Coastal areas are reviewing drainage, insurance, and emergency planning as storms become more disruptive. The key question is who pays for prevention before the next disaster happens.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
  science: [
    {
      title: "Researchers report progress in early disease detection",
      summary: "Scientists are developing tests that may identify health risks earlier and with less invasive screening. The important caveat is whether early results can be confirmed in larger studies.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Hospitals study how digital tools can support patient follow-up",
      summary: "Health systems are testing reminders, remote monitoring, and digital check-ins to reduce missed care. The question is whether these tools help patients without adding confusion or privacy risks.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
    {
      title: "Space researchers prepare new observations of distant planets",
      summary: "Astronomers are planning observations that could improve knowledge of planets outside the solar system. The story is about slow scientific progress rather than one immediate discovery.",
      source: "Demo Wire",
      url: "#",
      seendate: new Date().toISOString(),
      domain: "demo.local",
    },
  ],
};

const dictionary = {
  aid: "援助；帮助",
  allies: "盟友；同盟国家",
  author: "作者",
  biography: "传记",
  border: "边境",
  ceasefire: "停火",
  coalition: "联合政府；联盟",
  conflict: "冲突",
  data: "数据",
  device: "设备",
  diplomacy: "外交",
  election: "选举",
  expansion: "扩展包；资料片",
  gadget: "小型科技产品；电子小玩意",
  "grand prix": "大奖赛",
  inflation: "通货膨胀",
  launch: "发布；推出",
  market: "市场",
  memoir: "回忆录",
  minister: "部长",
  patch: "补丁；更新",
  qualifying: "排位赛",
  regional: "地区的",
  sanction: "制裁",
  sanctions: "制裁",
  shortlist: "入围名单",
  simulation: "模拟；仿真",
  strike: "袭击；罢工",
  trade: "贸易",
  translated: "翻译的",
  wearable: "可穿戴设备",
};

const state = {
  level: "standard",
  window: "24h",
  visibleCategoryIds: categories.filter((category) => !category.hidden).map((category) => category.id),
  storiesByCategory: {},
  categoryLimits: JSON.parse(localStorage.getItem("categoryLimits") || "{}"),
  expandedStories: new Set(JSON.parse(localStorage.getItem("expandedStories") || "[]")),
  readStories: new Set(JSON.parse(localStorage.getItem("readStories") || "[]")),
  hideRead: localStorage.getItem("hideRead") === "true",
  briefMode: localStorage.getItem("briefMode") === "true",
  vocab: JSON.parse(localStorage.getItem("savedVocabulary") || "[]"),
  selectedText: "",
};

const newsGrid = document.querySelector("#newsGrid");
const statusText = document.querySelector("#statusText");
const progressText = document.querySelector("#progressText");
const savedCount = document.querySelector("#savedCount");
const categoryJump = document.querySelector("#categoryJump");
const briefModeButton = document.querySelector("#briefModeButton");
const levelSelect = document.querySelector("#levelSelect");
const windowSelect = document.querySelector("#windowSelect");
const hideReadToggle = document.querySelector("#hideReadToggle");
const popover = document.querySelector("#selectionPopover");
const selectedText = document.querySelector("#selectedText");
const translationText = document.querySelector("#translationText");
const vocabDialog = document.querySelector("#vocabDialog");
const vocabList = document.querySelector("#vocabList");
const reviewCard = document.querySelector("#reviewCard");

async function init() {
  bindEvents();
  renderBriefMode();
  renderHideRead();
  renderSavedCount();
  await loadNews();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function bindEvents() {
  document.querySelector("#refreshButton").addEventListener("click", loadNews);
  document.querySelector("#moreCategoriesButton").addEventListener("click", showMoreCategories);
  document.querySelector("#openVocabButton").addEventListener("click", openVocabulary);
  briefModeButton.addEventListener("click", toggleBriefMode);
  hideReadToggle.addEventListener("change", toggleHideRead);
  document.querySelector("#closePopoverButton").addEventListener("click", () => {
    popover.hidden = true;
  });
  document.querySelector("#saveWordButton").addEventListener("click", saveSelectedText);
  document.querySelector("#reviewNowButton").addEventListener("click", openVocabulary);

  levelSelect.addEventListener("change", (event) => {
    state.level = event.target.value;
    renderNews();
  });

  windowSelect.addEventListener("change", async (event) => {
    state.window = event.target.value;
    await loadNews();
  });

  document.addEventListener("contextmenu", showTranslationForSelection);
  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") popover.hidden = true;
  });
}

async function loadNews() {
  statusText.textContent = "Loading fresh international news...";
  const activeCategories = categories.filter((category) => state.visibleCategoryIds.includes(category.id));
  const cachedNews = await fetchNewsCache();
  let usedCacheCount = 0;
  const entries = await Promise.all(
    activeCategories.map(async (category) => {
      const cachedStories = cachedNews?.categories?.[category.id] || [];
      if (cachedStories.length) {
        usedCacheCount += cachedStories.length;
        return [category.id, cachedStories];
      }
      return [category.id, await fetchCategory(category, 5)];
    })
  );

  state.storiesByCategory = Object.fromEntries(entries);
  renderCategoryJump();
  renderNews();
  const realCount = Object.values(state.storiesByCategory).flat().filter((story) => story.url !== "#").length;
  statusText.textContent = realCount
    ? `${state.briefMode ? "5-minute brief" : "Full outline"} · loaded ${realCount} stories ${
        usedCacheCount ? `from daily cache (${formatDate(cachedNews.generatedAt)})` : "from public sources"
      }.`
    : "Showing demo stories because the public news source is unavailable in this browser.";
}

async function fetchNewsCache() {
  if (window.NEWS_CACHE?.categories) {
    return window.NEWS_CACHE;
  }

  try {
    const response = await fetch("./data/news.json", { cache: "no-store" });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

async function fetchCategory(category, maxRecords) {
  const timespan = state.window.replace("h", "h");
  const url = new URL("https://api.gdeltproject.org/api/v2/doc/doc");
  url.searchParams.set("query", `${category.query} sourcelang:english`);
  url.searchParams.set("mode", "ArtList");
  url.searchParams.set("format", "json");
  url.searchParams.set("sort", "DateDesc");
  url.searchParams.set("timespan", timespan);
  url.searchParams.set("maxrecords", String(maxRecords));

  try {
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) throw new Error("News source failed");
    const payload = await response.json();
    const stories = normalizeStories(payload.articles || []);
    return stories.length ? stories : fallbackStories[category.id] || [];
  } catch {
    return fallbackStories[category.id] || [];
  }
}

function normalizeStories(articles) {
  return articles.map((article) => ({
    title: article.title || "Untitled story",
    summary: article.summary || article.description || "",
    source: article.sourceCommonName || article.domain || "Public news source",
    url: article.url || "#",
    seendate: article.seendate || new Date().toISOString(),
    domain: article.domain || "",
  }));
}

function renderNews() {
  const categoryList = categories.filter((category) => state.visibleCategoryIds.includes(category.id));

  newsGrid.innerHTML = "";

  categoryList.forEach((category) => {
    const stories = state.storiesByCategory[category.id] || [];
    newsGrid.append(createCategoryOutline(category, stories));
  });
  renderProgress();
}

function renderCategoryJump() {
  const categoryList = categories.filter((category) => state.visibleCategoryIds.includes(category.id));
  categoryJump.innerHTML = categoryList
    .map((category) => `<a href="#category-${category.id}">${escapeHtml(category.label)}</a>`)
    .join("");
}

function createCategoryOutline(category, stories) {
  const availableStories = state.hideRead ? stories.filter((story) => !state.readStories.has(storyId(story))) : stories;
  const visibleStories = availableStories.slice(0, state.briefMode ? 1 : state.categoryLimits[category.id] || 3);
  const card = document.createElement("article");
  card.className = "outline-card";
  card.id = `category-${category.id}`;

  if (!stories.length || !visibleStories.length) {
    card.innerHTML = `
      <div class="outline-heading">
        <div>
          <p class="eyebrow">${category.label}</p>
          <h2>${stories.length ? "All caught up" : "No clear update yet"}</h2>
        </div>
      </div>
      <p class="reader-note">${
        stories.length
          ? "You have marked the visible stories in this category as done."
          : "Try a wider update window, or reveal more categories for a broader reading day."
      }</p>
    `;
    return card;
  }

  const gist = buildCategoryGist(category, visibleStories);
  card.innerHTML = `
    <div class="outline-heading">
      <div>
        <p class="eyebrow">${category.label}</p>
        <h2>${escapeHtml(gist.headline)}</h2>
      </div>
      <span class="outline-count">${state.briefMode ? "1 key update" : `${stories.length} updates`}</span>
    </div>
    <ol class="outline-list">
      ${visibleStories.map((story, index) => createOutlineItem(story, category, index)).join("")}
    </ol>
    ${
      state.briefMode
        ? ""
        : `<div class="card-actions">
            <button class="ghost-button similar-button" type="button">More like this</button>
          </div>`
    }
  `;

  card.querySelectorAll(".story-details-button").forEach((button) => {
    button.addEventListener("click", () => {
      toggleStoryDetails(button.dataset.storyId);
    });
  });
  card.querySelectorAll(".story-done-button").forEach((button) => {
    button.addEventListener("click", () => {
      toggleStoryDone(button.dataset.storyId);
    });
  });
  const similarButton = card.querySelector(".similar-button");
  if (similarButton) {
    similarButton.addEventListener("click", async () => {
      await loadMoreForCategory(category);
    });
  }

  return card;
}

function toggleBriefMode() {
  state.briefMode = !state.briefMode;
  localStorage.setItem("briefMode", String(state.briefMode));
  renderBriefMode();
  renderNews();
  statusText.textContent = state.briefMode
    ? "5-minute brief is on: one key update per category."
    : "Full outline is on: more stories per category.";
}

function renderBriefMode() {
  briefModeButton.textContent = state.briefMode ? "Full outline" : "5-minute brief";
  briefModeButton.setAttribute("aria-pressed", String(state.briefMode));
}

function toggleHideRead() {
  state.hideRead = hideReadToggle.checked;
  localStorage.setItem("hideRead", String(state.hideRead));
  renderNews();
}

function renderHideRead() {
  hideReadToggle.checked = state.hideRead;
}

function createOutlineItem(story, category, index) {
  const summary = buildSummary(story, category);
  const id = storyId(story);
  const isExpanded = state.expandedStories.has(id);
  const isDone = state.readStories.has(id);
  const detail = isExpanded
    ? `
      <div class="outline-detail">
        <p><span class="detail-label">Why it matters</span>${escapeHtml(summary.why)}</p>
        <p><span class="detail-label">Watch next</span>${escapeHtml(summary.watch)}</p>
        <p><span class="detail-label">Reading note</span>${escapeHtml(summary.detail)}</p>
      </div>
      <p class="card-source"><span class="source-dot"></span>${story.source} · ${formatDate(story.seendate)}</p>
      <a class="story-link" href="${story.url}" target="_blank" rel="noreferrer">Original source</a>
    `
    : "";

  return `
    <li>
      <span class="outline-number">${index + 1}</span>
      <div class="story-body">
        <h3>${escapeHtml(story.title)}</h3>
        <p class="summary-line"><span class="detail-label">What happened</span>${escapeHtml(summary.lead)}</p>
        <div class="story-actions">
          <button class="ghost-button story-details-button" type="button" data-story-id="${escapeHtml(id)}">
            ${isExpanded ? "Show less" : "More details"}
          </button>
          <button class="ghost-button story-done-button" type="button" data-story-id="${escapeHtml(id)}">
            ${isDone ? "Undo done" : "Done"}
          </button>
        </div>
        ${detail}
      </div>
    </li>
  `;
}

function toggleStoryDone(storyIdValue) {
  if (state.readStories.has(storyIdValue)) {
    state.readStories.delete(storyIdValue);
  } else {
    state.readStories.add(storyIdValue);
  }
  localStorage.setItem("readStories", JSON.stringify([...state.readStories]));
  renderNews();
}

function buildCategoryGist(category, stories) {
  const first = stories[0]?.title || "Fresh updates";
  const headline = `${category.label}: ${simplifyText(first, category.id)}`;

  if (category.id === "entertainment") {
    return {
      headline
    };
  }

  return {
    headline
  };
}

function buildSummary(story, category) {
  const title = story.title.replace(/\s+/g, " ").trim();
  const sourceSummary = cleanSummary(story.summary || "");
  if (sourceSummary) {
    const sourceSentences = splitSentences(sourceSummary);
    const firstSentence = sourceSentences[0] || sourceSummary;
    const secondSentence = sourceSentences[1] || "";
    const frame = categoryFrames[category.id] || categoryFrames.default;

    return {
      lead: makeLevelSummary(firstSentence, category.id),
      why: secondSentence || frame.why,
      watch: getWatch(`${title} ${sourceSummary}`.toLowerCase(), category.id),
      detail: frame.note,
    };
  }

  const subject = extractSubject(title, category.id);
  const frame = categoryFrames[category.id] || categoryFrames.default;
  const levelTone = {
    simple: frame.simple,
    standard: frame.standard,
    advanced: frame.advanced,
  };

  return {
    lead: `${levelTone[state.level]} ${subject.action}`,
    why: subject.why || frame.why,
    watch: subject.watch || frame.watch,
    detail: frame.note,
  };
}

function cleanSummary(value) {
  return value
    .replace(/\s+/g, " ")
    .replace(/\bU\.S\./g, "US")
    .replace(/\bU\.K\./g, "UK")
    .replace(/\bE\.U\./g, "EU")
    .replace(/\bU\.N\./g, "UN")
    .replace(/^\s*(live updates?|breaking news):\s*/i, "")
    .trim()
    .slice(0, 420);
}

function splitSentences(value) {
  return cleanSummary(value)
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)
    .slice(0, 2);
}

function makeLevelSummary(sentence, categoryId) {
  const simplified = simplifyText(sentence, categoryId);
  if (state.level === "simple") {
    return simplified
      .replace(/\baccording to\b/gi, "says")
      .replace(/\bapproximately\b/gi, "about")
      .replace(/\bindicates\b/gi, "shows");
  }
  if (state.level === "advanced") {
    return simplified;
  }
  return simplified.length > 260 ? `${simplified.slice(0, 257)}...` : simplified;
}

const categoryFrames = {
  politics: {
    simple: "The basic point:",
    standard: "In plain terms:",
    advanced: "The political signal:",
    why: "Political stories often change alliances, public trust, or the next policy decision.",
    watch: "Look for official responses, votes, negotiations, or whether allies support the move.",
    note: "Good keywords: government, election, diplomacy, sanctions, coalition.",
  },
  conflict: {
    simple: "The basic point:",
    standard: "In plain terms:",
    advanced: "The conflict signal:",
    why: "Conflict updates can affect civilian safety, aid access, borders, and diplomatic pressure.",
    watch: "Watch casualty reports, ceasefire talks, humanitarian corridors, and international reactions.",
    note: "Good keywords: ceasefire, strike, border, military, humanitarian.",
  },
  economy: {
    simple: "The basic point:",
    standard: "In plain terms:",
    advanced: "The market signal:",
    why: "Economic stories can affect prices, jobs, trade, investment, and household confidence.",
    watch: "Watch central bank comments, market reaction, company guidance, and new data releases.",
    note: "Good keywords: inflation, trade, market, growth, supply chain.",
  },
  literature: {
    simple: "The basic point:",
    standard: "In plain terms:",
    advanced: "The cultural signal:",
    why: "Book news shows which voices, histories, and debates are becoming more visible.",
    watch: "Look for reviews, prize decisions, reader response, and debates around the author or topic.",
    note: "Good keywords: novel, memoir, translated, prize, biography.",
  },
  entertainment: {
    simple: "The basic point:",
    standard: "In plain terms:",
    advanced: "The entertainment signal:",
    why: "Entertainment news is usually about audience attention, releases, reputation, or fan reaction.",
    watch: "Watch box office numbers, streaming rankings, tour dates, and public response.",
    note: "Keep this light: names, what happened, and why people are talking about it.",
  },
  f1: {
    simple: "The race point:",
    standard: "The F1 signal:",
    advanced: "The competitive signal:",
    why: "F1 stories often matter because they affect race pace, team strategy, driver standings, or next season's seats.",
    watch: "Watch qualifying pace, tire wear, penalties, upgrades, pit strategy, and whether team comments match race results.",
    note: "Good keywords: Grand Prix, qualifying, tire, upgrade, driver market, penalty.",
  },
  sims: {
    simple: "The Sims point:",
    standard: "The gameplay signal:",
    advanced: "The community signal:",
    why: "The Sims news matters when it changes gameplay, saves, mods, expansions, building tools, or what players expect next.",
    watch: "Watch patch notes, bug reports, mod compatibility, pack reviews, and EA or Maxis roadmap comments.",
    note: "Keep this practical: what changed, who reacts, and whether it affects normal gameplay.",
  },
  "new-tech-products": {
    simple: "The product point:",
    standard: "The product signal:",
    advanced: "The market signal:",
    why: "Product news matters when it changes what is worth buying, waiting for, or avoiding.",
    watch: "Watch price, release date, battery life, repairability, reviews, software support, and privacy tradeoffs.",
    note: "Good keywords: launch, review, battery, camera, chip, wearable, price.",
  },
  technology: {
    simple: "The basic point:",
    standard: "In plain terms:",
    advanced: "The technology signal:",
    why: "Tech stories can change privacy, work, security, regulation, or how people use digital tools.",
    watch: "Watch product details, safety concerns, company statements, and regulatory action.",
    note: "Good keywords: AI, software, cybersecurity, platform, data.",
  },
  climate: {
    simple: "The basic point:",
    standard: "In plain terms:",
    advanced: "The climate signal:",
    why: "Climate and energy stories can affect safety, food, infrastructure, and government planning.",
    watch: "Watch forecasts, policy changes, energy prices, and local emergency responses.",
    note: "Good keywords: heat, storm, energy, emissions, environment.",
  },
  science: {
    simple: "The basic point:",
    standard: "In plain terms:",
    advanced: "The science signal:",
    why: "Science and health stories can affect public advice, treatment choices, and future research.",
    watch: "Watch whether the finding is early research, a clinical result, or official guidance.",
    note: "Good keywords: study, trial, health, research, medicine.",
  },
  default: {
    simple: "The basic point:",
    standard: "In plain terms:",
    advanced: "The signal:",
    why: "This update may matter because it points to a change, a reaction, or a decision.",
    watch: "Watch who responds next and whether the story produces a concrete action.",
    note: "Read for the actor, the action, and the consequence.",
  },
};

function extractSubject(title, categoryId) {
  const clean = simplifyText(title, categoryId).replace(/\s+/g, " ").trim();
  const lower = clean.toLowerCase();
  const actor = getActor(clean);
  const action = getAction(lower, clean, actor, categoryId);
  const why = getWhy(lower, categoryId);
  const watch = getWatch(lower, categoryId);

  return { action, why, watch };
}

function getActor(title) {
  const beforeVerb = title.split(/\b(meet|meets|warn|warns|announce|announces|open|opens|rise|rises|reshape|reshapes|draw|draws|compete|competes|continue|continues|report|reports|discuss|discusses)\b/i)[0];
  const trimmed = beforeVerb.replace(/^[^A-Za-z0-9]+/, "").trim();
  return trimmed.split(/\s+/).slice(0, 5).join(" ") || "The story";
}

function getAction(lower, title, actor, categoryId) {
  const actions = [
    ["ceasefire", `${actor} points to talks or pressure around stopping violence, not only a single battlefield event.`],
    ["strike", `${actor} suggests a new security incident that could raise tensions or trigger a response.`],
    ["sanction", `${actor} suggests governments are using economic pressure to influence another actor's behavior.`],
    ["election", `${actor} points to a possible change in political power or public opinion.`],
    ["inflation", `${actor} is about price pressure and how it may shape central bank or household decisions.`],
    ["market", `${actor} shows investors reacting to new risks, data, or policy signals.`],
    ["trade", `${actor} is about rules or disputes that can affect supply chains and prices.`],
    ["shortlist", `${actor} highlights books or writers receiving new attention from prizes and critics.`],
    ["biography", `${actor} revisits a person's life and may reopen debate about their work or legacy.`],
    ["film", `${actor} is about audience interest, release performance, or the business of entertainment.`],
    ["music", `${actor} is about fans, artists, live events, or the business around a release.`],
    ["streaming", `${actor} points to competition for audience time and platform attention.`],
    ["formula 1", `${actor} is about race performance, team decisions, driver standings, or the wider F1 season picture.`],
    ["f1", `${actor} is about race performance, team decisions, driver standings, or the wider F1 season picture.`],
    ["grand prix", `${actor} points to a race weekend where qualifying, tire strategy, and penalties can change the result.`],
    ["the sims", `${actor} is about gameplay changes, player reaction, expansions, patches, or life simulation competition.`],
    ["sims 4", `${actor} is about gameplay changes, player reaction, expansions, patches, or life simulation competition.`],
    ["project rene", `${actor} points to the future direction of The Sims and what players may get next.`],
    ["smartphone", `${actor} is about a product launch or review where price, battery, camera, and software support matter.`],
    ["laptop", `${actor} is about a product launch or review where performance, battery life, price, and real daily use matter.`],
    ["gadget", `${actor} is about whether a new device is actually useful, affordable, and ready for everyday use.`],
    ["wearable", `${actor} is about health tracking, convenience, battery life, and personal data tradeoffs.`],
    ["artificial intelligence", `${actor} is about AI tools, risks, regulation, or changes in work.`],
    ["cyber", `${actor} points to a digital security risk or response.`],
    ["climate", `${actor} is about environmental pressure, policy, or public safety.`],
    ["health", `${actor} may affect medical advice, research priorities, or public behavior.`],
  ];

  const match = actions.find(([keyword]) => lower.includes(keyword));
  if (match) return match[1];

  if (categoryId === "entertainment") {
    return `${actor} is the main name or event to notice; the useful question is why audiences are paying attention now.`;
  }

  return `${actor} appears to be the main actor or topic, with the story centered on a new development or reaction.`;
}

function getWhy(lower, categoryId) {
  if (lower.includes("ceasefire") || lower.includes("aid")) {
    return "The stakes are immediate because pauses in fighting can affect civilian safety and humanitarian access.";
  }
  if (lower.includes("inflation") || lower.includes("central bank")) {
    return "The stakes are practical because price data can influence interest rates, markets, and everyday costs.";
  }
  if (lower.includes("sanction")) {
    return "The stakes are diplomatic because sanctions can pressure governments while also affecting trade and allies.";
  }
  if (lower.includes("shortlist") || lower.includes("prize")) {
    return "The stakes are cultural because awards can bring attention to new writers, languages, and public debates.";
  }
  return (categoryFrames[categoryId] || categoryFrames.default).why;
}

function getWatch(lower, categoryId) {
  if (lower.includes("talk")) return "Watch whether talks produce a signed agreement, a deadline, or only public statements.";
  if (lower.includes("market")) return "Watch whether the reaction lasts beyond one trading day.";
  if (lower.includes("announce")) return "Watch the details behind the announcement, because the first headline may hide the real cost or impact.";
  if (lower.includes("warn")) return "Watch whether the warning leads to action, funding, evacuation, or policy change.";
  return (categoryFrames[categoryId] || categoryFrames.default).watch;
}

function simplifyText(text, categoryId) {
  if (categoryId === "entertainment") {
    return text
      .replace(/\bcommences\b/gi, "starts")
      .replace(/\bapproximately\b/gi, "about")
      .replace(/\bsubsequent\b/gi, "next");
  }
  if (state.level === "simple") {
    return text
      .replace(/\bdiplomatic\b/gi, "government talk")
      .replace(/\binflation\b/gi, "rising prices")
      .replace(/\bcoalition\b/gi, "political group");
  }
  return text;
}

function toggleStoryDetails(storyIdValue) {
  if (state.expandedStories.has(storyIdValue)) {
    state.expandedStories.delete(storyIdValue);
  } else {
    state.expandedStories.add(storyIdValue);
  }
  localStorage.setItem("expandedStories", JSON.stringify([...state.expandedStories]));
  renderNews();
}

async function loadMoreForCategory(category) {
  statusText.textContent = `Loading more ${category.label.toLowerCase()} stories...`;
  state.storiesByCategory[category.id] = await fetchCategory(category, 10);
  state.categoryLimits[category.id] = Math.min(state.storiesByCategory[category.id].length, (state.categoryLimits[category.id] || 3) + 3);
  localStorage.setItem("categoryLimits", JSON.stringify(state.categoryLimits));
  renderNews();
  statusText.textContent = `Added more ${category.label.toLowerCase()} stories.`;
}

async function showMoreCategories() {
  const hidden = categories.filter((category) => !state.visibleCategoryIds.includes(category.id)).slice(0, 2);
  hidden.forEach((category) => state.visibleCategoryIds.push(category.id));
  await loadNews();
}

function showTranslationForSelection(event) {
  const text = window.getSelection().toString().trim();
  if (event.target.closest(".selection-popover")) return;
  if (!text || text.length > 180) {
    popover.hidden = true;
    return;
  }

  event.preventDefault();

  state.selectedText = text;
  selectedText.textContent = text;
  translationText.textContent = translateText(text);
  positionPopover(event);
  popover.hidden = false;
}

function positionPopover(event) {
  const width = Math.min(390, window.innerWidth - 36);
  const left = Math.min(event.clientX + 12, window.innerWidth - width - 18);
  const top = Math.min(event.clientY + 12, window.innerHeight - 220);

  popover.style.width = `${width}px`;
  popover.style.left = `${Math.max(18, left)}px`;
  popover.style.top = `${Math.max(18, top)}px`;
  popover.style.right = "auto";
  popover.style.bottom = "auto";
}

function translateText(text) {
  const normalized = text.toLowerCase().replace(/[^a-z\s-]/g, "").trim();
  if (dictionary[normalized]) return dictionary[normalized];

  const words = normalized.split(/\s+/).filter(Boolean);
  const hits = words
    .map((word) => dictionary[word])
    .filter(Boolean)
    .slice(0, 5);

  if (hits.length) {
    return `关键词：${hits.join("；")}。整句翻译可在后续接入免费或低成本翻译服务。`;
  }

  if (words.length > 1) {
    return "句子已选中。免费 MVP 先保存句子和关键词；正式版可接入翻译服务或浏览器本地模型。";
  }

  return "暂未收录释义。保存后可以在复习时手动补充。";
}

function saveSelectedText() {
  if (!state.selectedText) return;
  const item = {
    text: state.selectedText,
    note: translateText(state.selectedText),
    savedAt: new Date().toISOString(),
  };

  const exists = state.vocab.some((entry) => entry.text.toLowerCase() === item.text.toLowerCase());
  if (!exists) {
    state.vocab.unshift(item);
    localStorage.setItem("savedVocabulary", JSON.stringify(state.vocab));
    renderSavedCount();
  }
  popover.hidden = true;
}

function openVocabulary() {
  renderVocabulary();
  vocabDialog.showModal();
}

function renderVocabulary() {
  vocabList.innerHTML = "";
  reviewCard.innerHTML = "";

  if (!state.vocab.length) {
    reviewCard.textContent = "Select a word or sentence, right-click it, then add it here if it feels worth remembering.";
    vocabList.innerHTML = `<div class="empty-state">No saved vocabulary yet.</div>`;
    return;
  }

  const random = state.vocab[Math.floor(Math.random() * state.vocab.length)];
  reviewCard.innerHTML = `<strong>${escapeHtml(random.text)}</strong><p>${escapeHtml(random.note)}</p>`;

  state.vocab.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "vocab-item";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(item.text)}</strong>
        <p class="meta-line">${escapeHtml(item.note)}</p>
      </div>
      <div class="vocab-actions">
        <span class="meta-line">${formatDate(item.savedAt)}</span>
        <button class="ghost-button delete-vocab-button" type="button" data-index="${index}">Delete</button>
      </div>
    `;
    vocabList.append(row);
  });

  vocabList.querySelectorAll(".delete-vocab-button").forEach((button) => {
    button.addEventListener("click", () => {
      deleteVocabularyItem(Number(button.dataset.index));
    });
  });
}

function deleteVocabularyItem(index) {
  state.vocab.splice(index, 1);
  localStorage.setItem("savedVocabulary", JSON.stringify(state.vocab));
  renderSavedCount();
  renderVocabulary();
}

function renderSavedCount() {
  savedCount.textContent = `${state.vocab.length} saved ${state.vocab.length === 1 ? "item" : "items"}`;
}

function renderProgress() {
  const visibleStories = Object.values(state.storiesByCategory).flat();
  const readCount = visibleStories.filter((story) => state.readStories.has(storyId(story))).length;
  const totalCount = visibleStories.length;
  progressText.textContent = `${readCount}/${totalCount} read`;
}

function storyId(story) {
  return `${story.url}-${story.title}`.replace(/[^a-zA-Z0-9_-]+/g, "-").slice(0, 120);
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "recent";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
