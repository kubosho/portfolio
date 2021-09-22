const { promisify } = require('util');
const { build } = require('esbuild');
const glob = require('glob');

const convertMarkdownToHtml = require('./tools/markdownToHtmlConverter');

const asyncGlob = promisify(glob);

const OUT_DIR = './_site';

async function buildSources() {
  const entryPoints = await asyncGlob('./src/**/*.ts');

  build({
    entryPoints,
    outbase: './src',
    outdir: OUT_DIR,
    platform: 'browser',
    bundle: true,
    external: [],
    watch: false,
  });
}

module.exports = (eleventyConfig) => {
  eleventyConfig.on('beforeBuild', async () => {
    await buildSources();
    await convertMarkdownToHtml();
  });

  return {
    dir: {
      input: './views',
      output: OUT_DIR,
    },
  };
};
