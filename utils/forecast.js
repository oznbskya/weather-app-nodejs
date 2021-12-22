const request = require('postman-request')

const forecast = (leng, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=0749ec9328885c34f477be75ee1f132e&query=' + leng +',%' + long

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Lost connection!', undefined)
        } else if (response.body.error) {
            callback('Can not find location!', undefined)
        } else {
            callback(undefined, response.body.current.temperature + ' degress out there. There will be ' + response.body.current.weather_descriptions[0] + ' in there and ' + response.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast
