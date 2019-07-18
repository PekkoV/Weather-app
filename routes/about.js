const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("about", {
    title: "About",
    name: "HimppaOfDoom"
  });
});

module.exports = router;
