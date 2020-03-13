import $ from "jquery";
// To delete a movie, we have to GET it first,
// then use the result to send a DELETE requests

export function deleteMovie(movieTitle) {
  var settings = {
    url:
      "https://watchlistas.firebaseio.com/entertainment/movie/" +
      movieTitle +
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
      movieTitle +
      ".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
    type: "DELETE",
    success: function(response) {
      console.log("Movie deleted.");
      window.location.reload();
    },
    error: function(repsonse) {
      console.log("Could not delete movie.");
    }
  });
}

export function confirmDeletion(movieTitle) {
  var confirmation = prompt(
    "Are you sure you want to delete " +
      movieTitle +
      "?\nWrite DELETE to confirm the deletion."
  );
  console.log(movieTitle.replace(/ /g, ""));

  if (confirmation === "DELETE") {
    deleteMovie(movieTitle);
  }
}
