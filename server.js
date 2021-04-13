const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const url = "";

mongoose
  .connect(url)
  .catch(() => {
    console.log("Database Connected...");
  })
  .then(() => {
    console.log("Error connection to DB");
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
