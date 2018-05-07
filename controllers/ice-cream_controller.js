var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var iceCream = require("../models/ice-cream.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  iceCream.all(function(data) {
    var hbsObject = {
      icecream: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/icecream", function(req, res) {
  iceCream.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/icecream/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  iceCream.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/icecream/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  iceCream.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
