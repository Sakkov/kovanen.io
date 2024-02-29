import fs from 'fs';
import path from 'path';

const articlesDir = './src/routes/articles/';
const output = './src/lib/articles.js';

// Function to extract the first paragraph from the article
function extractFirstParagraph(content) {
    const match = content.match(/<p>(.*?)<\/p>/);
    return match ? match[1] : '';
}

// Function to extract the timestamp from the article
function extractTimestamp(content) {
    const match = content.match(/<time>(.*?)<\/time>/);
    // If multiple found choose the last one
    return match ? match[match.length - 1] : '0';
}

// Function to extract the date from the article
function extractDate(content) {
    const match = content.match(/<span>(.*?)<\/span>/);
    // If multiple found choose the last one
    return match ? match[match.length - 1] : '';
}

// Get all articles
const articles = fs.readdirSync(articlesDir)
  .filter(file => fs.statSync(path.join(articlesDir, file)).isDirectory())
  .map(route => {
    const articlePath = path.join(articlesDir, route, '+page.svelte');
    const content = fs.readFileSync(articlePath, 'utf-8');
    const title = content.match(/<h1>(.*?)<\/h1>/) ? content.match(/<h1>(.*?)<\/h1>/)[1] : route;
    const firstParagraph = extractFirstParagraph(content);
    // Extract the timestamp and convert it to an integer
    const timestamp = parseInt(extractTimestamp(content));
    // Extract the date
    const date = extractDate(content);
    return { title, route, firstParagraph, timestamp, date };
});

// Sort articles by date
articles.sort((a, b) => b.timestamp - a.timestamp);

// Use only the first 5 articles
articles.splice(5);

// Write the articles to a file
fs.writeFileSync(output, `export const articles = ${JSON.stringify(articles, null, 2)};`);

console.log('Articles list generated');