const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema(
  {
    "web-scraper-order": String,
    "web-scraper-start-url": String,
    link_to_med: String,
    "link_to_med-href": String,
    med_name: String,
    med_manufacturer: String,
    med_salt: String,
    med_uses: String,
  },
  {
    collection: "medicines",
  }
);

module.exports = mongoose.model("medicineModel", medicineSchema);
