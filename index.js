const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const list = require("./jokes/generalJokes.json");

app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  res.send(list[randomIndex]);
});

app.listen(8080, () => console.log("running joke api"));
