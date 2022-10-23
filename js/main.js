$(function() {
$(".accordion-wrap").on("click", function(){
    $(this).children().eq(1).slideToggle(300);
    $(this).children().eq(0).toggleClass("accordion-no-bar");
    $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
    $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
    $(this).find(".accordion-header").toggleClass("accordion-gold");
    $(this).find(".fa").toggleClass("rotate-fa");

    $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
});
    $(".burger-menu").on("tap click", function () {
        $(this).toggleClass("cross");
        $('.burger').toggleClass("cross");
        $('header, main').toggleClass("wrapper-black");
        $('.movement-menu').toggleClass("movement-menu-active");
        $('body').toggleClass("stop-scroll");
        // $('.switch').toggleClass("switch-active");
    });


    $(".switch").on("tap click", function() {
        $(this).toggleClass(".switch");
        $('.lang-item').toggleClass("lang-item-active");

    });


    //homepage testimonials slick slider
    $('#review').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 847,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    //homepage photo-review slick slider
    $('#photo-review').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1213,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });


    // modal window header
    $('.popup .close').click(function(){
      $('.popup').removeClass('open');
      $('#wrapper').removeClass('popup');
    });
    $('.popup .blocker').click(function(){
      $('.popup').removeClass('open');
      $('#wrapper').removeClass('popup');
    });
    //homepage fv popup_catalog
    $('#modal').click(function(){
      $('.popup_catalog').addClass('open');
      $('#wrapper').addClass('popup');
    });
    //homepage infra popup_catalog
    // $('.infra .catalog span').click(function(){
    //   $('.popup_catalog').addClass('open');
    //   $('#wrapper').addClass('popup');
    // });
    //homepage footer popup_map
    // $('footer .map').click(function(){
    //   $('.popup_map').addClass('open');
    //   $('#wrapper').addClass('popup');
    // });
    //manage manage_company popup_video
    // $('.manage .btns .media').click(function(){
    //   $('.popup_video').addClass('open');
    //   $('#wrapper').addClass('popup');
    // });

});
