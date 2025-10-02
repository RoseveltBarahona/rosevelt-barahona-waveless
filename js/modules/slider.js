
export function initSlider() {

    $('#main-slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true,
    })
}