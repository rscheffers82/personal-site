// Global grid var used in the project area
let $grid = {};

// $( document ).foundation();

$(document).ready(function() {

  // disable certain effects on iOS that cause issues
  if (getMobileOperatingSystem() !== 'iOS') {
    $('.landing').css('background-attachment','fixed');
  }

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
  p.loadProjectsInto($grid);      // eslint-disable-line

  // make the menu stick when scrolling down
  $(".sticky-wrapper").sticky({ topSpacing: 0 });

  // jQuery form validation
  $('#roycode-contact-form').validate({
    submitHandler: submitValidatedForm
  });

  $('.testimonial-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,                 // transition
    autoplaySpeed: 550000,      // slide display
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true
  });

  // dropdown code for menu dropdown on mobile
  $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
          $(this).collapse('hide');
      }
  });

  // form action, calling php script to email info
  var submitValidatedForm = function() {
    var data = $('form').serialize();
    $.ajax({
      type: 'POST',
      url: 'http://royscheffers.com/php/contact-form.php',      // use for development
      data: data,
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
    });
  };


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

  $( '.project-grid' ).on("click", 'a', function(){
    p.modal( $(this).data('number') );      // eslint-disable-line
  });


   // Smooth scrolling \\
  //  ----------------  \\

  $("#main-nav a, .down-arrow, .cta-buttons .btn, .navbar-brand").on('click', function(event) {
    event.preventDefault();   // Prevent default anchor click behavior
    var hash = this.hash;     // Store hash

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1500, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });


   // Detect IOS or mobile \\
  //  --------------------  \\

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
      if(/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
          return "Android";
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }

      return "unknown";
  }

  // Google analytics
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86887764-1', 'auto');
  ga('send', 'pageview');
  /* eslint-enable */

});
