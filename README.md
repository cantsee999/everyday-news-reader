# Everyday News Reader

一个全免费优先的英语新闻学习 PWA 原型。

## 当前功能

- 按类别展示国际政治、战争情况、经济、文学、娱乐等英文新闻。
- 默认 B1/B2，可切换 Simple / Standard / Advanced。
- 娱乐新闻会用更轻的阅读提示，避免不必要的难词。
- 每条 outline 用 What happened / Why it matters / Watch next 帮你判断大概情况。
- 选中单词或句子后右击，弹出中文释义卡片。
- 支持把值得记的词句加入生词本，并在 Vocabulary 里复习或删除。
- 默认直接展示每个类别的新闻 outline，降低用户一上来就做选择的成本。
- 支持 5-minute brief 模式，每个类别只显示 1 条重点更新。
- 支持每条新闻单独 “More details”，需要深入时只展开那一条。
- 支持按类别 “More like this”，对某类新闻感到新奇时再加载更多同类新闻。
- 支持 “More categories”。
- 支持 Done / Hide read stories，读过的新闻可以标记完成并隐藏。
- 支持 `data/news-data.js` 本地缓存，即使用 `file://` 直接打开也能读取真实新闻缓存。
- PWA 离线缓存，可部署到 Vercel 或 Cloudflare Pages 免费额度。
- 可用 `scripts/update-news.mjs` 生成 `data/news.json`，把公开新闻标题和发布方 meta description 缓存为更真实的摘要来源。

## 免费方案说明

这个版本不依赖付费云服务。新闻抓取在浏览器端调用 GDELT 公开接口；如果接口不可用，会自动显示演示数据。生词本和兴趣标记暂存在浏览器 `localStorage`。

跨设备登录和同步需要接入免费额度服务，例如 Supabase。那一步需要你创建 Supabase 项目并提供公开配置，不需要一开始购买云服务。

## 本地打开

直接打开 `index.html` 可以看静态界面。为了启用 PWA 和跨域请求，推荐启动一个本地静态服务器：

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://localhost:4173
```

## 更新新闻缓存

```bash
node scripts/update-news.mjs
```

脚本会从 GDELT 拉取英文新闻列表，再尝试读取原文页面的 `og:description` 或 `meta description`，写入 `data/news.json` 和 `data/news-data.js`。部署到云端后，可以用 GitHub Actions 或其他免费定时任务每天中国时间早上运行一次。

## GitHub Actions 自动更新

已添加 `.github/workflows/update-news.yml`。上传到 GitHub 后，它会：

- 每天中国时间早上 7 点自动运行。
- 也可以在 GitHub 的 Actions 页面手动点 `Run workflow`。
- 运行 `node scripts/update-news.mjs` 更新 `data/news.json` 和 `data/news-data.js`。
- 如果新闻缓存有变化，会自动 commit 回仓库。

如果 GitHub 仓库没有允许 Actions 写入，需要到 `Settings -> Actions -> General -> Workflow permissions` 选择 `Read and write permissions`。

## 下一步

- 接入 Supabase Auth 和数据库，实现跨设备登录、生词本同步、兴趣同步。
- 增加每日中国时间 7 点的免费定时更新。
- 接入更稳定的免费新闻源组合：GDELT + RSS 白名单。
- 把翻译从本地词典升级为可配置翻译服务。
