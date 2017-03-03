



$(document).ready(function() {
    $('h1').click(function() {
        $(this).slideUp(1000).slideDown(1000);
    });
});

$('.button').click(function() {
      $('.button').addClass('buttonclicked');

	setTimeout(function () { 
    $('.button').removeClass('buttonclicked');
	}, 100);
    $('p').slideToggle(500);
    }); 


  