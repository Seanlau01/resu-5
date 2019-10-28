!function(){
    var view=document.querySelector('#mySlides')
    view.style.border='1px solid red'
    var mySwiper = new Swiper (view.querySelector('.swiper-container'), {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
      })
}.call()
