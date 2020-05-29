    $(document).ready(function () {
        var one = $(".one-slider");     
        var two = $(".two-slider");
        var three = $(".three-slider");
        var four = $(".four-slider");
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
       
    });
    // mmenu
    $("#my-menu").mmenu(
        {
            // extensions: ["position-top"],
            "extensions": [
                "position-top",
                "theme-dark",
            ],
            rtl: {
                use: true,
            },

        }
    )

    // ul li fade
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });
    });

    // 
 