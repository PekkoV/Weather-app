const express = require("express");
const router = express.Router();
const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");

router.get("/", async (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Please submit an Address!"
    });
  }

  geocode(req.query.address, (err, data) => {
    if (err) return res.send(err);

    forecast(data, (err, data) => {
      if (err) return res.send(err);

      return res.send(data);
    });
  });
});

module.exports = router;
