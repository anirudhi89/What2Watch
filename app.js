var randomMovieArray = ['Star Wars', 'Game of Thrones', 'Harry Potter', 'Lord of the Rings' ]

var randNumber = Math.floor((Math.random() * randomMovieArray.length) - 1)

var randomMovie = randomMovieArray[randNumber];

var apikey =  '2bda4263' //not secret, open api

function apiCall() {
    $.getJSON('http://www.omdbapi.com/?t=' + encodeURI(randomMovie) + "&apikey="+ encodeURI(apikey)).then(function(response) {
        var image = response.Poster;
        if (image !== 'N/A') {
            $('img').attr('src', image);
        }

        document.getElementById('movieName').innerText = response.Title;
    })
}

// apiCall();