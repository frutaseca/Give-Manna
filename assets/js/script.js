var cityTodayEl = $('#city-today-date');
var tempEl = $('#min-max-temp');
var dayEl = $('#day');
var nightEl = $('#night');
var weatherTextEl = $('#weather-text');


// apiKey for AccuWeather--- YOSJw3FBcGAfIUXhxeAGoN9WeUG2Egyw
function getDailyWeather() {
    var oneDayWeatherUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/31520?apikey=YOSJw3FBcGAfIUXhxeAGoN9WeUG2Egyw';
    fetch(oneDayWeatherUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            };
            return response.json();
        })
        .then(function (data) {
            weatherTextEl.text(data.Headline.Text);
            tempEl.text(data.DailyForecasts[0].Temperature.Minimum.Value + '°F - ' + data.DailyForecasts[0].Temperature.Maximum.Value + '°F');
            if (data.DailyForecasts[0].Day.HasPrecipitation) {
                dayEl.text('Daily Precipitation: ' + data.DailyForecasts[0].Day.PrecipitationIntensity + ' ' + data.DailyForecasts[0].Day.PrecipitationType);
            } else {
                dayEl.text('Daily Precipitation: Mostly Clear');
            };
            if (data.DailyForecasts[0].Night.HasPrecipitation) {
                nightEl.text('Night Precipitation: ' + data.DailyForecasts[0].Night.PrecipitationIntensity + ' ' + data.DailyForecasts[0].Night.PrecipitationType);
            } else {
                nightEl.text('Night Precipitation: Mostly Clear');
            };

        })
}
getDailyWeather();









// var checkEl = $('.manna-pic-one').click(check)
// function check () {
//     alert('clicked')
// }