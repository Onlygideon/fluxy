$(document).ready(()=> {
    $('#hamburger-menu').click(()=> {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>",]


    $('#initial-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })


    $('#top-movies-slide').owlCarousel({
        items: 5,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            200: {
                items: 2
            },
            300: {
                items: 2
            },
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })


    $('.movies-slide').owlCarousel({
        items: 5,
        dots: false,
        nav: true,
        navText: navText,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 15,
        responsive: {
            200: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 2
            },
            750: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 5
            }
        }
    })
})