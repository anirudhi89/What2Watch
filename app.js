// var randomMovieArray = ['The Godfather', 'The Shawshank Redemption', 'Schindler\'s List', 'Raging Bull', 'Casablanca', 'Citizen Kane', '']
var apikey =  '2bda4263' //not secret, open api

function apiCall() {
    var randNumber = Math.floor((Math.random() * movies.length))
    var randomMovie = movies[randNumber].title;
    console.log(randomMovie)
    $.getJSON('http://www.omdbapi.com/?t=' + encodeURI(randomMovie) + "&type=movie" + "&apikey="+ encodeURI(apikey)).then(function(response) {
    var image = response.Poster;
    var url = "https://www.imdb.com/title/" + response.imdbID;
        if (image !== 'N/A') {
            $('img').attr('src', image);
            $('a').attr('href', url)
        }
        document.getElementById('movieName').innerText = randomMovie;
    })
}
document.getElementById('clicked').addEventListener("click", apiCall)