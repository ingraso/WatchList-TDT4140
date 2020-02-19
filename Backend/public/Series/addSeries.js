function saveSeries() {
  var seriesTitle = document.getElementById("seriesTitle").value;
  var seriesProducer = document.getElementById("seriesProducer").value;

  $(document).ready(function() {
    var param = {
      seriesTitle: seriesTitle,
      seriesProducer: seriesProducer
    };

    $.ajax({
      url:
        "https://watchlistas.firebaseio.com/entertainment/series/" +
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
