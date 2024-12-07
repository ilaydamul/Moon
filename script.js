const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

$(".header-burger").click(function () {

    $(this).toggleClass("active");
    $(".link-container").toggleClass("active");
})

// SERVICES
var swiper = new Swiper(".service-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2.1,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: ".service-next-icons", // Sağ buton
        prevEl: ".service-prev-icons", // Sol buton
    }
});

// Moving Forward Animasyonu
// var titleMovingForward = gsap.utils.toArray('.moving-forward');
// titleMovingForward.forEach(function (movingTitle) {
//     var parallax = gsap.to(movingTitle, {
//         x: -(movingTitle.offsetWidth - window.innerWidth), // Sağdan sola hareket
//         ease: "none",
//     });
//     ScrollTrigger.create({
//         trigger: movingTitle,
//         start: "top bottom", // Animasyonun başlama noktası
//         end: "bottom top",   // Animasyonun bitiş noktası
//         animation: parallax,
//         scrub: 2,            // Scroll ile senkronize animasyon
//     });
// });

// // Moving Backward Animasyonu
// var titleMovingBackward = gsap.utils.toArray('.moving-backward');
// titleMovingBackward.forEach(function (movingTitle) {
//     gsap.set(movingTitle, {
//         x: -(movingTitle.offsetWidth - window.innerWidth), // Başlangıç pozisyonu sağda
//     });
//     var parallax = gsap.to(movingTitle, {
//         x: 0, // Sola hareket
//         ease: "none",
//     });
//     ScrollTrigger.create({
//         trigger: movingTitle,
//         start: "top bottom", // Animasyonun başlama noktası
//         end: "bottom top",   // Animasyonun bitiş noktası
//         animation: parallax,
//         scrub: 2,            // Scroll ile senkronize animasyon
//     });
// });
