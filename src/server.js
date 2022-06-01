const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");

const app = express();
require('dotenv').config()

const port = process.env.port || 5000;

let newsObject = [];
const image = [];
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.write("hey");
  res.end();
});
app.get("/goodnews", (req, res) => {
  res.send("banana");
});

app.get("/good", (req, res) => {
  axios
    .get("https://old.reddit.com/r/UpliftingNews/")
    .then((resp) => {
      const htmlData = resp.data;
      const $ = cheerio.load(htmlData);
      $(".thing").each((i, ele) => {
        const newsTitle = $(ele).find("a.title").text();
        let newsImage =
          $(ele).find("img").attr("src") != undefined
            ? $(ele).find("img").attr("src").slice(2)
            : "";
        const newsUrl = $(ele).find("a.title").attr("href");
        if (newsImage.includes("tps")) {
          newsImage = "";
        }

        const newsElement = {
          newsTitle,
          newsImage,
          newsUrl,
        };
        newsObject.push(newsElement);
      });
    })
    .catch((err) => console.log(err));
  res.json(newsObject);
  newsObject = [];
});

app.listen(port, () => console.log("Server is running"));
