
let dataService = {
    getCityWeather(cityName, unit) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c3b526480218293eefc11d3ae26ae9e8&units=${unit}`)
            .then(function (resObj) {
                return resObj.json()
            })
            .then(function (result) {
                return result
            })
    },

    getCityForecast(cityName, unit) {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c3b526480218293eefc11d3ae26ae9e8&units=${unit}`)
            .then(function (resObj) {
                return resObj.json()
            })
            .then(function (result) {
                return result
            })
    }
}