const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((item) => {
      res.json(item);
    });
});

module.exports = router;
