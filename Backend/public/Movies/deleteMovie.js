// To delete a movie, we have to GET it first,
// then use the result to send a DELETE request

function deleteMovie(movieID) {
  var settings = {
    url:
      "https://watchlistas.firebaseio.com/entertainment/movie/" +
      movieID +
      ".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
    method: "GET",
    timeout: 0,
    headers: {
      "Access-Control-Allow-Credentials": "true"
    }
  };

  $.ajax({
    url:
      "https://watchlistas.firebaseio.com/entertainment/movie/" +
      movieID +
      ".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
    type: "DELETE",
    success: function(response) {
      console.log("Movie deleted.");
    },
    error: function(repsonse) {
      console.log("Could not delete movie.");
    }
  });
}
