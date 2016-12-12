// Global grid var used in the project area
$grid = {}


$( document ).ready(function() {
  // add all projects into project grid on the portfolio
  $('.project-grid').append( p.showProjects() );

  // once all data is loaded filter the results again on featured to ensure the margins are correctly set
  // This is needed, because projects are dynamically loaded.
  setTimeout( () => {
      $grid.isotope({ filter: '.featured' });
  },100);

  $grid = $('.project-grid').isotope({
    // options
    itemSelector: '.project',
    // resizable: false,
    layoutMode: 'fitRows',
    percentPosition: true,
    filter: '.featured',
    // filter: '*',
    masonry: {
      columnWidth: '.project'
    }
  });

  $(".sticky-wrapper").sticky({topSpacing:0});

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
  console.log( $(this)[0] );
  console.log( $(this).data('number') );
  p.modal( $(this).data('number') );
});
