const express = require("express");

const router = express.Router();
const Medicine = require("../model/model");
module.exports = router;

//Get all medicines
router.get("/medicines", (req, res) => {
  Medicine.find({}, (err, meds) => {
    if (err) console.log(err);
    else res.json(meds);
  });
});

//Get specific medicines by name
router.get("/medicine", (req, res) => {
  const name = req.query.name;
  // res.send(name);
  Medicine.findOne({ med_name: name }, (err, foundMed) => {
    if (err) console.log(err);
    res.json(foundMed);
  });
});
