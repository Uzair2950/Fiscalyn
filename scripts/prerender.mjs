import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distDir = path.join(root, "dist");
const serverEntry = path.join(distDir, "server", "entry-server.js");
const templatePath = path.join(distDir, "index.html");

const {
  render,
  getSeoForPath,
  LEGACY_BLOG_REDIRECTS,
  PUBLIC_ROUTES,
  SITE_URL,
} = await import(pathToFileURL(serverEntry).href);

const template = await readFile(templatePath, "utf8");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const jsonForHtml = (value) => JSON.stringify(value).replaceAll("<", "\\u003c");

const verificationMeta = [
  process.env.GOOGLE_SITE_VERIFICATION
    ? `  <meta name="google-site-verification" content="${escapeHtml(process.env.GOOGLE_SITE_VERIFICATION)}" />`
    : "",
  process.env.BING_SITE_VERIFICATION
    ? `  <meta name="msvalidate.01" content="${escapeHtml(process.env.BING_SITE_VERIFICATION)}" />`
    : "",
]
  .filter(Boolean)
  .join("\n");

const renderHead = (seo) => {
  const articleMeta =
    seo.type === "article"
      ? `\n  <meta property="article:published_time" content="${escapeHtml(seo.publishedAt)}" />\n  <meta property="article:modified_time" content="${escapeHtml(seo.modifiedAt)}" />`
      : "";
  const structuredData = seo.structuredData
    .map(
      (item) =>
        `  <script type="application/ld+json" data-seo-jsonld="true">${jsonForHtml(item)}</script>`,
    )
    .join("\n");

  return `<!--seo-start-->
  <meta name="description" content="${escapeHtml(seo.description)}" />
  <meta name="robots" content="${escapeHtml(seo.robots)}" />
${verificationMeta}
  <link rel="canonical" href="${escapeHtml(seo.canonical)}" />
  <meta property="og:type" content="${escapeHtml(seo.type)}" />
  <meta property="og:site_name" content="47 Accountants" />
  <meta property="og:title" content="${escapeHtml(seo.title)}" />
  <meta property="og:description" content="${escapeHtml(seo.description)}" />
  <meta property="og:url" content="${escapeHtml(seo.canonical)}" />
  <meta property="og:image" content="${escapeHtml(seo.image)}" />${articleMeta}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
  <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
  <meta name="twitter:image" content="${escapeHtml(seo.image)}" />
  <title>${escapeHtml(seo.title)}</title>
${structuredData}
  <!--seo-end-->`;
};

const pageOutputPath = (routePath) => {
  if (routePath === "/") return path.join(distDir, "index.html");
  return path.join(distDir, routePath.slice(1), "index.html");
};

const writeRoute = async (routePath, renderPath = routePath) => {
  const seo = getSeoForPath(routePath);
  const markup = render(renderPath);
  const html = template
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, renderHead(seo))
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const outputPath = pageOutputPath(routePath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
};

for (const route of PUBLIC_ROUTES) {
  await writeRoute(route.path);
}

const notFoundSeo = getSeoForPath("/404");
const notFoundHtml = template
  .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, renderHead(notFoundSeo))
  .replace('<div id="root"></div>', `<div id="root">${render("/404")}</div>`);
await writeFile(path.join(distDir, "404.html"), notFoundHtml, "utf8");

const sitemapEntries = PUBLIC_ROUTES.map(
  (route) => `  <url>
    <loc>${route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
).join("\n");

await writeFile(
  path.join(distDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`,
  "utf8",
);

const redirectsPath = path.join(distDir, "_redirects");
const redirectsSource = await readFile(redirectsPath, "utf8");
const fallbackIndex = redirectsSource.search(/^\/\*\s+/m);
const redirectPreamble =
  fallbackIndex >= 0 ? redirectsSource.slice(0, fallbackIndex).trimEnd() : redirectsSource.trimEnd();
const redirectFallback =
  fallbackIndex >= 0 ? redirectsSource.slice(fallbackIndex).trim() : "/* /404.html 404";
const legacyRedirectLines = LEGACY_BLOG_REDIRECTS.map(
  ({ from, to }) => `${from}  ${to}  301!`,
).join("\n");

await writeFile(
  redirectsPath,
  `${redirectPreamble}\n\n# Consolidated synthetic article URLs\n${legacyRedirectLines}\n\n${redirectFallback}\n`,
  "utf8",
);

await rm(path.join(distDir, "server"), { recursive: true, force: true });

console.log(`Pre-rendered ${PUBLIC_ROUTES.length} canonical routes plus 404.html.`);
