
class cityForecast {
    constructor(cityName, forecastElement, unit) {
        this.cityName = cityName;
        this.forecastElement = forecastElement;
        this.unit = unit;
    }

    createCityForecast() {
        dataService.getCityForecast(this.cityName, this.unit)
            .then(result => {
                console.log(result);
                console.log("unit =", this.unit);
                this.#drawTable(result, this.unit);
            })
    }

    #drawTable(resObj, unit) {

        this.forecastElement.innerHTML = "";
        let table = document.createElement("table");

        let forecastList = resObj.list;

        let finalList = forecastList.filter(forecast => {
            let date = new Date(forecast.dt * 1000);
            console.log(date)
            return date.getHours() == 12;
        })

        console.log(finalList)

        console.log(forecastList);

        finalList.forEach(data => {
            let date = new Date(data.dt * 1000);
            let tr = document.createElement("tr");
            tr.insertAdjacentHTML("beforeend", `<td class="date">${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}</td>`);
            if (unit == 'metric') {
                tr.insertAdjacentHTML("beforeend", `<td>${Math.round(data.main.temp)} \xB0C</td>`);
            }
            else if (unit == 'imperial') {
                tr.insertAdjacentHTML("beforeend", `<td>${Math.round(data.main.temp)} \xB0F</td>`);
            }

            tr.insertAdjacentHTML("beforeend", `<td>${data.weather[0].description}</td>`);
            tr.insertAdjacentHTML("beforeend", `<td> <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></td>`);
            tr.insertAdjacentHTML("beforeend", `<td>Wind speed: ${data.wind.speed} km/h</td>`);
            tr.insertAdjacentHTML("beforeend", `<td>Pressure: ${data.main.pressure} hPa</td>`);
            table.append(tr)
        })

        this.forecastElement.append(table)
    }

}
