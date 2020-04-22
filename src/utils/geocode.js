const axios = require('axios')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicmV5amluZyIsImEiOiJjazkyN3hxcm0wNW9tM3FsZjNwbXphdjNiIn0.zkoCgLVAX8syS0KSfa-v5Q&limit=1`
  axios.get(url)
    .then((response) => {
      if(response.data.features.length === 0) {
        callback('Unable to find location. Try another search.')
      }
      else {
        const data = response.data.features[0]
        callback(undefined, {
          latitude: data.center[1],
          longitude: data.center[0],
          location: data.place_name,
        })
      }
    })
    .catch((error) => {
      callback('Unable to connect to location services!', undefined)
    })
}

module.exports = geocode