import $ from "jquery";

export function saveReview(
  title,
  review,
  reviewer,
  score
) {
  $(document).ready(function() {
    var param = {
      title: title,
      review: review,
      reviewer: reviewer,
      score: score,
    };

    $.ajax({
      url:
        "https://watchlistas.firebaseio.com/entertainment/movie/" +
        title +"/Reviews/"+reviewer+
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
