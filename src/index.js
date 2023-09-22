#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name as an argument.');
  process.exit(1);
}

const filePath = path.resolve(fileName);

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  const lines = data.split('\n');
  const paragraphs = lines.map(line => `<p>${line}</p>`).join('\n');
  const article = `<article>${paragraphs}</article>`;
  console.log(article);
});