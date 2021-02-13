require("dotenv").config();
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

app.get("/", (_, res) => {
  res.send("the backend works");
});

app.listen(PORT, () => {
  console.log(`The server is on port:(${PORT})`);
});
