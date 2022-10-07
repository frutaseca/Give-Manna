var cityTodayEl = $('#city-today-date');
var tempEl = $('#min-max-temp');
var cloudEl = $('#cloud');
var windEl = $('#wind');
var rainEl = $('#rain');
// apiKey for AccuWeather--- YOSJw3FBcGAfIUXhxeAGoN9WeUG2Egyw
function getLocKey(event) {
    
    var locKeyUrl = 'http://dataservice.accuweather.com/locations/v1/search?q=31520&apikey=YOSJw3FBcGAfIUXhxeAGoN9WeUG2Egyw';
    fetch(locKeyUrl)
    
    .then(function (response) {
        console.log(response)
    })
}

getLocKey();









// var checkEl = $('.manna-pic-one').click(check)
// function check () {
//     alert('clicked')
// }