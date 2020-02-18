var myHeaders = new Headers();
myHeaders.append("Access-Control-Allow-Credentials", "true");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://watchlistas.firebaseio.com/users.json?auth=qWIkHwOFG3EpS9gYCNP50tndNOFBS57ta41Rcy1f", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
