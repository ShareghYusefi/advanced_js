// The document ready function waits forthe DOM to be fully created before executing jQuery code
$(document).ready(function () {
  // jQuery code goes here
  // jQuery Syntax
  // $ is used access jQuery library
  // $("selector").action()
  // get div element by class name
  var result = $(".card-body");
  result.hide();

  //   select panel
  var panel_1 = $("#panel_1");
  var panel_2 = $("#panel_2");
  var panel_3 = $("#panel_3");
  //   hide panel 2
  panel_2.hide();
  //   select form using name attribute selector
  $("form[name='signInForm']").on("submit", function (event) {
    // get username by id
    var username = $("#username").val();

    // debugger breakpoint
    debugger;

    result.html("<p>Username: " + username + " </p>");

    // updating css properties
    result.css("color", "blue");
    result.css("backgroundColor", "yellow");
    result.css("fontSize", "24px");

    // set attributes to the element
    result.attr("data-result", "custom value");

    // show the result div
    // result.show();
    result.slideDown(1500);
    // move panel to right
    panel_1.animate({ right: "100" }, "slow");
    // fade in panel 2
    panel_2.fadeIn(1500);

    // toggle between fading in and out
    panel_3.fadeToggle(1500);

    event.preventDefault();
  });
});
