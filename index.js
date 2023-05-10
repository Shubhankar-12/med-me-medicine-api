// importing packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/route");
const dbLink = process.env.URI;

// setting strictquery to false to use regex
mongoose.set("strictQuery", false);

// connection database
mongoose.connect(dbLink);

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});

db.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());
app.use("/api", routes);

const port=process.env.PORT || 3000;

app.listen(port, () => console.log("API started listening"));
