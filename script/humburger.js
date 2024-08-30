$(document).ready(function () {
  if (document.body.clientWidth > 1300) {
    $("#button").click(function () {
      $("#small-screen-aside").toggleClass("aside-expand");
    });
  }
});
