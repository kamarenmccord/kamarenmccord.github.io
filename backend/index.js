const cors = require("cors");
const cluster = require("cluster");
const numCPUo = require("os".cpus().length);
const express = require("express");
const app = express();
const PORT = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
