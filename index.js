import express from "express";
const app = express();

const PORT = 3000;

function handleListning() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send("hello from here");
}

function handleProfile(req, res) {
  res.send("you are on my profile");
}

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListning);
