const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World From Backend");
});

app.get("/api/cryptocurrency", async (req, res) => {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from CoinMarketCap API");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
