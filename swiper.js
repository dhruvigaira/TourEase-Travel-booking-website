const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 4000, // Set the delay to 4 seconds
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
