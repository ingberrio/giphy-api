import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://api.giphy.com/v1";
const yourAPIKey = "";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/gifs/random", {
          params: {
            api_key: yourAPIKey,
          },
        });
        res.render("index.ejs", { content: result.data });
      } catch (error) {
        res.status(404).send(error.message);
      }
})

app.get("/stickers", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/stickers/random", {
          params: {
            api_key: yourAPIKey,
          },
        });
        res.render("index.ejs", { content: result.data });
      } catch (error) {
        res.status(404).send(error.message);
      }
})

app.get("/trending", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/gifs/trending", {
          params: {
            api_key: yourAPIKey,
            limit: 1,
          },
        });
        res.render("index.ejs", { response: result.data });
        
      } catch (error) {
        res.status(404).send(error.message);
      }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})