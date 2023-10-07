// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

const swiper = new Swiper('[data-slider="1"]', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.slider-1 .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider-1 .swiper-button-next',
        prevEl: '.slider-1 .swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        // },
        // // when window width is >= 480px
        // 480: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        // },
        // when window width is >= 640px
        767: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

const swiper1 = new Swiper('.slider-2', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.slider-2 .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider-2 .swiper-button-next',
        prevEl: '.slider-2 .swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        // },
        // // when window width is >= 480px
        // 480: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        // },
        // when window width is >= 640px
        767: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});