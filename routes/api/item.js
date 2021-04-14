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
  Item.findById(req.params.id, (err, item) => {
    if (err) {
      return res.status(404).json({
        error: "Something went wrong"
      });
    }
    if (!item) {
      return res.status(404).json({
        error: "Item not present in DB"
      });
    }
    item.remove(() => {
      res.json({
        msg: "Item deleted"
      });
    });
  });
});
// .then((item) => item.remove().then(() => res.json({ msg: "item deleted" })))
// .catch((err) => res.status(404).json({ msg: "unable to delete" }));
// });
module.exports = router;
