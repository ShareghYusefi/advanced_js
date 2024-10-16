// The document ready function waits forthe DOM to be fully created before executing jQuery code
$(document).ready(function () {
  // jQuery code goes here
  // jQuery Syntax
  // $ is used access jQuery library
  // $("selector").action()

  //   select form using name attribute selector
  $("form[name='signInForm']").on("submit", function (event) {
    // get username by id
    var username = $("#username").val();

    // get div element by class name
    var result = $(".card-body");
    result.html("<p>Username: " + username + " </p>");

    // updating css properties
    result.css("color", "blue");
    result.css("backgroundColor", "yellow");
    result.css("fontSize", "24px");

    // set attributes to the element
    result.attr("data-result", "custom value");

    event.preventDefault();
  });
});
