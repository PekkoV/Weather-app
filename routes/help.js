const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("help", {
    title: "Help",
    msg: "Need Help?"
  });
});

module.exports = router;
