const request = require('request');

const darkSky = require('../secrets');

let getWeather = (latitude, longitude, callback) => {
	request({
		url: `https://api.darksky.net/forecast/${darkSky.darkSkySecret}/${latitude},${longitude}?lang=de&units=auto`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback('Unable to fetch weather.');
		}
	});
};

module.exports.getWeather = getWeather;
