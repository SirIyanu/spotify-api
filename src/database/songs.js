// https://artist1.cdn107.com/a2c/a2c3f78d107a8230dd45b301a208494b_lg.jpg
const faker = require("@faker-js/faker");
const songs = [
  {
    title: "True Love (feat. Tay Iwar & Projexx)",
    description: "Viral US Hits",
    date: new Date().toISOString(),
    image: "https://source.unsplash.com/random/?music,music+1",
    music: "//m4a-64.jango.com/61/66/17/616617820147937753.m4a",
    musicUrlSchema: "//m4a-64.jango.com/61/66/17/616617820147937753.m4a",
  },
  {
    title: "Ginger (feat. Burna Boy)",
    description: "Viral US Hits",
    date: new Date().toISOString(),
    image: "https://source.unsplash.com/random/?music,music+1",
    music: "//m4a-64.jango.com/15/62/38/156238757887590946.m4a",
    musicUrlSchema: "//m4a-64.jango.com/15/62/38/156238757887590946.m4a",
  },
  ...Array.from({ length: 20 }).map((_, index) => ({
    title: faker.faker.music.songName(),
    description: faker.faker.music.genre(),
    date: new Date().toISOString(),
    image: "https://source.unsplash.com/random/?music,music+" + index,
    music:
      index % 2 == 0 || index % 5 == 0
        ? "//m4a-64.jango.com/37/09/97/3709978024156640929.m4a"
        : index % 3 == 0
        ? "//m4a-64.jango.com/31/37/20/3137200246887195642.m4a"
        : "//m4a-64.jango.com/26/68/22/2668224634830946676.m4a",
    musicUrlSchema: "//m4a-64.jango.com/26/68/22/2668224634830946676.m4a",
  })),
];

module.exports = songs;
