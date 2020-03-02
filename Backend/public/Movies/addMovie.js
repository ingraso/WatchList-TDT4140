import $ from "jquery";

export function saveMovie(
  title,
  category,
  genre,
  director,
  duration,
  description,
  score,
  imageUrl,
  releaseDate
) {
  /*
  var movieTitle = document.getElementById("movieTitle").value;
  var movieProductionYear = document.getElementById("movieProductionYear")
    .value;
  var movieDirector = document.getElementById("movieDirector").value;
  */

  $(document).ready(function() {
    var param = {
      title: title,
      category: category,
      genre: genre,
      director: director,
      duration: duration,
      description: description,
      score: score,
      imageUrl: imageUrl,
      releaseDate: releaseDate
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
