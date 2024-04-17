const express = require("express");
const { getAllSongs } = require("./src/controller/songs");
var cors = require("cors");

const app = express();
const port = 3001;

app.get("/songs", getAllSongs);

app.listen(port, () => {
  console.log(`App has started and is listening on port ${port}`);
});
