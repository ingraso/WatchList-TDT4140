function saveMovie() {
  var movieTitle = document.getElementById("movieTitle").value;
  var movieProductionYear = document.getElementById("movieProductionYear")
    .value;
  var movieDirector = document.getElementById("movieDirector").value;

  $(document).ready(function() {
    var param = {
      movieTitle: movieTitle,
      movieProductionYear: movieProductionYear,
      movieDirector: movieDirector
    };

    $.ajax({
      url:
        "https://watchlistas.firebaseio.com/entertainment/movie/" +
        movieTitle +
        ".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
      type: "PUT",
      data: JSON.stringify(param),
      success: function() {
        console.log("success");
      },
      error: function(error) {
        alert("error: " + error);
      }
    });
  });
}
