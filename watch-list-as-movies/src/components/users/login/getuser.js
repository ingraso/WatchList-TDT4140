import $ from 'jquery';
export function getuser() {
  var settings = {
  url:
    "https://watchlistas.firebaseio.com/users.json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f",
  method: "GET",
  timeout: 0,
  headers: {
    "Access-Control-Allow-Credentials": "true"
  }
};
var denne
return  denne = $.ajax(settings).done(function(response) {
});
}
