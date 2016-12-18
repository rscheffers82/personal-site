// Global grid var used in the project area
$grid = {};

// $( document ).foundation();

$( document ).ready(function() {
  // Tie .project-grid to an isotope grid
  $grid = $('.project-grid').isotope({
    // options
    itemSelector: '.project',
    // resizable: false,
    layoutMode: 'fitRows',
    percentPosition: true,
    // filter: '.featured',
    filter: '*',
    masonry: {
      columnWidth: '.project'
    }
  });

  // load all data into the grid
  p.loadProjectsInto($grid);

  $(".sticky-wrapper").sticky({topSpacing:0});

  $('#roycode-contact-form').validate({
    submitHandler: submitValidatedForm
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86887764-1', 'auto');
  ga('send', 'pageview');

});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

var submitValidatedForm = function() {
  var data = $('form').serialize();
  $.ajax({
    type: 'POST',
    url: 'http://royscheffers.com/php/contact-form.php',      // use for development
    // url: '../php/contact-form.php',                       // use when live
    data: data,
    // crossDomain: true
  })
  .done (function() {
    $('.success-message').html('Message sent successfully');
    $('.success-container').removeClass('hide');
    $('#roycode-contact-form').addClass('hide');
  })
  .fail (function(jqXHR, textStatus, errorThrown) {
    // php script not reached or invalid response
    console.log('failed reason: ' + errorThrown.toString());
    console.log(jqXHR);
    $('.success-message').html('Message failed...<br>Please email <a href="mailto:r.scheffers@gmail.com">r.scheffers@gmail.com</a>');
    $('.success-message').css('background-color','#ffeeee');
    $('.success-container').removeClass('hide');
    $('#roycode-contact-form').addClass('hide');
  })
}


 // portfolio-area events \\
//-------------------------\\

// Filter projects based on button click
$('.filter-btn-group').on('click', '.btn', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.btn-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', '.btn', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

$( '.project-grid' ).on("click", 'a', function(e){
  // console.log( $(this)[0] );
  // console.log( $(this).data('number') );
  p.modal( $(this).data('number') );
});



// Contact Form events \\
//----------------------\\

// $('#submit').on('click', function(e) {
//   e.preventDefault();
//
//
//   $('.form-group').find('input, textarea').each(function(index, el) {
//     if (el.name != 'phone') {
//       $('#' + el.name + '-error').html( el.value ? '' : 'Provide ' + el.name );
//     }
//     console.log(el.value);
//     console.log(el.name);
//   });
//
//   console.log('missingValue: ', missingValue);
//   var data = $('form').serialize();
//   $.ajax({
//     type: 'POST',
//     url: 'http://royscheffers.com/contact-form.php',
//     data: data,
//     crossDomain: true,
//     success: function (response) {
//       alert(response);
//       console.log('Success: ',response);
//     }
//   });
// });

 // Smooth scrolling \\
//  ----------------  \\

$("#main-nav a, .down-arrow, .cta-buttons .btn").on('click', function(event) {
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
