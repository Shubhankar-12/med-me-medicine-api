const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();

const uri = `mongodb+srv://Shubh:${process.env.password}@cluster0.90qsz.mongodb.net/medMeMedicinesDB`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("medMeMedicinesDB").collection("medicines");
  app.get("/medicines", (req, res) => {
    collection.find({}).toArray((err, documents) => {
      res.send(
        documents.map((doc) => ({
          "web-scraper-order": doc["web-scraper-order"],
          "web-scraper-start-url": doc["web-scraper-start-url"],
          link_to_med: doc["link_to_med"],
          "link_to_med-href": doc["link_to_med-href"],
          med_name: doc["med_name"],
          med_manufacturer: doc["med_manufacturer"],
          med_salt: doc["med_salt"],
          med_uses: doc["med_uses"],
          med_price: doc["med_price"],
        }))
      );
    });
  });
  app.listen(3000, () => console.log("API listening on port 3000"));
});
