import $ from "jquery";
import { saveReview } from "./addReview.js";

export function saveMovie(
  title,
  director,
  duration,
  description,
  score,
  imageUrl,
  releaseDate,
  numberofscorers,
) {
  $(document).ready(function() {
    var param = {
      title: title,
      director: director,
      duration: duration,
      description: description,
      score: score,
      imageUrl: imageUrl,
      releaseDate: releaseDate,
      numberofscorers: numberofscorers
    };
    saveReview(
      title,
      "Really liked it",
      director,
      score,
    );
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
