#!/usr/bin/env node
const axios = require('axios');
const cheerio = require('cheerio');
const yargs = require('yargs');

const argv = yargs
  .usage('Usage: $0 [options]')
  .example('$0 --url <URL> --selector <CSS selector>', 'Scrape text content from a web page')
  .option('url', {
    alias: 'u',
    describe: 'The URL of the web page',
    demandOption: true,
    type: 'string'
  })
  .option('selector', {
    alias: 's',
    describe: 'The CSS selector for the element',
    demandOption: true,
    type: 'string'
  })
  .argv;

async function scrapeContent(url, selector) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const selectedElement = $(selector);

    if (selectedElement.length > 0) {
      console.log(selectedElement.text().trim());
    } else {
      console.log('No matching element found for the provided selector.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

scrapeContent(argv.url, argv.selector);
