function saveuser() {
  var username = document.getElementById("usernametosave").value;
  var firstname = document.getElementById("firstnametosave").value;
  var lastname = document.getElementById("lastnametosave").value;
  var birthday = document.getElementById("birthdaytosave").value;
  var password = document.getElementById("passwordtosave").value;

  $(document).ready(function() {
    var param = {
      lastName: lastname,
      firstName: firstname,
      birthday: birthday,
      password: password,
      userName: username
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
