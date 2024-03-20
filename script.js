$(document).ready(function () {

    $(".dropdown").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});



$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})


$(document).ready(function () {

    $('.hover-list-1, .tab-pane-1').hover(
        function () {
            $('.tab-pane-1').css('display', 'block')
        },
        function () {
            $('.tab-pane-1').css("display", "none")
        })

    $('.hover-list-2, .tab-pane-2').hover(
        function () {
            $('.tab-pane-2').css('display', 'block')
        },
        function () {
            $('.tab-pane-2').css("display", "none")
        })

    $('.hover-list-3, .tab-pane-3').hover(
        function () {
            $('.tab-pane-3').css('display', 'block')
        },
        function () {
            $('.tab-pane-3').css("display", "none")
        })



    $('.hover-list-4, .tab-pane-4').hover(
        function () {
            $('.tab-pane-4').css('display', 'block')
        },
        function () {
            $('.tab-pane-4').css("display", "none")
        })

    $('.hover-list-5, .tab-pane-5').hover(
        function () {
            $('.tab-pane-5').css('display', 'block')
        },
        function () {
            $('.tab-pane-5').css("display", "none")
        })

    $('.hover-list-6, .tab-pane-6').hover(
        function () {
            $('.tab-pane-6').css('display', 'block')
        },
        function () {
            $('.tab-pane-6').css("display", "none")
        })

    $('.hover-list-7, .tab-pane-7').hover(
        function () {
            $('.tab-pane-7').css('display', 'block')
        },
        function () {
            $('.tab-pane-7').css("display", "none")
        })

    $('.hover-list-8, .tab-pane-8').hover(
        function () {
            $('.tab-pane-8').css('display', 'block')
        },
        function () {
            $('.tab-pane-8').css("display", "none")
        })
    $('.hover-list-9, .tab-pane-9').hover(
        function () {
            $('.tab-pane-9').css('display', 'block')
        },
        function () {
            $('.tab-pane-9').css("display", "none")
        })
    $('.hover-list-10, .tab-pane-10').hover(
        function () {
            $('.tab-pane-10').css('display', 'block')
        },
        function () {
            $('.tab-pane-10').css("display", "none")
        })
    $('.hover-list-11, .tab-pane-11').hover(
        function () {
            $('.tab-pane-11').css('display', 'block')
        },
        function () {
            $('.tab-pane-11').css("display", "none")
        })



})




$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: false,
    margin: 3,
    dots: false,
    nav: true,
    pagination: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})



