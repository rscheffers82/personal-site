// Javascript
$( document ).ready(function() {
  // add all projects into portfolio part of the page
  $('.projects').append( p.showProjects() );
//  $('.projects').append( p.showProjects() );


});

$('body').scrollspy({target: ".navbar", offset: 50});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

$(".navbar a, footer a[href='#intro']").on('click', function(event) {
  event.preventDefault();   // Prevent default anchor click behavior
  var hash = this.hash;     // Store hash

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});

$( '.projects' ).on("click", 'a', function(e){
  console.log( $(this).data('number') );
  p.modal( $(this).data('number') );
});
