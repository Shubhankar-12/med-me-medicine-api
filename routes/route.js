const express = require("express");

const router = express.Router();
const Medicine = require("../model/model");
module.exports = router;

//Get all medicines
router.get("/", (req, res) => {
  Medicine.find({}, (err, meds) => {
    if (err) console.log(err);
    else res.json(meds);
  });
});

//Get by ID Method
router.get("/:name", (req, res) => {
  Medicine.findOne({ med_name: req.params.name }, (err, foundMed) => {
    if (err) console.log(err);
    res.json(foundMed);
  });
});
