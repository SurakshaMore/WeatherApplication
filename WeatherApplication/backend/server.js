const express = require("express");

const axios = require("axios");

const cors = require("cors");

const app = express();
const port = 5550;

app.use(cors());
app.use(express.json());

const api_key = "30f3afd1e4ad1f82dc0da632ab5f664d";
const apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather";

app.post("/search", async (req, res) => {
  const { searchText } = req.body;

  if (searchText) {
    try {
      const response = await axios({
        method: "GET",
        url: `${apiBaseUrl}?q=${searchText}&appid=${api_key}`,
      });
      console.log(response);
      const data = await response.data;
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error fetching weather data" });
    }
  } else {
    return res.status(400).json({ error: "Missing search text" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
