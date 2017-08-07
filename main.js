$(document).ready(function() {
	$('h1, h2').fadeIn('slow');
 });
    // $('h1').click(function() {
    //     $(this).slideUp(1000).slideDown(1000);
    // }));

$('#button1').click(function() {
    $('#button1').addClass("#button1 buttonclicked");

    setTimeout(function () { 
    $('#button1').removeClass("#button1 buttonclicked");
	}, 100);
    $('p').slideToggle(500);
    }); 
// function alertMe () {
// 	alert('TEST');
// }

// document.getElementById("button1").addEventListener("click", alertMe);