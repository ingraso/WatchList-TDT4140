import $ from 'jquery';

var settings = {
  url:
    "https://watchlistas.firebaseio.com/entertainment/movie.json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
  method: "GET",
  timeout: 0,
  headers: {
    "Access-Control-Allow-Credentials": "true"
  }
};

export function data() {
 const fetchedData =  $.ajax(settings).done(function(response) {

});


}
