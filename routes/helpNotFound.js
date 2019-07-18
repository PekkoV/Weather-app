const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("error", {
    title: "Error!",
    errorMsg: "Help article not found"
  });
});

module.exports = router;
