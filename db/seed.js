const db  = require('./index.js');
const Student = require('./Student.js');
const mongoose = require('mongoose');

const sampleData = [
  {
    name: "Ben",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02LALL0E20-0eb6647e711f-512"
  },
  {
    name: "Danny",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02LY4P6DQQ-4d9d69043f87-512"
  },
  {
    name: "Eliza",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02L8EAM075-5d50b4055eee-512"
  },
  {
    name: "Emily",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02L1N5DC86-0a4dc336d4cf-512"
  },
  {
    name: "David",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02LM2FPT89-7d2e33413393-512"
  },
  {
    name: "Rebecca",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02LALLLCEQ-e906b7d0c2a7-512"
  },
  {
    name:"Ernest",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02KTPMGHST-eaaee2d6bb65-512"
  },
  {
    name:"Miles",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02LY4NNCRE-6be95449590a-512"
  },
  {
    name: "Cynthia",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02LM2G88E5-5089d139a739-512"
  }
];

const insertSampleData = function() {
  Student.insertMany(sampleData)
    .catch(err => `Error inserting data: ${err}`)
    .then(() => mongoose.connection.close());
};

insertSampleData();