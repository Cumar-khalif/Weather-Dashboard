var searchButton = $('#search-btn');

searchButton.on('click', function() {
    var cityTextBox = $('#cityTextBox');

    var cityInput = cityTextBox.val();


    //
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=b6e6606d2e4ba5a69ba6d4d4f0f36d64"

    $.ajax({
        url: url,
        method: 'GET'
    }).then(response => {
        console.log(response)


        console.log(response.name)

        var cityName = $('#cityName');
        var temp = $('#temp');
        var humidity = $('#humidity');
        var windSpeed = $('#windSpeed');

        cityName.text(response.name);
        temp.text(response.main.temp)
        humidity.text(response.main.humidity);
        windSpeed.text(response.wind.speed)


    })

    // url for 5 day forcast
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

    // var day1Temp = $('#day1Temp)
    // day1Temp.text(response.soemth)

})