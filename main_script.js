// Javascript
$( document ).ready(function() {

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

console.log(portfolio);

var project = '';
for ( i = 0; i < portfolio.length; i++ ){
  if ( i === 0 ) project += '<div class="row">'
  project += '<div class="col-xs-4 text-center">' +
                '<div class="project">' +
                  // '<a href="' +portfolio[i].url[0]+'" target="_blank">' +
                  '<a>' +
                    '<h4>'+portfolio[i].name+'</h4>' +
                    '<img class="img-responsive" src="'+portfolio[i].img+'" alt="'+portfolio[i].name+'">' +
                  '</a>' +
                '</div>' +
             '</div>';
  if ( i > 0 && (i+1)%3 === 0 ) project += '</div><div class="row">'
}
$('#portfolio').append(project);

$('.project').on("click", function(){
  console.log('clicked');
});