(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  $(".skills").addClass("active")
  $(".skills .skill .skill-bar span").each(function() {
     $(this).animate({
        "width": $(this).parent().attr("data-bar") + "%"
     }, 1000);
     $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
  });
  setTimeout(function() {
     $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
  }, 2000);
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
  $(window).scroll(function(e){
  var $el = $('.fixedElement');
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 && !isPositionFixed){
    $el.css({'position': 'fixed', 'top': '0px'});
  }
  if ($(this).scrollTop() < 200 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px'});
  }
  });
  
  $("form").submit(function (event) {
            var formData = {
                text: $("#text").val(),
            };

            $.ajax({
                type: "POST",
                data: formData,
                dataType: "json",
                encode: true,
            }).done(function (data) {
                console.log(data);
            });

            event.preventDefault();
        });
    });

})(jQuery); // End of use strict
