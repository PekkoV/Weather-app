const request = require("request");

const forecast = ({ latitude, longitude, location }, callback) => {
  const url = `https://api.darksky.net/forecast/${
    process.env.WEATHERKEY
  }/${latitude},${longitude}?units=si&lang=fi`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback({ error: "Unable to connect to location service" }, undefined);
    } else if (body.error) {
      callback(
        { error: "Location not found with given parameters!" },
        undefined
      );
    } else {
      callback(undefined, {
        forecast: `${body.daily.data[0].summary} Lämpötila on tällä hetkellä ${
          body.currently.temperature
        } C. Sateen mahdollisuus on ${body.currently.precipProbability}%.`,

        location
      });
    }
  });
};

module.exports = forecast;
