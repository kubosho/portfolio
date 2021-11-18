const path = require('path');
const { mkdir, readFile, writeFile } = require('fs/promises');
const { promisify } = require('util');
const markdown = require('markdown-wasm');
const glob = require('glob');

const asyncGlob = promisify(glob);

const SRC_DIR = './texts';
const DIST_DIR = './build';
const SOURCE = `${SRC_DIR}/**/*.md`;

async function convertToHtmlString(filename) {
  const contents = await readFile(filename, { encoding: 'utf-8' });
  const htmlString = markdown.parse(contents);

  if (filename.includes('skill-sets')) {
    const modifiedHtmlString = htmlString.replaceAll(/<(\/)?h2>/g, '<$1dt>').replaceAll(/<(\/)?p>/g, '<$1dd>');
    return `<dl>${modifiedHtmlString}</dl>`;
  }

  return htmlString;
}

async function main() {
  const markdownFileNameList = await asyncGlob(SOURCE);

  markdownFileNameList.forEach(async (filename) => {
    const htmlString = await convertToHtmlString(filename);

    try {
      const distFilePath = filename.replace(SRC_DIR, DIST_DIR).replace('.md', '.html');
      const distDirName = path.dirname(distFilePath);

      await mkdir(distDirName, { recursive: true });
      await writeFile(distFilePath, htmlString);
    } catch (err) {
      console.error(err);
    }
  });
}

module.exports = main;
