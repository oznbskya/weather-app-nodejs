const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// User input command
const address = process.argv[2]

if (!address) {
    console.log('Please provide a location!')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(data.langitude, data.longitude, (error, forecast) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecast)
          })
    })
}




