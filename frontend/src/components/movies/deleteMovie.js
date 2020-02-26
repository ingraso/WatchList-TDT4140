import $ from "jquery";
// To delete a movie, we have to GET it first,
// then use the result to send a DELETE requests

/* MISSING!!
 * - add some kind of rerendering(?) after a movie is removed from the database/deleted
 * - add admin-only privileges for deletions
 */

export function deleteMovie(movieID) {
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

export function confirmDeletion(movieTitle) {
  var confirmation = prompt(
    "Are you sure you want to delete " +
      movieTitle +
      "?\nWrite the title of the movie again to confirm the deletion."
  );

  if (confirmation === movieTitle) {
    deleteMovie(movieTitle.replace(/ /g, ""));
  }
}
