
let weatherContainer = document.querySelector("#weatherContainer");
let forecastContainer = document.querySelector("#forecastContainer");

let cities = ["Kyiv", "Munich", "Brussels", "London", "New York"]

let weatherList = new WeatherList(weatherContainer, cities, forecastContainer);
weatherList.showWeather("metric")

let unitC = document.querySelector(".c_btn");
let unitF = document.querySelector(".f_btn");

unitC.addEventListener("click", function () {
    weatherContainer.innerHTML = "";
    forecastContainer.innerHTML = "";
    let weatherList = new WeatherList(weatherContainer, cities, forecastContainer);
    weatherList.showWeather('metric')
})

unitF.addEventListener("click", function () {
    weatherContainer.innerHTML = "";
    forecastContainer.innerHTML = "";
    let weatherList = new WeatherList(weatherContainer, cities, forecastContainer);
    weatherList.showWeather("imperial")
})
