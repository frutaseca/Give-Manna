document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

// Created variables for each hard coded element (date, temperature, day, night, weather describing text...)
var cityTodayEl = $('#city-today-date');
var tempEl = $('#min-max-temp');
var dayEl = $('#day');
var nightEl = $('#night');
var weatherTextEl = $('#weather-text');

// Display todays date
cityTodayEl.append(moment().format('dddd, MMMM Do YYYY'))

// apiKey for AccuWeather--- YOSJw3FBcGAfIUXhxeAGoN9WeUG2Egyw
//Get weather info for the Manna House's location
function getDailyWeather() {
    var oneDayWeatherUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/1day/31520?apikey=YOSJw3FBcGAfIUXhxeAGoN9WeUG2Egyw';
    fetch(oneDayWeatherUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            };
            return response.json();
        })
        .then(function (data) {
            //Pull weather information from the response and add it to HTML (min and max temperature)
            weatherTextEl.text(data.Headline.Text);
            tempEl.text(data.DailyForecasts[0].Temperature.Minimum.Value + '°F - ' + data.DailyForecasts[0].Temperature.Maximum.Value + '°F');
            //Check if there is precipitation for day and night. If there is none, then append "Mostly Clear". If HasPrecipitation is true, then append the text.
            if (data.DailyForecasts[0].Day.HasPrecipitation) {
                dayEl.text('Day Precipitation: ' + data.DailyForecasts[0].Day.PrecipitationIntensity + ' ' + data.DailyForecasts[0].Day.PrecipitationType);
            } else {
                dayEl.text('Day Precipitation: Mostly Clear');
            };
            if (data.DailyForecasts[0].Night.HasPrecipitation) {
                nightEl.text('Night Precipitation: ' + data.DailyForecasts[0].Night.PrecipitationIntensity + ' ' + data.DailyForecasts[0].Night.PrecipitationType);
            } else {
                nightEl.text('Night Precipitation: Mostly Clear');
            };
        })
}
getDailyWeather();