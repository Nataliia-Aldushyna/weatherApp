
class cityWeather {
    constructor(cityObject, forecastElem, unit) {
        this.forecastElem = forecastElem;
        this.cityObject = cityObject;
        this.unit = unit;
    }

    createCityWeather(weatherElement) {
        let cityElement = document.createElement("div");
        let dateSunrise = new Date(this.cityObject.sys.sunrise * 1000);
        let dateSunset = new Date(this.cityObject.sys.sunset * 1000);

        cityElement.className = "cityBlock";
        cityElement.insertAdjacentHTML("beforeend", `<p class="city_name">${this.cityObject.name}</p>`);
        if (this.unit == 'metric') {
            cityElement.insertAdjacentHTML("beforeend", `<p>${Math.round(this.cityObject.main.temp)} \xB0C</p>`);
        }
        else if (this.unit == 'imperial') {
            cityElement.insertAdjacentHTML("beforeend", `<p>${Math.round(this.cityObject.main.temp)} \xB0F</p>`);
        }
        cityElement.insertAdjacentHTML("beforeend", `<p class="description">${this.cityObject.weather[0].description}</p>`);
        cityElement.insertAdjacentHTML("beforeend", `<p class="addData">Wind speed: ${this.cityObject.wind.speed} km/h</p>`);
        cityElement.insertAdjacentHTML("beforeend", `<p class="addData">Pressure: ${this.cityObject.main.pressure} hPa</p>`);
        cityElement.insertAdjacentHTML("beforeend", `<p class="addData">Sunrise: ${dateSunrise.getHours()}:${dateSunrise.getMinutes()}:${dateSunrise.getSeconds()}</p>`);
        cityElement.insertAdjacentHTML("beforeend", `<p class="addData">Sunset: ${dateSunset.getHours()}:${dateSunset.getMinutes()}:${dateSunset.getSeconds()}</p>`);
        cityElement.insertAdjacentHTML("beforeend", `<img src="http://openweathermap.org/img/wn/${this.cityObject.weather[0].icon}@2x.png">`);
        cityElement.insertAdjacentHTML("beforeend", `<button class="forecast_btn">Forecast</button>`);

        weatherElement.append(cityElement);
        this.addButtonEvent(cityElement);
    }

    addButtonEvent(cityElement) {
        console.log(cityElement)
        let forecastBtn = cityElement.querySelector(".forecast_btn");
        let forecastElem = this.forecastElem;
        let cityName = this.cityObject.name;
        let unit = this.unit;

        forecastBtn.addEventListener("click", function () {
            let forecastObject = new cityForecast(cityName, forecastElem, unit);
            forecastObject.createCityForecast()
        })
    }
}
