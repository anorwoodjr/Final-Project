$(function() {
  $("#console-box").append("console active...");

  $("li").click(function() {
    $("#console-box").append(
      "<br>class:" + $(this).attr("class") + "|value:" + $(this).text() + "."
    );
    $(this)
      .toggleClass("selected")
      .siblings()
      .removeClass("selected");
  });
});