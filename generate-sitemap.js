import fs from "fs";
import path from "path";
import prettier from "prettier";

const sitemapPath = "./static/sitemap.xml"; // Adjust path as needed
const domain = "https://kovanen.io";
const srcDir = "./src/routes";

function toUrlPath(routePath) {
  // const trimmedSrcDir1 = srcDir.replace("./", "").replace("/", "\\"); // Windows
  const trimmedSrcDir2 = srcDir.replace("./", "").replace("\\", "/"); // Unix
  const url = routePath.replace(trimmedSrcDir2, "").replace("+page.svelte", "").replaceAll(" ", "%20").replaceAll("\\", "/").slice(0, -1);

  return domain + url;
}

async function generateSitemap() {
  let urls = [];

  function exploreDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const fullPath = path.join(directory, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        exploreDirectory(fullPath);
      } else if (file.endsWith("+page.svelte")) {
        const url = toUrlPath(fullPath);
        if (url && !urls.includes(url) && url !== "") {
          urls.push(url);
        }
      }
    }
  }

  exploreDirectory(srcDir);

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${
      url == domain
        ? "weekly"
        : url.includes("article")
        ? "yearly"
        : "monthly"
    }</changefreq>
    <priority>${
      url == domain
        ? "1.0"
        : url.includes("article")
        ? "0.1"
        : "0.5"
    }</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  const formatted = await prettier.format(sitemapContent, {parser: "html"});
  fs.writeFileSync(sitemapPath, formatted);

  console.log(`Sitemap generated with ${urls.length} URLs.`);
}

generateSitemap();
