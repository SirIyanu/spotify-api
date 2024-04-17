const songs = require("../database/songs");
const getAllSongs = (req, res) => {
  res.json(songs);
};

module.exports = { getAllSongs };
