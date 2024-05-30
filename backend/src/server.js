const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = process.env.PORT || 5000;

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
          "X-CMC_PRO_API_KEY": "9b628ba8-a442-46c8-8aad-a90ba0d69bb7",
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
