const request = require("request");

const geocode = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${
    process.env.GEOKEY
  }&limit=1`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback({ error: "Unable to connect to location service" }, undefined);
    } else if (body.features.length === 0) {
      callback(
        { error: "Location not found with given parameters!" },
        undefined
      );
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
