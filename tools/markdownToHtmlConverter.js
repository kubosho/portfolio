const path = require('path');
const { mkdir, readFile, writeFile } = require('fs/promises');
const { promisify } = require('util');
const markdown = require('markdown-wasm');
const glob = require('glob');

const asyncGlob = promisify(glob);

const SRC_DIR = './texts';
const DIST_DIR = './build';
const SOURCE = `${SRC_DIR}/**/*.md`;

async function main() {
  const markdownFileNameList = await asyncGlob(SOURCE);

  markdownFileNameList.forEach(async (filename) => {
    const distFilePath = filename.replace(SRC_DIR, DIST_DIR).replace('.md', '.html');
    const distDirName = path.dirname(distFilePath);

    const contents = await readFile(filename, { encoding: 'utf-8' });
    const htmlString = markdown.parse(contents);

    try {
      await mkdir(distDirName, { recursive: true });
    } catch (err) {
      console.error(err);
    }

    await writeFile(distFilePath, htmlString);
  });
}

module.exports = main;
