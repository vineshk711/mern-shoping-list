const express = require("express");
const router = express.Router();

const Item = require("../../models/Items");

router.get("/", (req, res) => {
  Item.find().then((item) => {
    res.json(item);
  });
});

module.exports = router;
