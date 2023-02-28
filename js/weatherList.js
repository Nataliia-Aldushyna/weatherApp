
class WeatherList {
    constructor(wElem, cities, fElem) {
        this.wElem = wElem;
        this.cities = cities;
        this.fElem = fElem;
    }

    showWeather(unit) {
        let promiseAray = [];

        this.cities.forEach(function (city) {
            let cityPromise = dataService.getCityWeather(city, unit);
            promiseAray.push(cityPromise)
        })

        Promise.all(promiseAray).then(citiesInfo => {
            this.drawList(citiesInfo, unit)
        })
    }

    drawList(citiesInfo, unit) {
        citiesInfo.forEach(cityInfo => {
            console.log(cityInfo)
            let cityObject = new cityWeather(cityInfo, this.fElem, unit);
            cityObject.createCityWeather(this.wElem)
        })
    }
}