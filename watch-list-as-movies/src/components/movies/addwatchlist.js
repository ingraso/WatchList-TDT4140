import $ from "jquery";


export function addWatchlist(
  user,
  title
) {
  $(document).ready(function() {
    var param = {
      title: title,
    };
    $.ajax({
      url:
        "https://watchlistas.firebaseio.com/users/" +
        user +"/watchlist/"+title+
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
