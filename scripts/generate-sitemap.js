const fs = require('fs');
const path = require('path');

const origin = 'https://lukasmaurer.art';
const routesPath = path.join(__dirname, '..', 'src', 'app', 'app-routing.module.ts');
const sitemapPath = path.join(__dirname, '..', 'src', 'sitemap.xml');
const routesSource = fs.readFileSync(routesPath, 'utf8');

const routes = [...routesSource.matchAll(/\{\s*path:\s*'([^']+)'/g)]
  .map((match) => match[1])
  .filter((route) => route && route !== '**' && !route.includes(':'));

if (routes.length === 0) {
  throw new Error(`No static routes found in ${routesPath}`);
}

const urls = [...new Set(routes)]
  .map((route) => `  <url>\n    <loc>${origin}/${route}</loc>\n  </url>`)
  .join('\n');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urls,
  '</urlset>',
  '',
].join('\n');

fs.writeFileSync(sitemapPath, sitemap);
