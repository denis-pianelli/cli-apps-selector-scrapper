# Web Page Scraper

This is a simple Node.js script for scraping text content from a web page. It utilizes Axios for HTTP requests, Cheerio to parse the result, and Yargs for command-line argument parsing.

## Usage

```bash
./scraper.js --url <URL> --selector <CSS selector>
```

## Options

- `--url` or `-u`: The URL of the web page (required).
- `--selector` or `-s`: The CSS selector for the element to scrape (required).
  
## Example

```bash
./scraper.js --url https://example.com --selector h1
```

This example will scrape and print the text content of the `h1` element from the provided URL.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): HTTP client for making requests.
- [cheerio](https://www.npmjs.com/package/cheerio): jQuery implementation for server-side.
- [yargs](https://www.npmjs.com/package/yargs): Command-line argument parser.

## Installation

Before using the script, make sure to install the required dependencies:

```bash
npm install
```

## How it works

The script fetches the web page content using Axios and then uses Cheerio to parse the HTML. It selects the element specified by the provided CSS selector and prints its text content.

## License

This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
