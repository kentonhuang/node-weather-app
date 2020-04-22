const axios = require('axios')

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3e82b540b7c70c395fe491ec2df2acc3&query=${lat},${long}&units=f`

  axios.get(url)
    .then((response) => {
      const data = response.data.current
      if(!data) {
        callback('Unable to find location', undefined)
      } else {
        callback(undefined, `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out. Humidity is at ${data.humidity}.`)
      }
    }).catch((error) => {
      callback('Unable to connect to weather service!')
    })
}

module.exports = forecast