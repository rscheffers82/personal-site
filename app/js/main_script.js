// Global grid var used in the project area
$grid = {};


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


  // for (i = 0; i < 3; i++){
  //   (function() {
  //
  //     var $project = $(
  //     '<div class="project featured">' +
  //       '<div class="project-innerwrapper">' +
  //         '<div class="title">React Todo App</div>' +
  //
  //         '<div class="img-wrapper"><img class="img-responsive" src="../images/react-todo-app.jpg"></div>' +
  //
  //         '<div class="info"><i class="fa fa-info-circle"></i> More info</div>' +
  //         '<div class="code"><i class="fa fa-github"></i> View code</div>' +
  //       '</div>' +
  //     '</div>');
  //     $grid.append( $project )
  //        // add and lay out newly appended items
  //        .isotope( 'appended', $project );
  //
  //   })();
  // }


  // load all data into the grid
  p.loadProjectsInto($grid);

  // once all data is loaded filter the results again on featured to ensure the margins are correctly set
  // This is needed, because projects are dynamically loaded.
  // window.setTimeout( function() {
  // //     // $grid.isotope({ filter: '.featured' });
  //     $grid.isotope('layout');
  //     // alert($grid);
  // },250);


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
  console.log( $(this)[0] );
  console.log( $(this).data('number') );
  p.modal( $(this).data('number') );
});
