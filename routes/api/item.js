const express = require("express");
const router = express.Router();
const Item = require("../../models/Item");

// Get all items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((item) => {
      res.json(item);
    });
});

// Add a new item
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save(newItem, (err, item) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save new item"
      });
    }
    res.json(item);
  });
});

// Delete an item
router.delete("/:id", (req, res) => {
  // const uid = req.params.id.toString()
  Item.remove(req.params.id, (err, item) => {
    if (err) {
      return res.status(404).json({
        error: "Unable to delete item"
      });
    }
    res.json(item);
  });
});

module.exports = router;
