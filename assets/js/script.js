var rain = $('#rain');
var wind = $('#wind');
var temp = $('#temp');


var responseText = document.getElementById('Weather');

var APIKey = 'a8YgP4C0Q8FBzLTMOoG2LGs8GVCIQlwB';

function HourlyWeather() {
var WeatherCard = 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/31520?apikey=a8YgP4C0Q8FBzLTMOoG2LGs8GVCIQlwB';

fetch(WeatherCard)
.then(function (responce) {
    return responce.json();
})
.then(function (data) {
    console.log(data);
})
}

HourlyWeather()