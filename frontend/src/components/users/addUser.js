import $ from "jquery";

export function saveUser(username, password, firstName, lastName) {
  //var username = document.getElementById("username").value;
  //var firstName = document.getElementById("firstName").value;
  //var lastName = document.getElementById("lastName").value;
  //var birthday = document.getElementById("birthday").value;
  //var password = document.getElementById("password").value;
  var birthday = 

  $(document).ready(function() {
    var param = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      password: password
    };

    $.ajax({
      url:
        "https://watchlistas.firebaseio.com/users/" +
        username +
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
