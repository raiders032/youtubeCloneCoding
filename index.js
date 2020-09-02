import express from "express";
const app = express();
const PORT = 3000;

const handleListening = () =>
  console.log(`listening at http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello world!!");

const handleProfile = (req, res) => res.send("you are on my profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
