// Javascript
$( document ).ready(function() {
  // add all projects into portfolio part of the page
  // $('.projects').append( p.showProjects() );

  // $grid.isotope({ filter: '.featured' });
  //
  // var $items = $grid.find('.grid-item');
  // $grid.isotope( 'revealItemElements', $items );

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

$grid = $('.project-grid').isotope({
  // options
  itemSelector: '.project',
  // resizable: false,
  layoutMode: 'fitRows',
  percentPosition: true,
  // filter: '.featured'
  filter: '*',
  masonry: {
    columnWidth: '.project'
  }
});

// $(window).resize(function() {
//   var width = $(window).width();
//   console.log('width: ', width);
//   if (width < 768) {
//     console.log('smaller: ', width);
//     $grid.isotope( {masonry: { columns: 2 } });
//   } else {
//     console.log('larger: ', width);
//     $grid.isotope( {masonry: { columns: 3 } });
//   }
// });



$('.filter-btn-group').on('click', '.btn', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


// // add or remove is-checked class
// $('.btn-group').on( 'click', 'button', function() {
//   console.log( 'this', this );
//   console.log('hello');
//   $.each( $( this ), function (index, element){
//     console.log('button ', element);
//
//     //$('.btn-group').find('.show').removeClass('show');
//     //$( this ).addClass('show');
//
//   });
// });

// change is-checked class on buttons
$('.btn-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', '.btn', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
