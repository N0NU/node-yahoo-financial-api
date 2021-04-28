import axios from "axios";

/**
 * fetch the latest news from yahoo financial news api
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getNews = async (req, res) => {
  const {
    query: { q, region },
  } = req;
  let response;
  // q is required param
  if (!q) {
    return res.status(400).send("Parameter 'q' is required");
  }

  try {
    response = await axios({
      method: "GET",
      url: `https://${process.env.API_HOST}/auto-complete`,
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST,
        useQueryString: true,
      },
      params: { q, ...(region && { region }) },
    });
  } catch (err) {
    return res.status(403).send(err.message);
  }

  return res.send(response.data);
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getAnalysis = async (req, res) => {
  const {
    query: { symbol, region },
  } = req;
  let response;

  // symbol is required param
  if (!symbol) {
    return res.status(400).send("Parameter 'symbol' is required");
  }

  try {
    response = await axios({
      method: "GET",
      url: `https://${process.env.API_HOST}/stock/v2/get-analysis`,
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST,
        useQueryString: true,
      },
      params: { symbol, ...(region && { region }) },
    });
  } catch (err) {
    return res.status(403).send(err.message);
  }

  return res.send(response.data);
};
