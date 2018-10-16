$(document).ready(function ($) {
  /* Transições */
  $("a").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 800);
  });
  /* Click Active Nav (Menu-Principal) top */
  $(".nav .nav-link").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});