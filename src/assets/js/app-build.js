$( document ).ready(function() {
    $(".btn-menu").click(function() {
      $(this).parent().toggleClass("menu-open");
    });
});