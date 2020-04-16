import $ from "jquery";

export function saveUser(username, password, firstName, lastName,imageUrl, birthday) {
  $(document).ready(function() {
    var param = {
      admin: 0,
      username: username,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      imageUrl: imageUrl,
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
