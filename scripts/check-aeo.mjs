import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.join(process.cwd(), "out");
const readOutput = (file) => readFile(path.join(outputDirectory, file), "utf8");

const [homeHtml, robots, sitemap, llms] = await Promise.all([
  readOutput("index.html"),
  readOutput("robots.txt"),
  readOutput("sitemap.xml"),
  readOutput("llms.txt"),
]);

function checkHeadings(html, pageName) {
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  assert.equal(h1Count, 1, `Expected one H1 on ${pageName}, found ${h1Count}`);

  const headingLevels = [...html.matchAll(/<h([1-6])\b/gi)].map((match) =>
    Number(match[1]),
  );
  for (let index = 1; index < headingLevels.length; index += 1) {
    assert.ok(
      headingLevels[index] <= headingLevels[index - 1] + 1,
      `${pageName} jumps from H${headingLevels[index - 1]} to H${headingLevels[index]}`,
    );
  }
}

checkHeadings(homeHtml, "the homepage");

assert.match(
  homeHtml,
  /<link rel="canonical" href="https:\/\/ivank\.tech\/?"\s*\/?>/i,
  "Homepage canonical URL is missing or incorrect",
);

const descriptionMatch = homeHtml.match(
  /<meta name="description" content="([^"]+)"\s*\/?>/i,
);
assert.ok(descriptionMatch, "Homepage meta description is missing");
assert.ok(
  descriptionMatch[1].length >= 120 && descriptionMatch[1].length <= 160,
  `Meta description must be 120–160 characters; found ${descriptionMatch[1].length}`,
);

const jsonLdMatch = homeHtml.match(
  /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i,
);
assert.ok(jsonLdMatch, "Homepage JSON-LD is missing");
const jsonLd = JSON.parse(jsonLdMatch[1]);
const graph = Array.isArray(jsonLd["@graph"]) ? jsonLd["@graph"] : [jsonLd];

for (const requiredType of ["Organization", "Service", "FAQPage"]) {
  assert.ok(
    graph.some((item) => item["@type"] === requiredType),
    `${requiredType} structured data is missing`,
  );
}

const faq = graph.find((item) => item["@type"] === "FAQPage");
assert.ok(faq.mainEntity.length >= 3, "FAQ schema must contain at least three questions");

assert.match(
  robots,
  /^Sitemap: https:\/\/ivank\.tech\/sitemap\.xml$/m,
  "robots.txt does not reference the canonical sitemap",
);
assert.doesNotMatch(sitemap, /ivankarabeinikau\.com/i, "Sitemap contains the old host");

const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
assert.ok(sitemapLocations.length > 0, "Sitemap contains no URLs");
assert.ok(
  sitemapLocations.every((location) => location.startsWith("https://ivank.tech/")),
  "Every sitemap URL must use https://ivank.tech/",
);

for (const location of sitemapLocations) {
  const url = new URL(location);
  const outputFile =
    url.pathname === "/" ? "index.html" : `${url.pathname.slice(1)}.html`;
  const html = await readOutput(outputFile);
  const expectedCanonical =
    url.pathname === "/" ? "https://ivank.tech" : location.replace(/\/$/, "");

  assert.ok(
    html.includes(`<link rel="canonical" href="${expectedCanonical}"`),
    `${url.pathname} canonical URL is missing or incorrect`,
  );
  checkHeadings(html, url.pathname);
}

assert.match(llms, /^# Ivan Karabeinikau/m, "llms.txt needs a descriptive title");
assert.match(llms, /^## Services$/m, "llms.txt needs a services section");
assert.match(llms, /^## Key pages$/m, "llms.txt needs a key pages section");
assert.doesNotMatch(llms, /<!doctype html>/i, "llms.txt must not contain HTML");

console.log("AEO checks passed.");
