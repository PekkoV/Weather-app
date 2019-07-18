const express = require("express");

const home = require("../routes/home");
const weather = require("../routes/weather");
const help = require("../routes/help");
const about = require("../routes/about");
const notFound = require("../routes/notFound");
const helpNotFound = require("../routes/helpNotFound");
module.exports = function(app) {
  app.use(express.json());
  app.use("/", home);
  app.use("/weather", weather);
  app.use("/help", help);
  app.use("/about", about);
  app.use("/help/*", helpNotFound);
  app.use("/*", notFound);
};
