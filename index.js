require("dotenv").config();
const express = require("express");
const request = require("request");
const hbs = require("hbs");
const path = require("path");

const app = express();
app.set("view engine", "hbs");
app.use(express.static("public"));

const partialRoute = path.join(__dirname, "./views/partials");

hbs.registerPartials(partialRoute);

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
require("./startup/routes")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Starting server... ");
});
