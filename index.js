const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const list = require("./jokes/generalJokes.json");

app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  res.send(list[randomIndex]);
});

app.get('/memes', async (req, res) => {
  const memes = require("random-memes");

  const fetchMeme = async () => {
    const meme = await memes.reddit({ locale: "en" });
    return meme
  };

  try {
    const meme = await fetchMeme();
    res.json(meme);
  } catch (error ) {
    console.error(error)
    res.status(500).json({ error: 'failed to fetch meme'})
  }
})

app.listen(8080, () => console.log("running joke api"));
