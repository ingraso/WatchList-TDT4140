import $ from "jquery";

export function saveMovie(title, director, duration, description, score) {
  $(document).ready(function() {
    var param = {
      title: title,
      director: director,
      duration: duration,
      description: description,
      score: score
    };

    $.ajax({
      url:
        "https://watchlistas.firebaseio.com/entertainment/movie/" +
        title +
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
