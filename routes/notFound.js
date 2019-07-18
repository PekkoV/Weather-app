const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("error", {
    title: "Error!",
    errorMsg: "Page not found"
  });
});

module.exports = router;
