/**
* Template Name: iPortfolio - v1.5.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp enable for Facts Section
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000
  // });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter

  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
      filter: '.filter-projects:lt(6)'
    });

    
    // $('#portfolio-flters li').on('click', function() {
    //   $("#portfolio-flters li").removeClass('filter-active');
    //   $(this).addClass('filter-active');

    //   // portfolioIsotope.isotope({
    //   //   filter: $(this).data('filter')
    //   // });
    //   aos_init();
    // });

////////// custom //////////
function concatValues( flters ) {return flters["category"]+flters["elecount"];}
var filters = {"category": ".filter-projects", "elecount": ":lt(6)"};

$('.portfolio-flters').on('click', function(event) {
  $(".portfolio-container").isotope('shuffle');
  
  var filterGroup = event.target.getAttribute('value-group');
  filters[ filterGroup ] = event.target.getAttribute('value');

    if (event.target.innerHTML === "Show More") {
      event.target.innerHTML = "Show Less";
      event.target.value = ":lt(3)"
    } else if (event.target.innerHTML === "Show Less"){
      event.target.innerHTML = "Show More";
      event.target.value = ":lt(100)"
    }
    else{
      $("#portfolio-flters li").removeClass('filter-active');
      event.target.classList.add("filter-active")
    }


  var filterValue = concatValues(filters);
  console.log(filterValue); //


  portfolioIsotope.isotope({
    filter: filterValue
  });
  aos_init();
});


});

//////////


    // Initiate venobox (lightbox feature used in portofilo)
    // $(document).ready(function() {
    //   $('.venobox').venobox();
    // });
 

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

// I added this

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show Less";
    moreText.style.display = "inline";
  }
}


const portfolioLightbox = GLightbox({
  selector: '.portfolio-lightbox'
});



// enable iframe lightbox

// [].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
//   el.lightbox = new IframeLightbox(el);
  
// });



// $('.iframe-lightbox-link').on('click', function(event) {

//   // var filterGroup = event.target.getAttribute('data-padding-bottom');
//   // console.log(event.target.attr("data-padding-bottom"));
//   // console.log(event.target.attributes);
//   console.log(event.target.getAttribute('data-padding-bottom'));
//   event.target.setAttribute("data-padding-bottom", "166px");
//   console.log(event.target.getAttribute('data-padding-bottom'));

// });

// function detectWidth(){
//   var preview = document.getElementsByClassName("iframe-lightbox-link");
//   for (var i = 0; i < preview.length;  i++) {
//     // preview[i].setAttribute("type", 'href');

//     if(window.innerWidth < 1500){
//       preview[i].setAttribute("data-padding-bottom", "900px");
  
//     }
//     else {
//       preview[i].setAttribute("data-padding-bottom", "900px"); //IE7
//     }
//     console.log(preview[i])
//     }


//  console.log("hi")
// }

// window.onload=function(){
//   detectWidth();  
// };


// more portfolio links






