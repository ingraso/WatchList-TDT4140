

function saveurname() {
  var newname = document.getElementById('nametosave').value
  console.log(newname)
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var raw = "{ \n      \"date_of_birth\": \"June 23, 1912\", \n      \"full_name\": \"Alan Turing\", \n      \"user_name\": \"Alan\", \n      \"password\": \"123\" \n}";

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://watchlistas.firebaseio.com/users/"+newname+".json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
