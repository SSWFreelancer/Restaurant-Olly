$(document).ready(function (event) {
    $('.halls__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 500,    
        responsive: [
          {
            breakpoint: 961,
            settings: {
              arrows: true,
            }
          },
        ] 

    });    
    $('.halls__prev').click(function(){
      $(this).closest('.halls__row').find('.halls__slider').slick('slickPrev');
    }); 
    $('.halls__next').click(function(){
      $(this).closest('.halls__row').find('.halls__slider').slick('slickNext');
    });     
});    


