const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "HimppaOfDoom"
  });
});

module.exports = router;
