$(document).ready(function () {
    var one = $(".one-slider");
    var two = $(".two-slider");
    var three = $(".three-slider");
    var four = $(".four-slider");
    var offer=$(".offer-information-slider");
    var offset=$(".slider-offset-block");
    one.owlCarousel({
        margin: 0,
        dots: true,
        animate: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    two.owlCarousel({
        merge: true,
        loop: true,
        margin: 10,
        lazyLoad: true,
        center: false,
        dots: true,
        animate: true,
        Autoplay: true,
        nav: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        mouseDrag: true,
        touchDrag: true,
        loop: true,
        responsive: {
            0: {
                items: 10
            },
            600: {
                items: 10
            },
            1000: {
                items: 10
            }
        }
    });
    three.owlCarousel({
        loop: true,
        margin: 20,
        // nav: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    four.owlCarousel({
        loop: true,
        margin: 20,
        // nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    offer.owlCarousel({
        loop: true,
        // margin: 20,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-angle-left' style='color:rgb(41, 181, 220)'></i>","<i class='fa fa-angle-right' style='color:rgb(41, 181, 220)'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    offset.owlCarousel({
        loop: true,
        // margin: 20,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left' style='color:rgb(191, 191, 191);font-size:25px'></i>","<i class='fa fa-angle-right' style='color:rgb(191, 191, 191);font-size:25px'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

});
// mmenu
$("#my-menu").mmenu({
    "slidingSubmenus": false,
    "extensions": [
        "theme-dark"
    ],
    rtl: {
        use: true,
    },
});

// ul li fade
$(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
});

//step progress
$('.steps').on('click', '.step--active', function () {
    $(this).removeClass('step--incomplete').addClass('step--complete');
    $(this).removeClass('step--active').addClass('step--inactive');
    $(this).next().removeClass('step--inactive').addClass('step--active');
});

$('.steps').on('click', '.step--complete', function () {
    $(this).removeClass('step--complete').addClass('step--incomplete');
    $(this).removeClass('step--inactive').addClass('step--active');
    $(this).nextAll().removeClass('step--complete').addClass('step--incomplete');
    $(this).nextAll().removeClass('step--active').addClass('step--inactive');
});
 
// index 4 select box
   $( function() {
    $( "#selectable" ).selectable();
  } );

//   index5 factorcheck
function myFactorCheckFunction() {
    var checkBox = document.getElementById("myFactorCheck");
    var text = document.getElementById("factorList");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
// INDEX5 radio button real-perason && Legal person

function LegalPersonFunction() {
    var LegalPerson = document.getElementById("Legal-person");
    var LegalForm = document.getElementById("Legal-form");
    var realForm = document.getElementById("real-form");

    if (LegalPerson.checked == true) {
        LegalForm.style.display = "block";
        realForm.style.display = "none";

    } else {
        LegalForm.style.display = "none";
        realForm.style.display = "block";

    }
}
function realPersonFunction() {
    var realPerson = document.getElementById("real-person");
    var LegalForm = document.getElementById("Legal-form");
    var realForm = document.getElementById("real-form");

    if (realPerson.checked == true) {
        LegalForm.style.display = "none";
        realForm.style.display = "block";

    } else {
       
        LegalForm.style.display = "block";
        realForm.style.display = "none";
    }
}
