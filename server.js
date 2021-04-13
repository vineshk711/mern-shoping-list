const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/item");

const app = express();
// Bodyparser Middleware
app.use(bodyParser.json());

// DB connection
const url = require("./config/keys").mongoURI;
mongoose
  .connect(url)
  .then(() => {
    console.log("DATABASE CONNECTED...");
  })
  .catch((err) => {
    console.log("ERROR IN CONNECTION TO DB");
  });

// Routes
app.use("/api/items", items);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
