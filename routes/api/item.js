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
  newItem.save((item) => {
    res.json(item);
  });
});

// Delete an item
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id).then((item) =>
    item
      .remove()
      .then(() => res.json({ statu: "Item deleted!" }))
      .catch((err) => res.status(402).json({ status: "Unable to delete item" }))
  );
});

module.exports = router;
