$('.navbar-toggler').click(() => {
    $('.navbar-menu').toggleClass('show')
})

$('.nav-link').click((e) => {
    $(e.target).next('.submenu').toggleClass('d-none')
})


$(window).click((e) => {
    if (!$(e.target).hasClass('nav-link')) {
        $('.submenu').addClass('d-none')
    }

})