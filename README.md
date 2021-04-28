# About

The project utilizes the yahoo finance's news and analysis APIs
Yahoo Finance API helps to query for all information about finance summary, stocks, quotes, movers, etc.

## API

- `/news` to fetch the latest news from endpoint `https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete` required query parameter `q`
- `/get-analysis` to fetch the latest analysis from endpoint `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis` required query parameter `symbol`

NOTE: in environment file you need to add your rapidapi api_key
