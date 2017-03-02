

$(document).ready(function() {
    $('h1').click(function() {
        $(this).slideUp(1000).slideDown(1000);
    });
});

$('.button').click(function() {
      $('p').slideToggle(500);
    }); 


  