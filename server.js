const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// DB connection
const url = require("./config/keys").mongoURI;
mongoose
  .connect(url)
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log("Error connection to DB");
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
