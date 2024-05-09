console.log("ok")

const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
    
   
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const swiperdeobras = new Swiper('.swiperdeobras', {
    // Optional parameters
    
    loop: true,
    slideWidth: 0, // Largura do slide em pixels
    slideHeight: 0, // Altura do slide em pixels
    slidesPerView: 5,
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});