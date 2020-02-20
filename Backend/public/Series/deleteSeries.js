// To delete a series, we have to GET it first,
// then use the result to send a DELETE request

function deleteSeries(seriesID) {
  var settings = {
    url:
      "https://watchlistas.firebaseio.com/entertainment/series/" +
      seriesID +
      ".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
    method: "GET",
    timeout: 0,
    headers: {
      "Access-Control-Allow-Credentials": "true"
    }
  };

  $.ajax({
    url:
      "https://watchlistas.firebaseio.com/entertainment/series/" +
      seriesID +
      ".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
    type: "DELETE",
    success: function(response) {
      console.log("Series deleted.");
    },
    error: function(repsonse) {
      console.log("Could not delete series.");
    }
  });
}
