$(document).ready(function () {
    if($('body').hasClass('agency-page')) {
        $('html').addClass('overflow-x-hidden');
    }
    $(document).on("click", '.article-template .post-cta-modal .modal-inner-wrapper .error', function() {
        $(this).parent().find('input').focus();
    });

    $('.article-template .modal-wrapper .post-cta-modal-input.email').on('blur', function() {
        console.log('blured');
        var post_cta_modal_email       = $('input.post-cta-modal-input.email');
        var post_cta_modal_email_value       = $('input.post-cta-modal-input.email').val();
        if ( post_cta_modal_email_value.length && !dzy_is_valid_email_address(post_cta_modal_email_value) ) {
            post_cta_modal_email.addClass('red');
            $('.wrapper-email .error').addClass('invalid');
            $('.wrapper-email .error').html('Invalid email address!').show();
        } else {
            $('.wrapper-email .error').removeClass('invalid');
            $('.wrapper-email .error').html('Entry required to progress');
        }
    });

    $('body').on('show.bs.modal', '.modal', function (e) {
        // fix the problem of ios modal form with input field
        var $this = $(this);
        if (navigator.userAgent.match(/Android/i) && $(window).width() < 992) {
            $this.find('input').blur(function () {
                $('.modal-open').removeClass('fix-modal')
            })
                .focus(function () {
                $('.modal-open').addClass('fix-modal')
            });
        }
    });

    $('.estimation-tool .modal .get-in-touch').on('click', function() {
        $('.estimation-tool .modal .close').click();
    });

    $("span.wpcf7-list-item-label").click(function () {
        $("span.wpcf7-list-item-label span:first-child").toggleClass("checked");
    });
    // $('#navi-toggle').prop('checked', false);
    $('.dropdown-toggle .ticked').on('click', function (e) {
        e.stopPropagation()
    });
    $(".advanced-filter-btn[data-toggle='toggle']").click(function () {
        $('.advanced-filter-collapse').toggleClass('in');
        $(this).toggleClass('in');
        //mark the Reset Filters / Search button if filters are collapsed
        if ($('#js-reset-btn').length && typeof $('#js-reset-btn') !== 'undefined') {
            $('#js-reset-btn').toggleClass('align-bottom-left');
        }
    });
    $(".case-studies-color-btn button").click(function () {
        $(this).toggleClass('ticked');
        $(".case-studies-color-btn button").each(function () {
            if (!$(this).hasClass('ticked')) {
                $(this).addClass('disable');
            } else {
                $(this).removeClass('disable');
            }
        });
        if ($(".case-studies-color-btn button.ticked").length < 1) {
            $(".case-studies-color-btn button.disable").each(function () {
                $(this).removeClass('disable');
            });
        }
    });

    if ($(".your-acceptance .wpcf7-not-valid-tip").length) {
        $('form-check.client-acceptance').css('flex-direction', 'column');
    }
    // jquery ui accordion
    $(function () {
        $("#accordion").accordion({
            heightStyle: "content",
            collapsible: true,
            activate: function (event, ui) {
                if (!$.isEmptyObject(ui.newHeader.offset())) {
                    $('html:not(:animated), body:not(:animated)').animate({
                        scrollTop: ui.newHeader.offset().top
                    }, 'slow');
                }
            }
        });
    });

    $(function () {
        $("#accordion2").accordion({
            heightStyle: "content",
            collapsible: true
        });
    });

    // estimation tool dropdown
    $(".estimation-tool .dropdown-menu .dropdown-item").click(function () {
        $(this).closest(".dropdown-menu").prev().dropdown("toggle");
    });

    //COVID-19 eBook modal - START
    $('.js-open-covid-modal').on('click', function(){
        $('.covid-modal').addClass('d-center');
        $('body').addClass('popup-open');
        if($(window).width() < 1200) {
            $('footer.footer').css("z-index", "-1")
        }
        if ($(window).width() < 992) {
            $('body#app-layout #LeadboosterContainer').removeClass("modal-opened");
        }
    });

    $('.covid-close').on('click', function(){
        $('.covid-modal').removeClass('d-center').fadeOut('fast');
        $("body").removeClass("popup-open");
        if ($(window).width() < 1200) {
            $('footer.footer').css("z-index", "unset")
        }
        if ($(window).width() < 992) {
            $('body#app-layout #LeadboosterContainer').removeClass("modal-opened");
        }
    });

    $(".covid-modal").click(function (ev) {
        if (ev.target != this) return;
        $('.covid-modal').removeClass('d-center').fadeOut('fast');
        $("body").removeClass("popup-open");
        if ($(window).width() < 1200) {
            $('footer.footer').css("z-index", "unset")
        }
        if ($(window).width() < 992) {
            $('body#app-layout #LeadboosterContainer').removeClass("modal-opened");
        }
    });

    $(".covid-ebook #covid-accept").on('change', function () {
        $('#covid-accept').toggleClass('checked');
    });
    //COVID-19 eBook modal - END

    //Blog Post Article with Download CTA Box modal - START (BLUE/GREEN/ORANGE templates)
    $('.js-open-post-cta-modal').on( 'click', function(){
        $('.post-cta-modal').addClass('d-center');
        $('body').addClass('popup-open');
        if ($(window).width() < 1200) {
            $('footer.footer').css("z-index", "-1")
        }
        if ($(window).width() < 992) {
            $('body#app-layout #LeadboosterContainer').addClass("modal-opened")
        }
    });

    $('.post-cta-close').on( 'click', function(){
        $('.post-cta-modal').removeClass('d-center').fadeOut('fast');
        $("body").removeClass("popup-open");
        if ($(window).width() < 1200) {
            $('footer.footer').css("z-index", "unset");
        }
        if ($(window).width() < 992) {
            $('body#app-layout #LeadboosterContainer').removeClass("modal-opened");
        }
    });

    $(".post-cta-modal").click( function(ev) {
        if ( ev.target != this ) {
            return;
        }
        $('.post-cta-modal').removeClass('d-center').fadeOut('fast');
        $("body").removeClass("popup-open");
        if ($(window).width() < 1200) {
            $('footer.footer').css("z-index", "unset")
        }
        if ($(window).width() < 992) {
            $('body#app-layout #LeadboosterContainer').removeClass("modal-opened");
        }
    });

    $(".post-cta-modal #post-cta-accept").on('change', function () {
        console.log('checked')
        $('#post-cta-accept').toggleClass('checked');
    });
    //Blog Post Article with Download CTA Box modal - END

    $('.tab-toggle.ux').on('click', function () {
        $('#ux-tab').click();
    })
    $('.tab-toggle.brand').on('click', function () {
        $('#branding-tab').click();
    })
    $('.tab-toggle.ui').on('click', function () {
        $('#ui-tab').click();
    })

    if ($(window).width() < 478) {
        $('.case-studies-product-types').addClass('row');
        $('.product-type').addClass('col-sm-6');
    } else {
        $('.case-studies-product-types').removeClass('row');
        $('.product-type').removeClass('col-sm-6');
    }
    if ($('#navi-toggle').is(":checked")) {
        $(".navigation__background").css("width", "50px")
        $(".navigation__background").css("height", "50px")
    }
    $("#header .navbar-default .navbar-nav li.navigation__item").click(function () {
        $("#header .navbar-default .navbar-nav li.navigation__item").find('a').removeClass("active");
        $("#header .navbar-default .navbar-nav li.navigation__item").find('img').removeClass("star");
        $(this).find('a').toggleClass("active");
        $(this).find('img').toggleClass("star");
    });
    $('input[type="checkbox"].navigation__checkbox').click(function () {
        if ($(this).is(":checked")) {
            $("#navigation-button").addClass("fixed");
            $(".line-one").addClass("burger-animate");
            $(".line-two").addClass("burger-animate");
            $(".circle-one").addClass("burger-animate");
            $(".circle-two").addClass("burger-animate");
            $(".mobile-burger").addClass("burger-animate");
            $(".navigation__background").css("width", "50px")
            $(".navigation__background").css("height", "50px")
            $("body").css("position", "fixed")

        } else if ($(this).is(":not(:checked)")) {
            $("#navigation-button").removeClass("fixed");
            $(".line-one").removeClass("burger-animate");
            $(".line-two").removeClass("burger-animate");
            $(".circle-one").removeClass("burger-animate");
            $(".circle-two").removeClass("burger-animate");
            $(".mobile-burger").removeClass("burger-animate");
            $(".navigation__background").css("width", "0px")
            $(".navigation__background").css("height", "0px")
            $("body").css("position", "unset")
        }
    });

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height() - 300;
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function () {
        $('.animate').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('viewed');
            }
        });
    });

    $('.owl-carousel-left-slide').click(function () {
        owl.trigger('prev.owl.carousel');
    });
    $('.owl-carousel-right-slide').click(function () {
        owl.trigger('next.owl.carousel');
    });

    var owl = $(".owl-carousel.development").owlCarousel({
        loop: false,
        margin: 0,
        stagePadding: 0,
        dots: false,
        center: true,
        lazyLoad: true,
        smartSpeed: 750,
        singleItem: true,
        autoWidth: false,
        autoHeight: true,
        mouseDrag: true,
        touchDrag: true,
        fallbackEasing: true,
        pullDrag: true,
        items: 1,
        responsive: {
            items: 1
        }
    });
    var owl = $(".owl-carousel.design").owlCarousel({
        loop: true,
        margin: 100,
        stagePadding: 0,
        dots: false,
        lazyLoad: true,
        center: true,
        smartSpeed: 750,
        singleItem: true,
        autoWidth: false,
        autoHeight: true,
        mouseDrag: true,
        touchDrag: true,
        fallbackEasing: true,
        pullDrag: true,
        items: 1,
        responsive: {
            items: 1
        }
    });
    var owl = $(".owl-carousel.case-studies").owlCarousel({
        loop: true,
        margin: 100,
        stagePadding: 0,
        dots: false,
        lazyLoad: true,
        center: true,
        smartSpeed: 750,
        singleItem: true,
        autoWidth: false,
        autoHeight: true,
        mouseDrag: true,
        touchDrag: true,
        fallbackEasing: true,
        pullDrag: true,
        items: 1,
        responsive: {
            items: 1
        }
    });
    var owl = $(".owl-carousel.initial-carousel").owlCarousel({
        loop: true,
        margin: 0,
        stagePadding: 50,
        dots: false,
        center: false,
        smartSpeed: 750,
        singleItem: false,
        autoWidth: true,
        autoHeight: true,
        mouseDrag: true,
        touchDrag: true,
        fallbackEasing: true,
        pullDrag: true,
        animateOut: 'slideInLeft',
        animateIn: 'slideOutRight',
        items: 2,
        responsive: {
            items: 3
        }
    });

    $('.section.quotes.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        dots: false,
        autoplayTimeout: 5000,
        autoplayHoverPause:false
    });
    $('.development .row.down div').on('click', function() {
        $('html').animate({
            scrollTop: $(".development  section.dynamic-table").offset().top
            , behavior: "smooth"});
    });

    /* faq collapse cards */
    $('.collapse').on('shown.bs.collapse', function (e) {
        var $card = $(this).closest('.card');
        $('html,body').animate({
            scrollTop: $card.offset().top - 120,
            behavior: 'smooth'
        }, 500, 'linear');
    });
    // case studies dropdown menu center view on mobile
    if ($(window).width() < 992) {

        $('.advanced-filter-btn').on('click', function() {
            var elOffset = $(this).offset().top;
            var elHeight = $('.advanced-filter-collapse').height();
            var windowHeight = $(window).height();
            var offset;
            if (elHeight < windowHeight) {
                offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
            } else {
                offset = elOffset;
            }
            $('html, body').animate({
                scrollTop: offset
            }, 800, "linear");
        });

        $('.dropdown-toggle').on('click', function () {
            var elOffset = $(this).offset().top;
            var elHeight = $(this).siblings('.dropdown-menu').height();
            var windowHeight = $(window).height();
            var offset;
            if (elHeight < windowHeight) {
                offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
            } else {
                offset = elOffset;
            }
            $('html, body').animate({
                scrollTop: offset
            }, 800, "linear");
        });
    }
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {


                window.location.hash = hash;
            });
        }
    });
    $(".design a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 150
            }, 300, function () {
                window.location.hash = hash;
            });
        }
    });


    window.addEventListener('popstate', function (e) {
        if (e.state && e.state.startsWith('#') && $(e.state).length) {
            $('html, body').animate({
                scrollTop: $(e.state).offset().top
            }, 800)
        }
    });


    $('html, body').on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
        $('html, body').stop();
    });


    // development carousel

    function devTable() {
        var row1 = $('#breakdown-col-1');
        var row2 = $('#total-cost-col-1');
        var row3 = $('.table.js-carousel tbody .white-row .x-icon');
        var newHeight1 = row1.outerHeight();
        var newHeight2 = row2.outerHeight();
        var newHeight3 = row3.outerHeight();

        newHeight1 = Math.ceil(newHeight1);
        newHeight2 = Math.ceil(newHeight2);
        newHeight3 = Math.ceil(newHeight3);
        $('.table.js-carousel tbody .white-row.dynamic').css("height", newHeight3 + "px");
        $('.table.js-carousel tbody .white-row.dynamic').css("min-height", newHeight3 + "px");
        $('.table.js-carousel tbody .white-row.dynamic').css("max-height", newHeight3 + "px");

        $('#breakdown-col-1').css("height", newHeight1 + "px");
        $('#breakdown-col-1').css("min-height", newHeight1 + "px");
        $('#breakdown-col-1').css("max-height", newHeight1 + "px");
        $('#breakdown-col-2').css("height", newHeight1 + "px");
        $('#breakdown-col-2').css("min-height", newHeight1 + "px");
        $('#breakdown-col-2').css("max-height", newHeight1 + "px");
        $('#breakdown-col-3').css("height", newHeight1 + "px");
        $('#breakdown-col-3').css("min-height", newHeight1 + "px");
        $('#breakdown-col-3').css("max-height", newHeight1 + "px");
        $('#breakdown-col-4').css("height", newHeight1 + "px");
        $('#breakdown-col-4').css("min-height", newHeight1 + "px");
        $('#breakdown-col-4').css("max-height", newHeight1 + "px");
        $('#breakdown-col-5').css("height", newHeight1 + "px");
        $('#breakdown-col-5').css("min-height", newHeight1 + "px");
        $('#breakdown-col-5').css("max-height", newHeight1 + "px");
        $('#total-cost-col-1').css("height", newHeight2 + "px");
        $('#total-cost-col-1').css("min-height", newHeight2 + "px");
        $('#total-cost-col-1').css("max-height", newHeight2 + "px");
        $('#total-cost-col-2').css("height", newHeight2 + "px");
        $('#total-cost-col-2').css("min-height", newHeight2 + "px");
        $('#total-cost-col-2').css("max-height", newHeight2 + "px");
        $('#total-cost-col-3').css("height", newHeight2 + "px");
        $('#total-cost-col-3').css("min-height", newHeight2 + "px");
        $('#total-cost-col-3').css("max-height", newHeight2 + "px");
        $('#total-cost-col-4').css("height", newHeight2 + "px");
        $('#total-cost-col-4').css("min-height", newHeight2 + "px");
        $('#total-cost-col-4').css("max-height", newHeight2 + "px");
        $('#total-cost-col-5').css("height", newHeight2 + "px");
        $('#total-cost-col-5').css("min-height", newHeight2 + "px");
        $('#total-cost-col-5').css("max-height", newHeight2 + "px");
    }
    devTable();
    $(window).resize(function () {
        devTable();
    });
    $(window).on('orientationchange', function () {
        devTable();
    });




    // table carousel

    function tableSmallResize() {
        var column1 = $('.deazy-way.fp .column-1 p');
        var column2 = $('.deazy-way.fp .column-2 p');
        var column3 = $('.deazy-way.fp .owl-carousel-container .owl-item .column-3 p');
        var column4 = $('.deazy-way.fp .owl-carousel-container .owl-item .column-4 p');
        var column5 = $('.deazy-way.fp .owl-carousel-container .owl-item .column-5 p');
        var column31 = $(column3).slice(0, 9);
        var column32 = $(column3).slice(9, 18);
        var column33 = $(column3).slice(18, 27);
        var column41 = $(column4).slice(0, 9);
        var column42 = $(column4).slice(9, 18);
        var column43 = $(column4).slice(18, 27);
        var column51 = $(column5).slice(0, 9);
        var column52 = $(column5).slice(9, 18);
        var column53 = $(column5).slice(18, 27);
        for (var i = 0; i < column1.length; i++) {
            var newHeight = $(column1[i]).innerHeight();
            newHeight = Math.ceil(newHeight);
            $(column1[i]).css("height", newHeight + "px");
            $(column2[i]).css("height", newHeight + "px");
            $(column31[i]).css("height", newHeight + "px");
            $(column32[i]).css("height", newHeight + "px");
            $(column33[i]).css("height", newHeight + "px");
            $(column41[i]).css("height", newHeight + "px");
            $(column42[i]).css("height", newHeight + "px");
            $(column43[i]).css("height", newHeight + "px");
            $(column51[i]).css("height", newHeight + "px");
            $(column52[i]).css("height", newHeight + "px");
            $(column53[i]).css("height", newHeight + "px");
        }
    }
    tableSmallResize();
    $(window).resize(function () {
        tableSmallResize();
    });

    function tableLargeResize() {
        var column1 = $('.startup .deazy-way .column-1 p');
        var column2 = $('.startup .deazy-way .column-2 p');
        var column3 = $('.startup .deazy-way .owl-carousel-container .owl-item .column-3 p');
        var column4 = $('.startup .deazy-way .owl-carousel-container .owl-item .column-4 p');
        var column5 = $('.startup .deazy-way .owl-carousel-container .owl-item .column-5 p');
        var column31 = $(column3).slice(0, 14);
        var column32 = $(column3).slice(14, 28);
        var column33 = $(column3).slice(28, 42);
        var column41 = $(column4).slice(0, 14);
        var column42 = $(column4).slice(14, 28);
        var column43 = $(column4).slice(28, 42);
        var column51 = $(column5).slice(0, 14);
        var column52 = $(column5).slice(14, 28);
        var column53 = $(column5).slice(28, 42);
        for (var i = 0; i < column1.length; i++) {
            var newHeight = $(column1[i]).innerHeight();
            newHeight = Math.ceil(newHeight);
            $(column1[i]).css("height", newHeight + "px");
            $(column2[i]).css("height", newHeight + "px");
            $(column31[i]).css("height", newHeight + "px");
            $(column32[i]).css("height", newHeight + "px");
            $(column33[i]).css("height", newHeight + "px");
            $(column41[i]).css("height", newHeight + "px");
            $(column42[i]).css("height", newHeight + "px");
            $(column43[i]).css("height", newHeight + "px");
            $(column51[i]).css("height", newHeight + "px");
            $(column52[i]).css("height", newHeight + "px");
            $(column53[i]).css("height", newHeight + "px");
        }
    }
    tableLargeResize();
    $(window).resize(function () {
        tableLargeResize();
    })

    function tableLargeAgencyResize() {
        var column1 = $('.agency .deazy-way .column-1 p');
        var column2 = $('.agency .deazy-way .column-2 p');
        var column3 = $('.agency .deazy-way .owl-carousel-container .owl-item .column-3 p');
        var column4 = $('.agency .deazy-way .owl-carousel-container .owl-item .column-4 p');
        var column5 = $('.agency .deazy-way .owl-carousel-container .owl-item .column-5 p');
        var column31 = $(column3).slice(0, 13);
        var column32 = $(column3).slice(13, 26);
        var column33 = $(column3).slice(26, 39);
        var column41 = $(column4).slice(0, 13);
        var column42 = $(column4).slice(13, 26);
        var column43 = $(column4).slice(26, 39);
        var column51 = $(column5).slice(0, 13);
        var column52 = $(column5).slice(13, 26);
        var column53 = $(column5).slice(26, 39);
        for (var i = 0; i < column1.length; i++) {
            $(column1[i]).css('height', 'inherit');
            var newHeight = $(column1[i]).innerHeight();
            newHeight = Math.ceil(newHeight);
            $(column1[i]).css("height", newHeight + "px");
            $(column2[i]).css("height", newHeight + "px");
            $(column31[i]).css("height", newHeight + "px");
            $(column32[i]).css("height", newHeight + "px");
            $(column33[i]).css("height", newHeight + "px");
            $(column41[i]).css("height", newHeight + "px");
            $(column42[i]).css("height", newHeight + "px");
            $(column43[i]).css("height", newHeight + "px");
            $(column51[i]).css("height", newHeight + "px");
            $(column52[i]).css("height", newHeight + "px");
            $(column53[i]).css("height", newHeight + "px");
        }
    }
    tableLargeAgencyResize();
    $(window).resize(function () {
        tableLargeAgencyResize();
    });

    // development table

    $('table.js-table-desktop tbody .hourly-rate span').each(function () {
        var hourlyRate = parseFloat($(this).html());
    })
    var quantityValue;

    $('table.js-table-desktop .quantity-wrapper button').on('click', function () {
        if ($(this).parent().find('.onlyNumber').val() == 0) {
            $(this).parent().parent().parent().toggleClass('opacity-low');
            $(this).parent().find('.zero').addClass('ticked');
            $(this).parent().find('.onlyNumber').addClass('ticked');
            $(this).parent().find('button').addClass('ticked');
        }
    })

    $('table.js-carousel .quantity-wrapper button').on('click', function () {
        if ($(this.closest('table.js-carousel')).length && typeof $(this.closest('table.js-carousel')) !== 'undefined' && $(this).parent().find('.onlyNumber').val() == 0) {
            var devCalcTableRow = $(this).closest('tr.white-row.opacity');
            var devCalcTableRowIndex = devCalcTableRow.index();
            var carouselDevColumns = $('table.js-carousel');
            carouselDevColumns.each(function () {
                var carouselDevColumn = $(this);
                // carouselDevColumn.find(' .white-row.opacity').eq(devCalcTableRowIndex).toggleClass('opacity-low');
                carouselDevColumn.find('tbody tr').eq(devCalcTableRowIndex).toggleClass('opacity-low');
                carouselDevColumn.find('tbody tr .quantity-wrapper .zero').eq(devCalcTableRowIndex).toggleClass('ticked');
                carouselDevColumn.find('tbody tr .quantity-wrapper .onlyNumber').eq(devCalcTableRowIndex).toggleClass('ticked');
                carouselDevColumn.find('tbody tr .quantity-wrapper').eq(devCalcTableRowIndex).find('button').toggleClass('ticked');
            })
        }

    })

    $('table.js-dev-calc-table tbody tr .x-icon-img').on('click', function () {
        if ($(this).closest('tr.white-row.opacity').hasClass('opacity-low')) {
            $(this).parent().parent().parent().parent().find('.quantity-wrapper .onlyNumber').val(1);

            if ($(this.closest('table.js-carousel')).length && typeof $(this.closest('table.js-carousel')) !== 'undefined') {
                var devCalcTableRow = $(this).closest('tr.white-row.opacity');
                var devCalcTableRowIndex = devCalcTableRow.index();
                var carouselDevColumns = $('.owl-carousel.development table.js-carousel');
                carouselDevColumns.each(function () {
                    var carouselDevColumn = $(this);
                    carouselDevColumn.find('.quantity-wrapper .onlyNumber').eq(devCalcTableRowIndex).val(1);
                })
            }
        }
    })

    $('table.js-dev-calc-table tbody tr .x-icon-img').on('click', function () {
        var devCalcTableRow = $(this).closest('tr.white-row.opacity');
        $(this).parent().parent().parent().parent().find('.quantity-wrapper .zero').toggleClass('ticked');
        $(this).parent().parent().parent().parent().find('.quantity-wrapper .onlyNumber').toggleClass('ticked');
        $(this).parent().parent().parent().parent().find('.quantity-wrapper button').toggleClass('ticked');
        devCalcTableRow.toggleClass('opacity-low');

        devCalcTableRow.attr('value', devCalcTableRow.attr('value') === 'false' ? 'true' : 'false');

        if ($(this.closest('table.js-carousel')).length && typeof $(this.closest('table.js-carousel')) !== 'undefined') {
            var devCalcTableRowIndex = devCalcTableRow.index();
            var carouselDevColumns = $('.owl-carousel.development table.js-carousel');
            carouselDevColumns.each(function () {
                var carouselDevColumn = $(this);
                carouselDevColumn.find('tbody tr').eq(devCalcTableRowIndex).toggleClass('opacity-low');
                carouselDevColumn.find('tbody tr .quantity-wrapper .zero').eq(devCalcTableRowIndex).toggleClass('ticked');
                carouselDevColumn.find('tbody tr .quantity-wrapper .onlyNumber').eq(devCalcTableRowIndex).toggleClass('ticked');
                carouselDevColumn.find('tbody tr .quantity-wrapper').eq(devCalcTableRowIndex).find('button').toggleClass('ticked');
            })
        }
    })

    $("input[type=radio],input[type=checkbox], #table-range, .add-row, .pull-left-button, .pull-right-button, .onlyNumber").on('change input, click', function (e) {

        $this = e.target;

        var monthCount = $('#table-range').val();

        // Full time and Continous checked
        if ($("#full-time").is(':checked') && $("#continous").is(':checked')) {
            $('.hours .part-time').css("display", "none");
            $('.hours .full-time').css("display", "inline-block");
            $('.sprint-cost .part-time').css("display", "none");
            $('.sprint-cost .full-time').css("display", "inline-block");

            var totalHours = 0;
            $('table.js-table-desktop tbody .hours .full-time').each(function (index, item) {
                quantityValue = $(this).parent().parent().find($('.quantity .onlyNumber'));
                var hours = parseFloat($(this).html())
                var hoursInc = $(this).siblings('.hours-placeholder');
                hoursInc = hours * (quantityValue.val())
                $(this).siblings('.hours-placeholder').text(hoursInc);
                if (quantityValue.val() >= 1) {
                    $(this).siblings('.hours-placeholder').css('display', 'inline-block');
                    $(this).css('display', 'none');
                }
                if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                    hours = 0;
                    quantityValue.val(0);
                    $(this).siblings('.hours-placeholder').css('display', 'none');
                }
                totalHours += hoursInc;
            })

            var totalSprintCost = 0;
            $('table.js-table-desktop tbody .sprint-cost .full-time').each(function (index, item) {
                quantityValue = $(this).parent().parent().parent().find($('.quantity .onlyNumber'));
                var sprintsStr = $(this).html();
                var sprints = parseFloat(sprintsStr.replace(/,/g, ''));
                var sprintsInc = $(this).siblings('.sprint-placeholder');
                sprintsInc = sprints * (quantityValue.val());
                $(this).siblings('.sprint-placeholder').text(sprintsInc.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }))
                if (quantityValue.val() >= 1) {
                    $(this).siblings('.sprint-placeholder').css('display', 'inline-block');
                    $(this).css('display', 'none');
                } else {
                    $(this).siblings('.sprint-placeholder').css('display', 'none');
                    $(this).css('display', 'inline-block');
                    $(this).closest('.white-row.dynamic').addClass('opacity-low')
                }
                if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                    sprints = 0;
                }
                totalSprintCost += sprintsInc;
            })
            var totalCost = 0;
            $('table.js-table-desktop tbody .white-row.dynamic').each(function (index, item) {
                var rateRow = $(this).find('td.hourly-rate span').html();
                var hoursRow;
                quantityValue = $(this).find($('.quantity .onlyNumber'));
                if(quantityValue.val() > 1) {
                    hoursRow = $(this).find('td.hours .hours-placeholder').html();
                } else {
                    hoursRow = $(this).find('td.hours .full-time').html();
                }
                if ($(this).hasClass('opacity-low')) {
                    hoursRow = 0;
                }
                var totalCostRow = rateRow * hoursRow * 2 * monthCount;
                totalCost += totalCostRow;
            })

            $(".white-row.breakdown-row .hours").text(totalHours + ' ' + 'Hours');
            $(".white-row.breakdown-row .breakdown-sprint-cost").text('Â£' + totalSprintCost.toLocaleString(undefined, {
                minimumFractionDigits: 2
            }));
            $(".white-row.orange-row .full-total-cost").text('Â£' + totalCost.toLocaleString(undefined, {
                minimumFractionDigits: 2
            }));
            const sprintCount = monthCount * 2;
            $(".white-row.orange-row .sprint-count").text(sprintCount + ' ' + 'Sprints');
            if ($('table.js-carousel').length && typeof $('table.js-carousel') !== 'undefined' && ($(window).width() <= 768)) {
                totalCost = 0;
                totalSprintCost = 0;
                totalHours = 0;

                $('table.js-carousel .hours .full-time').each(function (index, item) {
                    devCalcTableRowHours = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndexHours = devCalcTableRowHours.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    quantityValue = carouselDevColumns.find($('.quantity .onlyNumber')).eq(devCalcTableRowIndexHours);
                    hours = parseFloat($(this).html());
                    var hoursInc = $(this).siblings('.hours-placeholder');
                    hoursInc = hours * (quantityValue.val())
                    $(this).siblings('.hours-placeholder').text(hoursInc);
                    if (quantityValue.val() >= 1) {
                        $(this).siblings('.hours-placeholder').css('display', 'inline-block');
                        $(this).css('display', 'none');
                    }
                    if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                        hours = 0;
                        quantityValue.val(0);
                        $(this).siblings('.hours-placeholder').css('display', 'none');
                    }
                    totalHours += hoursInc;
                })

                $('table.js-carousel .sprint-cost .full-time').each(function (index, item) {
                    devCalcTableRowSprints = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndexSprints = devCalcTableRowSprints.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    quantityValue = carouselDevColumns.find($('.quantity .onlyNumber')).eq(devCalcTableRowIndexSprints);
                    var sprintsStr = $(this).html();
                    var sprints = parseFloat(sprintsStr.replace(/,/g, ''));
                    var sprintsInc = $(this).siblings('.sprint-placeholder');
                    sprintsInc = sprints * (quantityValue.val());
                    $(this).siblings('.sprint-placeholder').text(sprintsInc.toLocaleString(undefined, {
                        minimumFractionDigits: 2
                    }))

                    if (quantityValue.val() > 1) {
                        $(this).siblings('.sprint-placeholder').css('display', 'inline-block');
                        $(this).css('display', 'none');
                    } else {
                        $(this).siblings('.sprint-placeholder').css('display', 'none');
                        $(this).css('display', 'inline-block');
                    }
                    if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                        sprints = 0;
                    }
                    totalSprintCost += sprintsInc;
                })
                $('table.js-carousel .white-row.dynamic').each(function (index, item) {
                    devCalcTableRow = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndex = devCalcTableRow.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    rateRow = carouselDevColumns.find('.hourly-rate span').eq(devCalcTableRowIndex).html();
                    hoursRow = parseFloat(carouselDevColumns.find('.hours .full-time').eq(devCalcTableRowIndex).html());
                    if ($(this).hasClass('opacity-low')) {
                        hoursRow = 0;
                    }
                    var totalCostRow = ((rateRow * hoursRow) * 2 * monthCount) / 5;
                    totalCost += totalCostRow;
                })
                $(".white-row.breakdown-row .hours").text(totalHours + ' ' + 'Hours');
                $(".white-row.breakdown-row .breakdown-sprint-cost").text('Â£' + totalSprintCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }));
                $(".white-row.orange-row .full-total-cost").text('Â£' + totalCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }));
                const sprintCount = monthCount * 2;
                $(".white-row.orange-row .sprint-count").text(sprintCount + ' ' + 'Sprints');
            }
        }

        // Full time and Stop-start checked

        if ($("#full-time").is(':checked') && $("#stop-start").is(':checked')) {

            $('.hours .part-time').css("display", "none");
            $('.hours .full-time').css("display", "inline-block");
            $('.sprint-cost .part-time').css("display", "none");
            $('.sprint-cost .full-time').css("display", "inline-block");
            var totalHours = 0;
            $('table.js-table-desktop tbody .hours .full-time').each(function (index, item) {
                quantityValue = $(this).parent().parent().find($('.quantity .onlyNumber'));
                var hours = parseFloat($(this).html())
                var hoursInc = $(this).siblings('.placeholder');
                hoursInc = hours * (quantityValue.val())
                $(this).siblings('.hours-placeholder').text(hoursInc);
                if (quantityValue.val() >= 1) {
                    $(this).siblings('.hours-placeholder').css('display', 'inline-block');
                    $(this).css('display', 'none');
                }
                if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                    hours = 0;
                    quantityValue.val(0);
                    $(this).siblings('.hours-placeholder').css('display', 'none');
                }
                totalHours += hoursInc;
            })
            var totalSprintCost = 0;
            $('table.js-table-desktop tbody .sprint-cost .full-time').each(function (index, item) {
                quantityValue = $(this).parent().parent().parent().find($('.quantity .onlyNumber'));
                var sprintsStr = $(this).html();
                var sprints = parseFloat(sprintsStr.replace(/,/g, ''));
                var sprintsInc = $(this).siblings('.sprint-placeholder');
                sprintsInc = sprints * (quantityValue.val());
                $(this).siblings('.sprint-placeholder').text(sprintsInc.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }))
                if (quantityValue.val() >= 1) {
                    $(this).siblings('.sprint-placeholder').css('display', 'inline-block');
                    $(this).css('display', 'none');
                } else {
                    $(this).siblings('.sprint-placeholder').css('display', 'none');
                    $(this).css('display', 'inline-block');
                }
                if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                    sprints = 0;
                }
                totalSprintCost += sprintsInc;
            })
            var totalCost = 0;
            $('table.js-table-desktop tbody .white-row.dynamic').each(function (index, item) {
                var rateRow = $(this).find('td.hourly-rate span').html();
                var hoursRow;
                quantityValue = $(this).find($('.quantity .onlyNumber'));
                if (quantityValue.val() >= 1) {
                    hoursRow = $(this).find('td.hours .hours-placeholder').html();
                } else {
                    hoursRow = $(this).find('td.hours .full-time').html();
                }
                if ($(this).hasClass('opacity-low')) {
                    hoursRow = 0;
                }
                var totalCostRow = rateRow * hoursRow * .5 * monthCount;
                totalCost += totalCostRow;
            })

            $(".white-row.breakdown-row .hours").text(totalHours + ' ' + 'Hours');
            $(".white-row.breakdown-row .breakdown-sprint-cost").text('Â£' + totalSprintCost.toLocaleString(undefined, {
                minimumFractionDigits: 2
            }));
            $(".white-row.orange-row .full-total-cost").text('Â£' + totalCost.toLocaleString(undefined, {
                minimumFractionDigits: 2
            }));
            const sprintCount = monthCount * .5;
            $(".white-row.orange-row .sprint-count").text(sprintCount + ' ' + 'Sprints');

            if ($('table.js-carousel').length && typeof $('table.js-carousel') !== 'undefined' && ($(window).width() <= 768)) {
                totalCost = 0;
                totalSprintCost = 0;
                totalHours = 0;

                $('table.js-carousel .hours .full-time').each(function (index, item) {
                    devCalcTableRowHours = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndexHours = devCalcTableRowHours.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    quantityValue = carouselDevColumns.find($('.quantity .onlyNumber')).eq(devCalcTableRowIndexHours);
                    hours = parseFloat($(this).html());
                    var hoursInc = $(this).siblings('.hours-placeholder');
                    hoursInc = hours * (quantityValue.val())
                    $(this).siblings('.hours-placeholder').text(hoursInc);
                    if (quantityValue.val() >= 1) {
                        $(this).siblings('.hours-placeholder').css('display', 'inline-block');
                        $(this).css('display', 'none');
                    }
                    if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                        hours = 0;
                        quantityValue.val(0);
                        $(this).siblings('.hours-placeholder').css('display', 'none');
                    }
                    totalHours += hoursInc;
                })
                $('table.js-carousel .sprint-cost .full-time').each(function (index, item) {
                    devCalcTableRowSprints = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndexSprints = devCalcTableRowSprints.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    quantityValue = carouselDevColumns.find($('.quantity .onlyNumber')).eq(devCalcTableRowIndexSprints);
                    var sprintsStr = $(this).html();
                    var sprints = parseFloat(sprintsStr.replace(/,/g, ''));
                    var sprintsInc = $(this).siblings('.sprint-placeholder');
                    sprintsInc = sprints * (quantityValue.val());
                    $(this).siblings('.sprint-placeholder').text(sprintsInc.toLocaleString(undefined, {
                        minimumFractionDigits: 2
                    }))

                    if (quantityValue.val() > 1) {
                        $(this).siblings('.sprint-placeholder').css('display', 'inline-block');
                        $(this).css('display', 'none');
                    } else {
                        $(this).siblings('.sprint-placeholder').css('display', 'none');
                        $(this).css('display', 'inline-block');
                    }
                    if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                        sprints = 0;
                    }
                    totalSprintCost += sprintsInc;
                })
                $('table.js-carousel .white-row.dynamic').each(function (index, item) {
                    devCalcTableRow = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndex = devCalcTableRow.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    rateRow = carouselDevColumns.find('.hourly-rate span').eq(devCalcTableRowIndex).html();
                    hoursRow = parseFloat(carouselDevColumns.find('.hours .full-time').eq(devCalcTableRowIndex).html());
                    if ($(this).hasClass('opacity-low')) {
                        hoursRow = 0;
                    }
                    var totalCostRow = ((rateRow * hoursRow) * .5 * monthCount) / 5;
                    totalCost += totalCostRow;
                })
                $(".white-row.breakdown-row .hours").text(totalHours + ' ' + 'Hours');
                $(".white-row.breakdown-row .breakdown-sprint-cost").text('Â£' + totalSprintCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }));
                $(".white-row.orange-row .full-total-cost").text('Â£' + totalCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }));
                const sprintCount = monthCount * .5;
                $(".white-row.orange-row .sprint-count").text(sprintCount + ' ' + 'Sprints');
            }
        }

        // Part time and continous checked

        if ($("#part-time").is(':checked') && $("#continous").is(':checked')) {

            $('.hours .full-time').css("display", "none");
            $('.hours .part-time').css("display", "inline-block");
            $('.sprint-cost .full-time').css("display", "none");
            $('.sprint-cost .part-time').css("display", "inline-block");
            var totalHours = 0;
            $('table.js-table-desktop tbody .hours .part-time').each(function (index, item) {
                quantityValue = $(this).parent().parent().find($('.quantity .onlyNumber'));
                var hours = parseFloat($(this).html())
                var hoursInc = $(this).siblings('.placeholder');
                hoursInc = hours * (quantityValue.val())
                $(this).siblings('.hours-placeholder').text(hoursInc);
                if (quantityValue.val() >= 1) {
                    $(this).siblings('.hours-placeholder').css('display', 'inline-block');
                    $(this).css('display', 'none');
                }
                if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                    hours = 0;
                    quantityValue.val(0);
                    $(this).siblings('.hours-placeholder').css('display', 'none');
                }
                totalHours += hoursInc;
            })
            var totalSprintCost = 0;
            $('table.js-table-desktop tbody .sprint-cost .part-time').each(function (index, item) {
                quantityValue = $(this).parent().parent().parent().find($('.quantity .onlyNumber'));
                var sprintsStr = $(this).html();
                var sprints = parseFloat(sprintsStr.replace(/,/g, ''));
                var sprintsInc = $(this).siblings('.sprint-placeholder');
                sprintsInc = sprints * (quantityValue.val());
                $(this).siblings('.sprint-placeholder').text(sprintsInc.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }))
                if (quantityValue.val() >= 1) {
                    $(this).siblings('.sprint-placeholder').css('display', 'inline-block');
                    $(this).css('display', 'none');
                } else {
                    $(this).siblings('.sprint-placeholder').css('display', 'none');
                    $(this).css('display', 'inline-block');
                }
                if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                    sprints = 0;
                }
                totalSprintCost += sprintsInc;
            })
            var totalCost = 0;
            $('table.js-table-desktop tbody .white-row.dynamic').each(function (index, item) {
                var rateRow = $(this).find('td.hourly-rate span').html();
                var hoursRow;
                quantityValue = $(this).find($('.quantity .onlyNumber'));
                if (quantityValue.val() >= 1) {
                    hoursRow = $(this).find('td.hours .hours-placeholder').html();
                } else {
                    hoursRow = $(this).find('td.hours .part-time').html();
                }
                if ($(this).hasClass('opacity-low')) {
                    hoursRow = 0;
                }
                var totalCostRow = rateRow * hoursRow * 2 * monthCount;
                totalCost += totalCostRow;
            })

            $(".white-row.breakdown-row .hours").text(totalHours + ' ' + 'Hours');
            $(".white-row.breakdown-row .breakdown-sprint-cost").text('Â£' + totalSprintCost.toLocaleString(undefined, {
                minimumFractionDigits: 2
            }));
            $(".white-row.orange-row .full-total-cost").text('Â£' + totalCost.toLocaleString(undefined, {
                minimumFractionDigits: 2
            }));
            const sprintCount = monthCount * 2;
            $(".white-row.orange-row .sprint-count").text(sprintCount + ' ' + 'Sprints');

            if ($('table.js-carousel').length && typeof $('table.js-carousel') !== 'undefined' && ($(window).width() <= 768)) {
                totalCost = 0;
                totalSprintCost = 0;
                totalHours = 0;

                $('table.js-carousel .hours .part-time').each(function (index, item) {
                    devCalcTableRowHours = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndexHours = devCalcTableRowHours.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    quantityValue = carouselDevColumns.find($('.quantity .onlyNumber')).eq(devCalcTableRowIndexHours);
                    hours = parseFloat($(this).html());
                    var hoursInc = $(this).siblings('.hours-placeholder');
                    hoursInc = hours * (quantityValue.val())
                    $(this).siblings('.hours-placeholder').text(hoursInc);
                    if (quantityValue.val() >= 1) {
                        $(this).siblings('.hours-placeholder').css('display', 'inline-block');
                        $(this).css('display', 'none');
                    }
                    if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                        hours = 0;
                        quantityValue.val(0);
                        $(this).siblings('.hours-placeholder').css('display', 'none');
                    }
                    totalHours += hoursInc;
                })
                $('table.js-carousel .sprint-cost .part-time').each(function (index, item) {
                    devCalcTableRowSprints = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndexSprints = devCalcTableRowSprints.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    quantityValue = carouselDevColumns.find($('.quantity .onlyNumber')).eq(devCalcTableRowIndexSprints);
                    var sprintsStr = $(this).html();
                    var sprints = parseFloat(sprintsStr.replace(/,/g, ''));
                    var sprintsInc = $(this).siblings('.sprint-placeholder');
                    sprintsInc = sprints * (quantityValue.val());
                    $(this).siblings('.sprint-placeholder').text(sprintsInc.toLocaleString(undefined, {
                        minimumFractionDigits: 2
                    }))

                    if (quantityValue.val() > 1) {
                        $(this).siblings('.sprint-placeholder').css('display', 'inline-block');
                        $(this).css('display', 'none');
                    } else {
                        $(this).siblings('.sprint-placeholder').css('display', 'none');
                        $(this).css('display', 'inline-block');
                    }
                    if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                        sprints = 0;
                    }
                    totalSprintCost += sprintsInc;
                })
                $('table.js-carousel .white-row.dynamic').each(function (index, item) {
                    devCalcTableRow = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndex = devCalcTableRow.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    rateRow = carouselDevColumns.find('.hourly-rate span').eq(devCalcTableRowIndex).html();
                    hoursRow = parseFloat(carouselDevColumns.find('.hours .part-time').eq(devCalcTableRowIndex).html());
                    if ($(this).hasClass('opacity-low')) {
                        hoursRow = 0;
                    }
                    var totalCostRow = ((rateRow * hoursRow) * 2 * monthCount) / 5;
                    totalCost += totalCostRow;
                })
                $(".white-row.breakdown-row .hours").text(totalHours + ' ' + 'Hours');
                $(".white-row.breakdown-row .breakdown-sprint-cost").text('Â£' + totalSprintCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }));
                $(".white-row.orange-row .full-total-cost").text('Â£' + totalCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }));
                const sprintCount = monthCount * 2;
                $(".white-row.orange-row .sprint-count").text(sprintCount + ' ' + 'Sprints');
            }
        }

        // part time and stop start checked

        if ($("#part-time").is(':checked') && $("#stop-start").is(':checked')) {

            $('.hours .full-time').css("display", "none");
            $('.hours .part-time').css("display", "inline-block");
            $('.sprint-cost .full-time').css("display", "none");
            $('.sprint-cost .part-time').css("display", "inline-block");
            var totalHours = 0;
            $('table.js-table-desktop tbody .hours .part-time:not(:last-child)').each(function (index, item) {
                quantityValue = $(this).parent().parent().find($('.quantity .onlyNumber'));
                var hours = parseFloat($(this).html())
                var hoursInc = parseFloat($(this).siblings('.placeholder').html());

                hoursInc = hours * (quantityValue.val())
                $(this).siblings('.hours-placeholder').text(hoursInc);
                if (quantityValue.val() >= 1) {
                    $(this).siblings('.hours-placeholder').css('display', 'inline-block');
                    $(this).css('display', 'none');
                }
                if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                    hours = 0;
                    quantityValue.val(0);
                    $(this).siblings('.hours-placeholder').css('display', 'none');
                }
                totalHours += hoursInc;
            })

            var totalSprintCost = 0;
            $('table.js-table-desktop tbody .sprint-cost .part-time').each(function (index, item) {
                quantityValue = $(this).parent().parent().parent().find($('.quantity .onlyNumber'));
                var sprintsStr = $(this).html();
                var sprints = parseFloat(sprintsStr.replace(/,/g, ''));
                var sprintsInc = $(this).siblings('.sprint-placeholder');
                sprintsInc = sprints * (quantityValue.val());
                $(this).siblings('.sprint-placeholder').text(sprintsInc.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }))
                if (quantityValue.val() >= 1) {
                    $(this).siblings('.sprint-placeholder').css('display', 'inline-block');
                    $(this).css('display', 'none');
                } else {
                    $(this).siblings('.sprint-placeholder').css('display', 'none');
                    $(this).css('display', 'inline-block');
                }
                if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                    sprints = 0;
                }
                totalSprintCost += sprintsInc;
            })
            var totalCost = 0;
            $('table.js-table-desktop tbody .white-row.dynamic').each(function (index, item) {
                var rateRow = $(this).find('td.hourly-rate span').html();
                var hoursRow;
                quantityValue = $(this).find($('.quantity .onlyNumber'));
                if (quantityValue.val() > 1) {
                    hoursRow = $(this).find('td.hours .hours-placeholder').html();
                } else {
                    hoursRow = $(this).find('td.hours .part-time').html();
                }
                if ($(this).hasClass('opacity-low')) {
                    hoursRow = 0;
                }
                var totalCostRow = rateRow * hoursRow * .5 * monthCount;
                totalCost += totalCostRow;
            })

            $(".white-row.breakdown-row .hours").text(totalHours + ' ' + 'Hours');
            $(".white-row.breakdown-row .breakdown-sprint-cost").text('Â£' + totalSprintCost.toLocaleString(undefined, {
                minimumFractionDigits: 2
            }));
            $(".white-row.orange-row .full-total-cost").text('Â£' + totalCost.toLocaleString(undefined, {
                minimumFractionDigits: 2
            }));
            const sprintCount = monthCount * .5;

            $(".white-row.orange-row .sprint-count").text(sprintCount + ' ' + 'Sprints');

            if ($('table.js-carousel').length && typeof $('table.js-carousel') !== 'undefined' && ($(window).width() <= 768)) {
                totalCost = 0;
                totalSprintCost = 0;
                totalHours = 0;

                $('table.js-carousel .hours .part-time').each(function (index, item) {
                    devCalcTableRowHours = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndexHours = devCalcTableRowHours.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    quantityValue = carouselDevColumns.find($('.quantity .onlyNumber')).eq(devCalcTableRowIndexHours);
                    hours = parseFloat($(this).html());
                    var hoursInc = $(this).siblings('.hours-placeholder');
                    hoursInc = hours * (quantityValue.val())
                    $(this).siblings('.hours-placeholder').text(hoursInc);
                    if (quantityValue.val() >= 1) {
                        $(this).siblings('.hours-placeholder').css('display', 'inline-block');
                        $(this).css('display', 'none');
                    }
                    if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                        hours = 0;
                        quantityValue.val(0);
                        $(this).siblings('.hours-placeholder').css('display', 'none');
                    }
                    totalHours += hoursInc;
                })
                $('table.js-carousel .sprint-cost .part-time').each(function (index, item) {
                    devCalcTableRowSprints = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndexSprints = devCalcTableRowSprints.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    quantityValue = carouselDevColumns.find($('.quantity .onlyNumber')).eq(devCalcTableRowIndexSprints);
                    var sprintsStr = $(this).html();
                    var sprints = parseFloat(sprintsStr.replace(/,/g, ''));
                    var sprintsInc = $(this).siblings('.sprint-placeholder');
                    sprintsInc = sprints * (quantityValue.val());
                    $(this).siblings('.sprint-placeholder').text(sprintsInc.toLocaleString(undefined, {
                        minimumFractionDigits: 2
                    }))

                    if (quantityValue.val() > 1) {
                        $(this).siblings('.sprint-placeholder').css('display', 'inline-block');
                        $(this).css('display', 'none');
                    } else {
                        $(this).siblings('.sprint-placeholder').css('display', 'none');
                        $(this).css('display', 'inline-block');
                    }
                    if ($(this).closest('.white-row.dynamic').hasClass('opacity-low')) {
                        sprints = 0;
                    }
                    totalSprintCost += sprintsInc;
                })
                $('table.js-carousel .white-row.dynamic').each(function (index, item) {
                    devCalcTableRow = $(this).closest('tr.white-row.opacity');
                    devCalcTableRowIndex = devCalcTableRow.index();
                    carouselDevColumns = $('.owl-carousel.development table.js-carousel')
                    rateRow = carouselDevColumns.find('.hourly-rate span').eq(devCalcTableRowIndex).html();
                    hoursRow = parseFloat(carouselDevColumns.find('.hours .hours-placeholder').eq(devCalcTableRowIndex).html());
                    if ($(this).hasClass('opacity-low')) {
                        hoursRow = 0;
                    }
                    var totalCostRow = ((rateRow * hoursRow) * .5 * monthCount) / 5;
                    totalCost += totalCostRow;
                })
                $(".white-row.breakdown-row .hours").text(totalHours + ' ' + 'Hours');
                $(".white-row.breakdown-row .breakdown-sprint-cost").text('Â£' + totalSprintCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }));
                $(".white-row.orange-row .full-total-cost").text('Â£' + totalCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }));
                const sprintCount = monthCount * .5;
                $(".white-row.orange-row .sprint-count").text(sprintCount + ' ' + 'Sprints');

            }

        }
    })

    //Estimation Tool ************************************************************************************************************


    $("#native-cross input[type=radio]").on('click', function (e) {
        $this = e.target;
        if ($($this).is(':checked')) {
            $("#native-cross input[type=radio]").removeAttr('checked');
            $($this).attr('checked', 'checked');
        }
        calculateEstTool2();
    })
    $("#android-ios input[type=radio]").on('click', function (e) {
        $this = e.target;
        if ($($this).is(':checked')) {
            $("#android-ios input[type=radio]").removeAttr('checked');
            $($this).attr('checked', 'checked');
        }
        calculateEstTool2();
    })

    $("#mvp-everything input[type=radio]").on('click', function (e) {
        $this = e.target;
        if ($($this).is(':checked')) {
            $("#mvp-everything input[type=radio]").removeAttr('checked');
            $($this).attr('checked', 'checked');
        }
        calculateEstTool2();
    })
    // $("#app-website input[type=radio]").on('click', function (e) {
    //   $this = e.target;
    //   if ($($this).is(':checked')) {
    //     $("#app-website input[type=radio]").removeAttr('checked');
    //     $($this).attr('checked', 'checked');

    //   }
    //   calculateEstTool2();
    // })
    $("#app").on('click', function (e) {
        $this = e.target;
        $("#website").removeAttr('checked');
        $($this).attr('checked', 'checked');
        calculateEstTool2();
    })
    $("#website").on('click', function (e) {
        $this = e.target;
        $("#app").removeAttr('checked');
        $($this).attr('checked', 'checked');
        if ($($this).is(':checked')) {
            $("#native-cross").removeAttr('checked');
            $('native').prop('checked', true);
            $("#android-ios").removeAttr('checked');
            $('iOS').attr('checked', true);
        }
        calculateEstTool2();
    })

    // $(".tool-check~.est-image-container .x-icon-img").click(function () {
    //   console.log('this')
    //   $(this).closest('.platform-box').toggleClass('checked');
    //   $(this).closest('input[type="checkbox"]').attr('checked', function (i, attr) {
    //     return attr == null ? 'checked' : null;
    //   });
    //   calculateEstTool2();
    // })
    $("#sign-up~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.sign-up").toggleClass('checked');
        $("#sign-up").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#a-v~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.a-v").toggleClass('checked');
        $("#a-v").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#bookings~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.bookings").toggleClass('checked');
        $("#bookings").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#payments~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.payments").toggleClass('checked');
        $("#payments").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#dashboard~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.dashboard").toggleClass('checked');
        $("#dashboard").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#search~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.search").toggleClass('checked');
        $("#search").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#inventory~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.inventory").toggleClass('checked');
        $("#inventory").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#cart~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.cart").toggleClass('checked');
        $("#cart").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#feed~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.feed").toggleClass('checked');
        $("#feed").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#calendar~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.calendar").toggleClass('checked');
        $("#calendar").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#messaging~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.messaging").toggleClass('checked');
        $("#messaging").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#cms~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.cms").toggleClass('checked');
        $("#cms").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#tagging~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.tagging").toggleClass('checked');
        $("#tagging").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#map~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.map").toggleClass('checked');
        $("#map").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#subscription~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.subscription").toggleClass('checked');
        $("#subscription").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#moderation~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.moderation").toggleClass('checked');
        $("#moderation").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $("#user~.est-image-container .x-icon-img").click(function () {
        $(".platform-box.user").toggleClass('checked');
        $("#user").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
        calculateEstTool2();
    })
    $(".tool-check-privacy").click(function () {
        $(".tool-check-privacy").toggleClass('checked');
        $("#tool-privacy").attr('checked', function (i, attr) {
            return attr == null ? 'checked' : null;
        });
    })
    $(".estimation-tool .dropdown-menu .dropdown-item").click(function () {
        $('.dropdown-toggle').html($(this).text())
        $('.dropdown-item').removeClass('checked');
        $('.estimation-tool .dropdown-item').removeClass('ticked');
        $('.estimation-tool .dropdown-item').removeClass('js-afi-ticked');
        $(this).toggleClass('checked');
        calculateEstTool2();
    });

    // platform type for mobile
    if ($(window).width() < 479) {
        $("#sign-up~.platform-box-title").click(function () {
            $(".platform-box.sign-up").toggleClass('checked');
            $("#sign-up").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#a-v~.platform-box-title").click(function () {
            $(".platform-box.a-v").toggleClass('checked');
            $("#a-v").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#bookings~.platform-box-title").click(function () {
            $(".platform-box.bookings").toggleClass('checked');
            $("#bookings").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#payments~.platform-box-title").click(function () {
            $(".platform-box.payments").toggleClass('checked');
            $("#payments").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#dashboard~.platform-box-title").click(function () {
            $(".platform-box.dashboard").toggleClass('checked');
            $("#dashboard").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#search~.platform-box-title").click(function () {
            $(".platform-box.search").toggleClass('checked');
            $("#search").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#inventory~.platform-box-title").click(function () {
            $(".platform-box.inventory").toggleClass('checked');
            $("#inventory").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#cart~.platform-box-title").click(function () {
            $(".platform-box.cart").toggleClass('checked');
            $("#cart").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#feed~.platform-box-title").click(function () {
            $(".platform-box.feed").toggleClass('checked');
            $("#feed").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#calendar~.platform-box-title").click(function () {
            $(".platform-box.calendar").toggleClass('checked');
            $("#calendar").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#messaging~.platform-box-title").click(function () {
            $(".platform-box.messaging").toggleClass('checked');
            $("#messaging").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#cms~.platform-box-title").click(function () {
            $(".platform-box.cms").toggleClass('checked');
            $("#cms").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#tagging~.platform-box-title").click(function () {
            $(".platform-box.tagging").toggleClass('checked');
            $("#tagging").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#map~.platform-box-title").click(function () {
            $(".platform-box.map").toggleClass('checked');
            $("#map").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#subscription~.platform-box-title").click(function () {
            $(".platform-box.subscription").toggleClass('checked');
            $("#subscription").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#moderation~.platform-box-title").click(function () {
            $(".platform-box.moderation").toggleClass('checked');
            $("#moderation").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
        $("#user~.platform-box-title").click(function () {
            $(".platform-box.user").toggleClass('checked');
            $("#user").attr('checked', function (i, attr) {
                return attr == null ? 'checked' : null;
            });
            calculateEstTool2()
        })
    }

    // $(".estimation-tool input[type=radio], .estimation-tool input[type=checkbox]").on('change input', function (e) {
    //   calculateEstTool2();
    // });

    $('#dropdown-tool').on('click', function (e) {

        $(".platform-box").removeClass('checked');
        $(".platform-box input[type=checkbox]").attr('checked', false);
        $(".platform-box.a-v").addClass('checked');
        $('#a-v').attr('checked', true);
        $(".platform-box.calendar").addClass('checked');
        $('#calendar').attr('checked', true);
        $(".platform-box.map").addClass('checked');
        $('#map').attr('checked', true);
        $(".platform-box.messaging").addClass('checked');
        $('#messaging').attr('checked', true);
        calculateEstTool2()
    })

    $('#dropdown-commerce').on('click', function (e) {
        $(".platform-box").removeClass('checked');
        $(".platform-box input[type=checkbox]").attr('checked', false);
        $(".platform-box.tagging").addClass('checked');
        $('#tagging').attr('checked', true);
        $(".platform-box.search").addClass('checked');
        $('#search').attr('checked', true);
        $(".platform-box.inventory").addClass('checked');
        $('#inventory').attr('checked', true);
        $(".platform-box.messaging").addClass('checked');
        $('#messaging').attr('checked', true);
        $(".platform-box.subscription").addClass('checked');
        $('#subscription').attr('checked', true);
        $(".platform-box.payments").addClass('checked');
        $('#payments').attr('checked', true);
        $(".platform-box.cart").addClass('checked');
        $('#cart').attr('checked', true);
        $(".platform-box.cms").addClass('checked');
        $('#cms').attr('checked', true);
        $(".platform-box.user").addClass('checked');
        $('#user').attr('checked', true);
        calculateEstTool2()
    })

    $('#dropdown-services').on('click', function (e) {
        $(".platform-box").removeClass('checked');
        $(".platform-box input[type=checkbox]").attr('checked', false);
        $(".platform-box.sign-up").addClass('checked');
        $('#sign-up').attr('checked', true);
        $(".platform-box.feed").addClass('checked');
        $('#feed').attr('checked', true);
        $(".platform-box.search").addClass('checked');
        $('#search').attr('checked', true);
        $(".platform-box.calendar").addClass('checked');
        $('#calendar').attr('checked', true);
        $(".platform-box.map").addClass('checked');
        $('#map').attr('checked', true);
        $(".platform-box.bookings").addClass('checked');
        $('#bookings').attr('checked', true);
        $(".platform-box.inventory").addClass('checked');
        $('#inventory').attr('checked', true);
        $(".platform-box.messaging").addClass('checked');
        $('#messaging').attr('checked', true);
        $(".platform-box.subscription").addClass('checked');
        $('#subscription').attr('checked', true);
        $(".platform-box.payments").addClass('checked');
        $('#payments').attr('checked', true);
        $(".platform-box.cart").addClass('checked');
        $('#cart').attr('checked', true);
        $(".platform-box.cms").addClass('checked');
        $('#cms').attr('checked', true);
        $(".platform-box.moderation").addClass('checked');
        $('#moderation').attr('checked', true);
        $(".platform-box.user").addClass('checked');
        $('#user').attr('checked', true);
        calculateEstTool2()
    })

    $('#dropdown-social').on('click', function (e) {
        $(".platform-box").removeClass('checked');
        $(".platform-box input[type=checkbox]").attr('checked', false);
        $(".platform-box.sign-up").addClass('checked');
        $('#sign-up').attr('checked', true);
        $(".platform-box.feed").addClass('checked');
        $('#feed').attr('checked', true);
        $(".platform-box.tagging").addClass('checked');
        $('#tagging').attr('checked', true);
        $(".platform-box.a-v").addClass('checked');
        $('#a-v').attr('checked', true);
        $(".platform-box.search").addClass('checked');
        $('#search').attr('checked', true);
        $(".platform-box.calendar").addClass('checked');
        $('#calendar').attr('checked', true);
        $(".platform-box.map").addClass('checked');
        $('#map').attr('checked', true);
        $(".platform-box.messaging").addClass('checked');
        $('#messaging').attr('checked', true);
        $(".platform-box.subscription").addClass('checked');
        $('#subscription').attr('checked', true);
        $(".platform-box.moderation").addClass('checked');
        $('#moderation').attr('checked', true);
        calculateEstTool2()
    })

    $('#dropdown-marketplace').on('click', function (e) {
        $(".platform-box").removeClass('checked');
        $(".platform-box input[type=checkbox]").attr('checked', false);
        $(".platform-box.sign-up").addClass('checked');
        $('#sign-up').attr('checked', true);
        $(".platform-box.dashboard").addClass('checked');
        $('#dashboard').attr('checked', true);
        $(".platform-box.feed").addClass('checked');
        $('#feed').attr('checked', true);
        $(".platform-box.tagging").addClass('checked');
        $('#tagging').attr('checked', true);
        $(".platform-box.a-v").addClass('checked');
        $('#a-v').attr('checked', true);
        $(".platform-box.search").addClass('checked');
        $('#search').attr('checked', true);
        $(".platform-box.map").addClass('checked');
        $('#map').attr('checked', true);
        $(".platform-box.bookings").addClass('checked');
        $('#bookings').attr('checked', true);
        $(".platform-box.inventory").addClass('checked');
        $('#inventory').attr('checked', true);
        $(".platform-box.messaging").addClass('checked');
        $('#messaging').attr('checked', true);
        $(".platform-box.subscription").addClass('checked');
        $('#subscription').attr('checked', true);
        $(".platform-box.payments").addClass('checked');
        $('#payments').attr('checked', true);
        $(".platform-box.cart").addClass('checked');
        $('#cart').attr('checked', true);
        $(".platform-box.cms").addClass('checked');
        $('#cms').attr('checked', true);
        $(".platform-box.moderation").addClass('checked');
        $('#moderation').attr('checked', true);
        $(".platform-box.user").addClass('checked');
        $('#user').attr('checked', true);
        calculateEstTool2()
    })

    $('#dropdown-media').on('click', function (e) {
        $(".platform-box").removeClass('checked');
        $(".platform-box input[type=checkbox]").attr('checked', false);
        $(".platform-box.sign-up").addClass('checked');
        $('#sign-up').attr('checked', true);
        $(".platform-box.dashboard").addClass('checked');
        $('#dashboard').attr('checked', true);
        $(".platform-box.feed").addClass('checked');
        $('#feed').attr('checked', true);
        $(".platform-box.tagging").addClass('checked');
        $('#tagging').attr('checked', true);
        $(".platform-box.a-v").addClass('checked');
        $('#a-v').attr('checked', true);
        $(".platform-box.search").addClass('checked');
        $('#search').attr('checked', true);
        $(".platform-box.messaging").addClass('checked');
        $('#messaging').attr('checked', true);
        $(".platform-box.subscription").addClass('checked');
        $('#subscription').attr('checked', true);
        $(".platform-box.payments").addClass('checked');
        $('#payments').attr('checked', true);
        $(".platform-box.cart").addClass('checked');
        $('#cart').attr('checked', true);
        $(".platform-box.cms").addClass('checked');
        $('#cms').attr('checked', true);
        $(".platform-box.moderation").addClass('checked');
        $('#moderation').attr('checked', true);
        $(".platform-box.user").addClass('checked');
        $('#user').attr('checked', true);
        calculateEstTool2()
    })

    $('#dropdown-game').on('click', function (e) {
        $(".platform-box").removeClass('checked');
        $(".platform-box input[type=checkbox]").attr('checked', false);
        $(".platform-box.sign-up").addClass('checked');
        $('#sign-up').attr('checked', true);
        $(".platform-box.dashboard").addClass('checked');
        $('#dashboard').attr('checked', true);
        $(".platform-box.feed").addClass('checked');
        $('#feed').attr('checked', true);
        $(".platform-box.a-v").addClass('checked');
        $('#a-v').attr('checked', true);
        $(".platform-box.map").addClass('checked');
        $('#map').attr('checked', true);
        $(".platform-box.messaging").addClass('checked');
        $('#messaging').attr('checked', true);
        $(".platform-box.subscription").addClass('checked');
        $('#subscription').attr('checked', true);
        $(".platform-box.payments").addClass('checked');
        $('#payments').attr('checked', true);
        $(".platform-box.cms").addClass('checked');
        $('#cms').attr('checked', true);
        $(".platform-box.moderation").addClass('checked');
        $('#moderation').attr('checked', true);
        calculateEstTool2()
    })

    $('#dropdown-banking').on('click', function (e) {
        $(".platform-box").removeClass('checked');
        $(".platform-box input[type=checkbox]").attr('checked', false);
        $(".platform-box.sign-up").addClass('checked');
        $('#sign-up').attr('checked', true);
        $(".platform-box.dashboard").addClass('checked');
        $('#dashboard').attr('checked', true);
        $(".platform-box.tagging").addClass('checked');
        $('#tagging').attr('checked', true);
        $(".platform-box.search").addClass('checked');
        $('#search').attr('checked', true);
        $(".platform-box.calendar").addClass('checked');
        $('#calendar').attr('checked', true);
        $(".platform-box.messaging").addClass('checked');
        $('#messaging').attr('checked', true);
        $(".platform-box.payments").addClass('checked');
        $('#payments').attr('checked', true);
        calculateEstTool2()
    })

    //


    //Add strike through to the 'A happy ending beginning' block headline
    $('#heb-title').each(function () {
        var words = $(this).text().split(' ');
        $(this).empty().html(function () {
            for (i = 0; i < words.length; i++) {
                if (i == 0) {
                    $(this).append(words[i]);
                } else if (i == words.length - 2) {
                    $(this).append(' ' + '<span>' + words[i] + '</span>');
                } else {
                    $(this).append(' ' + words[i]);
                }
            }
        });
    });

    // Covid modal send email
    if ($('button.covid-modal-button').length && typeof $('button.covid-modal-button') !== 'undefined') {
        $('button.covid-modal-button').on('click', function(e) {
            var download_covid = $(this);
            if (!download_covid.length) {
                return false;
            }
            // console.log(download_covid)
            var covid_modal_name = $('input.covid-modal-input.name').val();
            var covid_modal_email = $('input.covid-modal-input.email').val();
            var covid_modal_company = $('input.covid-modal-input.company').val();
            var covid_modal_privacy = $('#covid-accept').attr('checked');

            var covid_modal_valid = true;

            if (!covid_modal_name.length) {
                $('input.covid-modal-input.name').after("<span class='error'>Entry required to progress</span>").addClass('red');
                covid_modal_valid = false;
            } else {
                $('input.covid-modal-input.name').removeClass('red');
                $('.wrapper-name .error').fadeOut();
            }
            if (!covid_modal_email.length || !dzy_is_valid_email_address(covid_modal_email)) {
                $('input.covid-modal-input.email').after("<span class='error right'>Entry required to progress</span>").addClass('red');
                covid_modal_valid = false;
            } else {
                $('input.covid-modal-input.email').removeClass('red');
                $('.wrapper-email .error').fadeOut();
            }

            if (!covid_modal_company.length) {
                $('input.covid-modal-input.company').after("<span class='error'>Entry required to progress</span>").addClass('red');
                covid_modal_valid = false;
            } else {
                $('input.covid-modal-input.company').removeClass('red');
                $('.wrapper-company .error').fadeOut();
            }

            if (!$('#covid-accept').hasClass('checked')) {
                $('#covid-accept').after("<span class='error-check'>You must accept the terms and conditions.</span>");
                covid_modal_valid = false;
            } else {
                $(".covid-ebook .error-check").fadeOut();
            }

            if (!covid_modal_valid) {
                $('.covid-modal-button.submit').removeClass('disabled-covid');
                $('.covid-modal-button.submit').prop('disabled', false);
                return false;
            } else {
                $('.covid-modal-button.submit').prop('disabled', true);
                $('.covid-modal-button.submit').addClass('disabled-covid');
                $('.covid-ebook .accept').after("<p class='covid-thank'>Thank you, your download will start soon!</p>");
            }
            //Gather data for Pipedrive, based on data used for sending the e-mail: covid_modal_name, covid_modal_email, covid_modal_company
            var covid_ebook_name = covid_modal_name;
            var covid_ebook_email = covid_modal_email;
            var covid_ebook_company = covid_modal_company;
            if ( dzy_get_cookie('deazy_gclid') ) {
                var covid_ebook_deazy_gclid = dzy_get_cookie('deazy_gclid');
            } else {
                var covid_ebook_deazy_gclid = '';
            }

            //send the e-mail
            $.ajax({
                url: ajax_object.ajaxurl,
                method: 'POST',
                dataType: 'JSON',
                data: {
                    action: 'DzyCovid19SendEmail',
                    covid_modal_name: covid_modal_name,
                    covid_modal_email: covid_modal_email,
                    covid_modal_company: covid_modal_company
                },
                cache: false,
                success: function (response) {
                    $('.covid-modal-button.submit').prop('disabled', true);
                    $('.covid-modal-button.submit').addClass('disabled-covid');


                    //console.log('covid modal email success', response);
                    $('a#js-covid-dwnl')[0].click();
                },
                error: function (response) {
                    //console.log('covid modal email error', response);
                }
            });

            //send data to Pipedrive
            $.ajax({
                url: ajax_object.ajaxurl,
                method: 'POST',
                dataType: 'JSON',
                data: {
                    action: 'DzyCovid19SendPipedrive',
                    covid_ebook_name: covid_ebook_name,
                    covid_ebook_email: covid_ebook_email,
                    covid_ebook_company: covid_ebook_company,
                    covid_ebook_deazy_gclid: covid_ebook_deazy_gclid
                },
                cache: false,
                success: function (response) {
                    //console.log('covid ebook pipedrive success', response);
                },
                error: function (response) {
                    //console.log('covid ebook pipedrive error', response);
                }
            });

        });
    }

    /**
     * Blog Post Article with Download CTA Box modal - send e-mail to Deazy & data into Pipedrive - START
     */
    if ( $('button.post-cta-modal-button').length && typeof $('button.post-cta-modal-button') !== 'undefined' ) {
        $('button.post-cta-modal-button').on( 'click', function(e) {

            console.clear();

            var post_cta_download = $(this);

            if ( !post_cta_download.length || post_cta_download === 'undefined' ) {
                return false;
            }

            var post_cta_modal_name             = $('input.post-cta-modal-input.name');
            var post_cta_modal_name_value       = $('input.post-cta-modal-input.name').val();
            var post_cta_modal_email            = $('input.post-cta-modal-input.email');
            var post_cta_modal_email_value      = $('input.post-cta-modal-input.email').val();
            var post_cta_modal_company          = $('input.post-cta-modal-input.company');
            var post_cta_modal_company_value    = $('input.post-cta-modal-input.company').val();

            var post_cta_modal_valid            = true;

            if ( !post_cta_modal_name_value.length ) {
                post_cta_modal_name.addClass('red');
                $('.wrapper-name .error').html('Entry required to progress').show();
                post_cta_modal_valid = false;
            } else {
                post_cta_modal_name.removeClass('red');
                $('.wrapper-name .error').fadeOut();
            }

            if ( !post_cta_modal_email_value.length /*|| !dzy_is_valid_email_address(post_cta_modal_email_value) */) {
                post_cta_modal_email.addClass('red');
                $('.wrapper-email .error').html('Entry required to progress').show();
                post_cta_modal_valid = false;
            }  else if ( post_cta_modal_email_value.length && !dzy_is_valid_email_address(post_cta_modal_email_value) ) {
                post_cta_modal_email.addClass('red');
                post_cta_modal_valid = false;
                $('.wrapper-email .error').addClass('invalid');
                $('.wrapper-email .error').html('Invalid email address!').show();
            } else {
                post_cta_modal_email.removeClass('red');
                $('.wrapper-email .error').fadeOut();
            }

            if ( !post_cta_modal_company_value.length ) {
                post_cta_modal_company.addClass('red');
                $('.wrapper-company .error').html('Entry required to progress').show();
                post_cta_modal_valid = false;
            } else {
                post_cta_modal_company.removeClass('red');
                $('.wrapper-company .error').fadeOut();
            }

            if ( !$('#post-cta-accept').hasClass('checked') ) {
                $('.post-cta-accept .error-check').html('You must accept the terms and conditions.').show();
                post_cta_modal_valid = false;
            } else {
                $(".post-cta-modal .error-check").fadeOut();
            }

            if ( !post_cta_modal_valid ) {
                $('.post-cta-modal-button.submit').prop('disabled', false);
                $('.post-cta-modal-button.submit').removeClass('disabled-post-cta');
                return false;
            } else {
                $('.post-cta-modal-button.submit').prop('disabled', true);
                $('.post-cta-modal-button.submit').addClass('disabled-post-cta');
                $('.post-cta-modal .accept').html('Thank you, your download will start soon!').show();
            }

            //Gather data for Pipedrive, based on data used for sending the e-mail: post_cta_modal_name_value, post_cta_modal_email_value, post_cta_modal_company_value
            var post_cta_modal_user_name    = post_cta_modal_name_value;
            var post_cta_modal_user_email   = post_cta_modal_email_value;
            var post_cta_modal_user_company = post_cta_modal_company_value;
            if ( dzy_get_cookie('deazy_gclid') ) {
                var post_cta_modal_deazy_gclid = dzy_get_cookie('deazy_gclid');
            } else {
                var post_cta_modal_deazy_gclid = '';
            }
            var post_cta_modal_data_id      = $('.post-cta-modal #js-post-cta').data('post-cta');

            if ( post_cta_modal_data_id === 'undefined' ) {
                post_cta_modal_data_id = 0;
            }

            //send the e-mail to Deazy
            $.ajax({
                url: ajax_object.ajaxurl,
                method: 'POST',
                dataType: 'JSON',
                data: {
                    action: 'DzyPostCtaModalSendEmail',
                    post_cta_modal_name_value: post_cta_modal_name_value,
                    post_cta_modal_email_value: post_cta_modal_email_value,
                    post_cta_modal_company_value: post_cta_modal_company_value,
                    post_cta_modal_data_id: post_cta_modal_data_id
                },
                cache: false,
                success: function (response) {
                    $('.post-cta-modal-button.submit').prop('disabled', true);
                    $('.post-cta-modal-button.submit').addClass('disabled-post-cta');

                    //console.log('post cta modal email success', response);
                    $('a#js-post-cta-dwnl')[0].click();
                    if ( $('a#js-post-cta-redir').length && typeof $('a#js-post-cta-redir') !== 'undefined' ) {
                        window.setTimeout( function(){ window.location.href = $('a#js-post-cta-redir')[0].href; }, 1500 );
                    }
                },
                error: function (response) {
                    //console.log('post cta modal email error', response);
                }
            });

            //send data to Pipedrive
            $.ajax({
                url: ajax_object.ajaxurl,
                method: 'POST',
                dataType: 'JSON',
                data: {
                    action: 'DzyPostCtaModalSendPipedrive',
                    post_cta_modal_user_name: post_cta_modal_user_name,
                    post_cta_modal_user_email: post_cta_modal_user_email,
                    post_cta_modal_user_company: post_cta_modal_user_company,
                    post_cta_modal_deazy_gclid: post_cta_modal_deazy_gclid,
                    post_cta_modal_data_id: post_cta_modal_data_id
                },
                cache: false,
                success: function (response) {
                    //console.log('post cta file pipedrive success', response);
                },
                error: function (response) {
                    //console.log('post cta file pipedrive error', response);
                }
            });

        } );
    }
    //Blog Post Article with Download CTA Box modal - send e-mail to Deazy & data into Pipedrive - END

    /**
     * Estimation Tool - send e-mail to Deazy & data to Pipedrive - START
     */
    if ( $('button.get-estimate-btn').length && typeof $('button.get-estimate-btn') !== 'undefined' ) {

        $('button.get-estimate-btn').on('click', function (e) {
            var get_estimate_btn = $(this);
            // e.preventDefault();

            //console.clear();

            var top_options = '';
            var featured_platform = '';
            var user_email = $('input.get-estimate-email').val();
            var user_phone = $('input.get-estimate-phone').val();
            var estimation_ballpark = '';
            var estimation_data_pd = [];
            var estimation_data_valid = true;

            //don't spam with e-mails after the 1st click on the button
            if (!get_estimate_btn.length) {
                return false;
            }

            //if given e-mail address is invalid, then set it to empty string and don't send the e-mail
            if ( !dzy_is_valid_email_address( user_email ) ) {
                $('.estimator-terms-error').remove();
                user_email = '';
                $('.email-text').append("<span class='estimator-terms-error email'>Please add your contact details and we'll send across your Deazy estimate!</span>");
                $('.get-estimate-email').addClass('red');
                estimation_data_valid = false;
                return false;
            } else {
                $('.estimator-terms-error').remove();
                $('.get-estimate-email').removeClass('red');
            }
            if ( !dzy_is_valid_phone_number( user_phone ) ) {
                $('.estimator-terms-error').remove();
                user_phone = '';
                $('.email-text').append("<span class='estimator-terms-error phone'>Please add your contact details and we'll send across your Deazy estimate!</span>");
                $('.get-estimate-phone').addClass('red');
                estimation_data_valid = false;
                return false;
            } else {
                $('.estimator-terms-error').remove();
                $('.get-estimate-phone').removeClass('red');
            }
            if (!$('.tool-check-privacy').hasClass('checked')) {
                $('.estimator-terms-error').hide();
                $('.email-text').append("<span class='estimator-terms-error'>You must accept the terms and conditions before sending your message.</span>");
                estimation_data_valid = false;
                return false;
            } else {
                $('.estimator-terms-error').hide();
            }
            if(estimation_data_valid == true) {
                $(this).css("width", "auto");
                $(this).html("Your estimate is on it's way!");
            }

            //build data for Pipedrive
            estimation_data_pd.push({
                user_email: user_email,
                user_phone: user_phone
            });

            //gather data from the top options 4 inputs
            $("input[type=radio]:checked").each(function (index) {
                var selected_item = $(this);

                if (selected_item.is(":visible")) {

                    if (selected_item.parent('label').next('p').length) {
                        var selected_item_text = selected_item.parent('label').next('p').text();
                    } else {
                        var selected_item_text = selected_item.attr('id');
                        selected_item_text = dzy_capitalize_words_string(selected_item_text);
                    }
                    //console.log('input radio checked', selected_item_text);

                    //get the option title
                    var selected_option_title = selected_item.closest('div.options-wrapper').parent('div').prev('p.top-options-title');
                    if (selected_option_title.length) {
                        var selected_option_title_text = selected_option_title.text().replace('?', '');
                        top_options += selected_option_title_text + ': ' + selected_item_text + "<br />";
                    } else {
                        top_options += selected_item_text + "<br />";
                    }

                    //build data for Pipedrive
                    if (index == 0) {
                        estimation_data_pd.push({
                            type_of_app: selected_item_text
                        });
                    }
                    if (index == 1) {
                        estimation_data_pd.push({
                            scope_level: selected_item_text
                        });
                    }
                    if (index == 2) {
                        estimation_data_pd.push({
                            technical_approach: selected_item_text
                        });
                    }
                    if (index == 3) {
                        estimation_data_pd.push({
                            type_of_platform: selected_item_text
                        });
                    }
                } //if is visible - end

            });

            //gather data from the Category dropdown
            $("span.dropdown-item.checked").each(function () {
                var selected_item = $(this);

                if (selected_item.length) {
                    var selected_item_text = selected_item.text();
                } else {
                    var selected_item_text = $("button#social-network").text();
                }
                //console.log('span dropdown-item checked', selected_item_text);

                //get the option title
                var selected_option_title = selected_item.closest('div.dropdown').prev('p.top-options-title');
                if (selected_option_title.length) {
                    var selected_option_title_text = selected_option_title.text();
                    top_options += selected_option_title_text + ': ' + selected_item_text + "<br />";
                } else {
                    top_options += selected_item_text + "<br />";
                }

                //build data for Pipedrive
                estimation_data_pd.push({
                    app_category: selected_item_text
                });

            });

            //console.log(top_options);

            //gather data from the Featured/Type of Platform inputs
            $("input[type=checkbox]").each(function () {
                var selected_item = $(this);

                if (selected_item.attr('checked') == 'checked' && selected_item.attr('name') != 'privacy') {
                    if (selected_item.next('p.platform-box-title').length) {
                        var selected_item_text = selected_item.next('p.platform-box-title').text();
                    } else {
                        var selected_item_text = selected_item.attr('id');
                        selected_item_text = dzy_capitalize_words_string(selected_item_text).replace('-', ' ');
                    }
                    //console.log('div platform-box checked', selected_item_text);

                    featured_platform += (featured_platform.length ? ", " : "") + selected_item_text;

                } //checkbox other than privacy - end

            });

            //build data for Pipedrive
            estimation_data_pd.push({
                cool_features: featured_platform
            });

            //console.log(featured_platform);

            //gather data from the Estimation ballpark
            if ($('div.estimator-table').length) {
                var estimator_table = $('div.estimator-table');

                var table_1 = estimator_table.find("table:nth-child(1)");
                var table_2 = estimator_table.find("table:nth-child(2)");
                var table_3 = estimator_table.find("table:nth-child(3)");

                var est_row_1 = table_1.find('tbody').find('tr:nth-child(1)').find('td:nth-child(1)').text() + ': ' + table_2.find('tbody').find('tr:nth-child(1)').find('td:nth-child(1)').text() + ' - ' + table_3.find('tbody').find('tr:nth-child(1)').find('td:nth-child(1)').text();
                var est_row_2 = table_1.find('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').text() + ': ' + table_2.find('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').text() + ' - ' + table_3.find('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').text();
                var est_row_3 = table_1.find('tbody').find('tr:nth-child(3)').find('td:nth-child(1)').text() + ': ' + table_2.find('tbody').find('tr:nth-child(3)').find('td:nth-child(1)').text() + ' - ' + table_3.find('tbody').find('tr:nth-child(3)').find('td:nth-child(1)').text();

                estimation_ballpark += est_row_1 + "<br/>" + est_row_2 + "<br />" + est_row_3;

                //build data for Pipedrive
                estimation_data_pd.push({
                    ballpark_estimation_base_hours: table_2.find('tbody').find('tr:nth-child(1)').find('td:nth-child(1)').text() + ' - ' + table_3.find('tbody').find('tr:nth-child(1)').find('td:nth-child(1)').text()
                });
                estimation_data_pd.push({
                    ballpark_estimation_weeks: table_2.find('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').text() + ' - ' + table_3.find('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').text()
                });
                estimation_data_pd.push({
                    ballpark_estimation_cost: table_2.find('tbody').find('tr:nth-child(3)').find('td:nth-child(1)').text() + ' - ' + table_3.find('tbody').find('tr:nth-child(3)').find('td:nth-child(1)').text()
                });
            }

            if ( dzy_get_cookie('deazy_gclid') ) {
                var etpd_deazy_gclid = dzy_get_cookie('deazy_gclid');
            } else {
                var etpd_deazy_gclid = '';
            }
            estimation_data_pd.push({
                etpd_deazy_gclid: etpd_deazy_gclid
            });

            //console.log(estimation_ballpark);

            //console.log('estimation_data_pd', estimation_data_pd);

            //send the e-mail
            $.ajax({
                url: ajax_object.ajaxurl,
                method: 'POST',
                dataType: 'JSON',
                data: {
                    action: 'DzyEstimationToolSendEmail',
                    top_options: top_options,
                    featured_platform: featured_platform,
                    user_email: user_email,
                    user_phone: user_phone,
                    //estimation_ballpark: estimation_ballpark //temporarily hidden for e-mail sending
                },

                cache: false,
                success: function( response ) {
                    // $('.estimator-table').show();
                    $('.get-estimate-btn').addClass('disabled');
                    $('.get-estimate-btn').prop('disabled', true);
                    //console.log('success get estimation e-mail', response);
                },
                error: function( response ) {
                    //console.log('error get estimation e-mail', response);
                }
            });

            //send data to Pipedrive
            $.ajax({
                url: ajax_object.ajaxurl,
                method: 'POST',
                dataType: 'JSON',
                data: {
                    action: 'DzyEstimationToolSendPipedrive',
                    estimation_data_pd: estimation_data_pd,
                    user_email: user_email
                },
                cache: false,
                success: function( response ) {
                    //console.log('success get estimation pipedrive', response);
                },
                error: function( response ) {
                    //console.log('error get estimation pipedrive', response);
                }
            });

        });

    }
    //Estimation Tool - send e-mail to Deazy & data to Pipedrive - END

});

/*
 * Contact Form 7 - Get in touch form - toggle Thank You message on submit done with success
 */
document.addEventListener( "wpcf7submit", function (event) {
    // validation_failed
    // $( 'div.wpcf7-validation-errors' )
    if ( typeof WPCF7_FID !== "undefined" && WPCF7_FID !== null && event.detail.contactFormId == WPCF7_FID.cusfid && event.detail.status == "mail_sent" ) {
        setTimeout( function () {
            var mail_sent_msg = event.detail.apiResponse.message;
            if ( !mail_sent_msg || typeof mail_sent_msg === 'undefined' ) {
                mail_sent_msg = 'Message sent!';
            }
            $(".modal-header").css("display", "none");
            $("div.wpcf7").css("display", "none");
            $("div.modal-body").append("<div class='check'></div>");
            $("div.modal-body").append("<h2 class='success-msg'>" + mail_sent_msg + "</h2>");
            $("div.modal-body").append("<button class='close-button' data-dismiss='modal' aria-label='Close' >" + "OK" + "</button>");
        });

        $("#get-in-contact").on("hidden.bs.modal", function (e) {
            $("div.wpcf7").css("display", "");
            $("div.modal-header").css("display", "");
            $("div.modal-body").find("h2.success-msg").remove();
            $("div.modal-body").find("button.close-button").remove();
            $("div.modal-body").find("div.check").remove();
            $("span.wpcf7-list-item-label").find("span.checked").removeClass("checked");
        });
    }

    //Job Submit your Application Form - display the name of the Uploaded file, after the 1st Submit
    if ( typeof WPCF7_JSYA_FID !== "undefined" && WPCF7_JSYA_FID !== null && event.detail.contactFormId == WPCF7_JSYA_FID.jsyafid ) {
        $('input.wpcf7-file.job-file').change(function() {
            var jsya_form_file = $('input.wpcf7-file.job-file').val();
            $('input.wpcf7-file.job-file').closest('p').find('span.file-name').text(dzy_get_file_name(jsya_form_file));
        });

        if ( event.detail.status == "mail_sent" ) {
            $('span.file-name').text('');
            setTimeout( function () {
                var jsya_sent_msg = event.detail.apiResponse.message;
                if ( !jsya_sent_msg || typeof jsya_sent_msg === 'undefined' ) {
                    jsya_sent_msg = 'Thank you for your application. It has been sent.';
                }
                $(".js-job-application .screen-reader-response").css("display", "none");
                $(".js-job-application form.wpcf7-form").css("display", "none");
                $(".js-job-application div.wpcf7").append("<div class='form-success'><div class='check'></div><h2 class='success-msg'>" + jsya_sent_msg + "</h2></div>");
            });
        }
    }
});

//Job Submit your Application Form - display the name of the Uploaded file, before the 1st Submit
if ( $('#job-application form.wpcf7-form').length && typeof $('#job-application form.wpcf7-form') !== 'undefined' && $('input.wpcf7-file.job-file').length && typeof $('input.wpcf7-file.job-file') !== 'undefined' ) {
    $('input.wpcf7-file.job-file').change(function() {
        var jsya_file = $('input.wpcf7-file.job-file').val();
        $('input.wpcf7-file.job-file').closest('p').find('span.file-name').text(dzy_get_file_name(jsya_file));
    });
}

/**
 * Get file name from a full path URL
 * @param file_path
 * @returns {*}
 */
function dzy_get_file_name( file_path ) {
    if ( file_path.length && typeof file_path !== 'undefined' ) {
        var parts_w = file_path.split('\\');
        var parts_l = file_path.split('/');

        if (parts_w.length > 1 && typeof parts_w !== 'undefined') {
            var result = parts_w[parts_w.length - 1];
        } else if (parts_l.lenght > 1 && typeof parts_l !== 'undefined') {
            var result = parts_l[parts_l.length - 1];
        } else {
            var result = '';
        }

        return result;
    } else {
        return '';
    }
}

/**
 * Contact Form 7 - Get in touch form - toggle Submit input availability state based on Ajax call
 * Prevent multiple submit requests
 */
$(document).ajaxStart(function (e) {
    if ($("input.wpcf7-submit:submit").length && typeof $("input.wpcf7-submit:submit") !== "undefined") {
        $("input.wpcf7-submit:submit").attr("disabled", "disabled");
        $("input.wpcf7-submit:submit").prop("disabled", true);
    }
}).ajaxStop(function (e) {
    if ($("input.wpcf7-submit:submit").length && typeof $("input.wpcf7-submit:submit") !== "undefined") {
        $("input.wpcf7-submit:submit").removeAttr("disabled");
        $("input.wpcf7-submit:submit").prop("disabled", false);
    }
});

/**
 * Contact Form 7 / Inbound Lead - integrate data into Pipedrive - START
 */
document.addEventListener( 'wpcf7mailsent', function(event) {
    if (typeof WPCF7_FID !== "undefined" && WPCF7_FID !== null && event.detail.contactFormId == WPCF7_FID.cusfid && event.detail.status == "mail_sent") {
        var contact_form_data_pd = [];
        var wpcf7_contact_form_inputs =  event.detail.inputs;

        //build data for Pipedrive
        $.each( wpcf7_contact_form_inputs, function(index) {
            if ( $(this)[0].name == 'your-name' ) {
                contact_form_data_pd.push({
                    user_name: $(this)[0].value
                });
            }
            if ( $(this)[0].name == 'your-email' ) {
                contact_form_data_pd.push({
                    user_email: $(this)[0].value
                });
            }
            if ( $(this)[0].name == 'your-subject' ) {
                contact_form_data_pd.push({
                    user_subject: $(this)[0].value
                });
            }
            if ( $(this)[0].name == 'your-message' ) {
                contact_form_data_pd.push({
                    user_message: $(this)[0].value
                });
            }
        });
        contact_form_data_pd.push({
            user_page_url: window.location.origin + window.location.pathname
        });

        if ( dzy_get_cookie('deazy_gclid') ) {
            var user_deazy_gclid = dzy_get_cookie('deazy_gclid');
        } else {
            var user_deazy_gclid = '';
        }
        contact_form_data_pd.push({
            user_deazy_gclid: user_deazy_gclid
        });

        if ( $('#get-in-contact').length && typeof $('#get-in-contact') !== 'undefined' && $('#get-in-contact').data('wpcf7pi') && typeof $('#get-in-contact').data('wpcf7pi') == 'number') {
            contact_form_data_pd.push({
                user_wpcf7pi: $('#get-in-contact').data('wpcf7pi')
            });
        }

        //console.log('contact_form_data_pd', contact_form_data_pd);

        //send data to Pipedrive
        $.ajax({
            url: ajax_object.ajaxurl,
            method: 'POST',
            dataType: 'JSON',
            data: {
                action: 'DzyContactFormSendPipedrive',
                contact_form_data_pd: contact_form_data_pd
            },
            cache: false,
            success: function( response ) {
                //console.log('success contact form pipedrive', response);
            },
            error: function( response ) {
                //console.log('error contact form pipedrive', response);
            }
        });

    }
}, false );
//Contact Form 7 / Inbound Lead - integrate data into Pipedrive - END

/**
 * Contact Form 7 - Get in touch form - clear form after submit done with success
 */
if ($("#get-in-contact").length && typeof $("#get-in-contact") !== 'undefined' && $("#get-in-contact form").length && typeof $("#get-in-contact form") !== 'undefined') {
    $("#get-in-contact").on("hidden.bs.modal", function (e) {
        //Clear message sent case
        $("div.wpcf7").css("display", "");
        $("div.modal-header").css("display", "");
        $("div.modal-body").find("h2.success-msg").remove();
        $("div.modal-body").find("button.close-button").remove();
        $("div.modal-body").find("div.check").remove();
        $("span.wpcf7-list-item-label").find("span.checked").removeClass("checked");

        //clear form after closing it
        var get_in_touch_form = $("#get-in-contact form");

        get_in_touch_form.each(function () {
            this.reset();
            $('.wpcf7-form-control', this).removeClass('wpcf7-not-valid');
            $('[aria-invalid]', this).attr('aria-invalid', 'false');
            $('.wpcf7-not-valid-tip').html('');
        });

        wpcf7.toggleSubmit(get_in_touch_form);
        wpcf7.resetCounter(get_in_touch_form);
    });
}

$(document).ready(function ($) {

    /**
   * Agency Landing Page  - Contact forms pre filled subject line - START
   */
    if ($('#js-agency-lp').length && typeof $('#js-agency-lp') !== 'undefined' &&
        (($('button[data-target="#get-in-contact"]').length && typeof $('button[data-target="#get-in-contact"]') !== 'undefined') ||
         ($('a[data-target="#get-in-contact"]').length && typeof $('a[data-target="#get-in-contact"]') !== 'undefined')
        )) {

        $('a[data-target="#get-in-contact"], button[data-target="#get-in-contact"]').on('click', function (e) {

            var agency_lp_contact_cta = $(this);
            var agency_lp_contact_cta_text = $.trim(agency_lp_contact_cta.text());
            var agency_lp_contact_form = $('div#get-in-contact form');

            //Update the Subject input with the CTA item text
            if (agency_lp_contact_form.length && typeof agency_lp_contact_form !== 'undefined') {
                var agency_lp_contact_form_input_subject = agency_lp_contact_form.find('input[name="your-subject"]');
                //but skip the Get in touch btn. in footer
                if (agency_lp_contact_form_input_subject.length && typeof agency_lp_contact_form_input_subject !== 'undefined' && agency_lp_contact_cta_text != 'Get in touch') {
                    agency_lp_contact_form_input_subject.val(agency_lp_contact_cta_text);
                }
            }

            //Clear the form data
            $("#get-in-contact").on("hidden.bs.modal", function (e) {
                agency_lp_contact_form_input_subject.val('');
            });

        });
    }
    //Agency Landing Page  - Contact forms pre filled subject line - END

});

$(document).ready(function ($) {
    /**
   * Case Studies Landing Page - Filter functionality
   */
    if (($(".dropdown-item").length && typeof $(".dropdown-item") !== 'undefined') || ($(".case-studies-color-btn button").length && typeof $(".case-studies-color-btn button") !== 'undefined') || ($("button.dropdown-toggle span.ticked").length && typeof $("button.dropdown-toggle span.ticked") !== 'undefined')) {

        $(".dropdown-item, .case-studies-color-btn button, button.dropdown-toggle span.ticked").on("click", function (e) {

            //console.clear();

            //run the logic _only_ for the Case Studies Landing Page
            if (!$(this).closest('div#js-cslp').length || typeof $(this).closest('div#js-cslp') === 'undefined') {
                return false;
            }

            //clear the Keyword Search input
            $('input#search').val('');

            var adv_filters = [];
            var adv_btn_reset = $('#js-reset-btn');

            //mark the selected filter items, from the 4 main Services and from the expanded Advanced Filter lists
            $(this).toggleClass('js-afi-ticked');

            //logic for the Advanced Filter list items
            if ($(this).is(".dropdown-item")) {

                var dropdown_item = $(this);

                //keep open the dropdown filter list
                e.stopPropagation();

                dropdown_item.toggleClass('ticked');

                var dropdown_item_text = dropdown_item.text();
                var dropdown_button = dropdown_item.parent('.dropdown-menu').parent('div.dropdown').find('.btn.dropdown-toggle');
                var dropdown_button_text = dropdown_button.text();
                var filter_ctax_raw = dropdown_item.parent('.dropdown-menu').attr('aria-labelledby').replace('-toggle', '');
                var filter_ctax_fe = filter_ctax_raw.replace('-', ' ');

                $(".js-afi-ticked").each(function () {
                    adv_filters.push($(this).data('filter'));
                });

                //Advanced Filter list head - mark it with X
                var dropdown_list_items = dropdown_item.parent('.dropdown-menu').find('.js-afi-ticked.ticked');
                if (dropdown_list_items.length) {
                    dropdown_button.find('span.ticked').show();
                } else {
                    dropdown_button.find('span.ticked').hide();
                }

                //Advanced Filter list head text toggle - it's unclear how it should behave
                /*var dropdown_item_siblings =  dropdown_item.siblings('.js-afi-ticked.ticked');
        if ( dropdown_button_text !== dropdown_item_text ) {
            if ( !dropdown_item.hasClass('js-afi-ticked ticked') ) {
                dropdown_button.text(dropdown_item_siblings[0].textContent);
            } else {
                dropdown_button.text(dropdown_item_text);
            }
        } else {
            if ( !dropdown_item.hasClass('js-afi-ticked ticked') && typeof dropdown_item_siblings[0] !== 'undefined' ) {
                dropdown_button.text(dropdown_item_siblings[0].textContent);
            } else {
                dropdown_button.text(filter_ctax_fe).css('textTransform', 'capitalize');
            }
        }*/

            }

            //logic for the 4 main Services
            if ($(this).is(".case-studies-color-btn button")) {

                $(".js-afi-ticked").each(function () {
                    adv_filters.push($(this).data('filter'));
                });

                //mark the Reset Filters / Search button if filters are collapsed
                if ($(".advanced-filter-btn[data-toggle='toggle']").hasClass('in') || $('.advanced-filter-collapse').hasClass('in')) {
                    adv_btn_reset.addClass('align-bottom-right');
                } else if (adv_btn_reset.hasClass('align-bottom-right')) {
                    adv_btn_reset.removeClass('align-bottom-right');
                }

            }

            //logic for Advanced Filter list head - click X to reset all sub-items
            if ($(this).is("button.dropdown-toggle span.ticked")) {
                var dropdown_button_reset = $(this);
                dropdown_button_reset.toggleClass('js-afi-ticked');

                var dropdown_list_to_clear = dropdown_button_reset.parent('button.dropdown-toggle').parent('.dropdown').find('.dropdown-menu').find('.js-afi-ticked.ticked');
                if (dropdown_list_to_clear.length) {
                    dropdown_list_to_clear.each(function () {
                        var item_to_clear = $(this);
                        if (item_to_clear.length && item_to_clear.hasClass('js-afi-ticked ticked')) {
                            item_to_clear.removeClass('js-afi-ticked ticked');
                        }
                    });

                    //rebuild adv_filters array
                    $(".js-afi-ticked").each(function () {
                        adv_filters.push($(this).data('filter'));
                    });

                    //remove the X from the list head
                    dropdown_button_reset.hide();
                }
            }

            //toggle the Reset Filters / Search button; both attr & data are used!
            if ($(".js-afi-ticked").length) {
                adv_btn_reset.text('Reset Filters');
                adv_btn_reset.attr('data-reset', 'filters');
                adv_btn_reset.data('reset', 'filters');
                adv_btn_reset.show();
            } else {
                adv_btn_reset.text('Reset');
                adv_btn_reset.attr('data-reset', '');
                adv_btn_reset.data('reset', '');
                adv_btn_reset.hide();
            }

            //console.log(adv_filters);

            //Persist the Advanced Filter items, as build on adv_filters - START
            var adv_filters_persist = adv_filters;

            if (adv_filters_persist.length) { //persist data
                localStorage.setItem("advFilters", JSON.stringify(adv_filters_persist));
                localStorage.setItem("advFiltersTime", new Date($.now()));
            } else { //clear persisted Advanced Filter data, if any
                dzy_clear_persisted_cs_filter_search_data(true, false);
            }

            //clear the persisted Keyword Search data also, if any
            dzy_clear_persisted_cs_filter_search_data(false, true);
            //Persist the Advanced Filter items, as build on adv_filters - END

            var filter_results_singular_text = '1 result matching your criteria:';
            var filter_results_plural_text = ' results matching your criteria:';
            var filter_results_error_text = 'No results matching your criteria.';
            var js_results_count_txt = $('#js-results-count');

            $.ajax({
                url: ajax_object.ajaxurl,
                method: 'POST',
                dataType: 'JSON',
                data: {
                    action: 'DzyAdvancedFilter',
                    adv_filters: adv_filters,
                    adv_filters_total: adv_filters.length
                },
                cache: false,
                success: function (response) {
                    //console.log('success filter', response);

                    var filter_results_data = response.data.filter_results;

                    js_results_count_txt.show();

                    if (response.success == true && adv_filters.length > 0) {


                        if (filter_results_data.found_posts > 1) {
                            js_results_count_txt.text(filter_results_data.found_posts + filter_results_plural_text);
                        } else if (filter_results_data.found_posts == 1) {
                            js_results_count_txt.text(filter_results_singular_text);
                        } else {
                            js_results_count_txt.text(filter_results_error_text);
                            show_default_cs_view_with_results_count(true);
                        }

                        if (filter_results_data.found_posts >= 1) {

                            hide_default_cs_view();

                            var results_output = '';

                            $.each(filter_results_data.listing_data, function (index, list_data) {
                                if (list_data.cs_images_count <= 1) {
                                    results_output += '<div class="tablet-desktop-result js-result-cs col-md-12 col-lg-6 col-xl-4">' +
                                        '<div class="tablet-result">' +
                                        '<div class="col-6 tablet-image">' + '<div class="wrap">' + list_data.cs_images + '</div>' + '<a href="' + list_data.cs_permalink + '" title="More about ' + list_data.cs_name + '" class="btn d-center read-more visible-xs hidden-sm hidden-md hidden-lg">Read More ></a>' + '</div>' +
                                        '<div class="col-6 result-content-box">' +
                                        '<div class="project-services">' + list_data.cs_project_services_list + '</div>' +
                                        '<h3 class="result-content-title">' + list_data.cs_name + '</h3>' +
                                        '<h4 class="result-content-subtitle">' + list_data.cs_tagline + '</h4>' +
                                        list_data.cs_facts +
                                        '<a href="' + list_data.cs_permalink + '" title="More about ' + list_data.cs_name + '" class="btn d-center read-more hidden-xs visible-f-sm visible-f-md visible-f-lg">Read More ></a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>';
                                } else {
                                    results_output += '<div class="tablet-desktop-result js-result-cs col-md-12 col-lg-6 col-xl-4">' +
                                        '<div class="tablet-result">' +
                                        '<div class="col-6 mobile tablet-image">' + '<div class="wrap">' + list_data.cs_images + '</div>' + '<a href="' + list_data.cs_permalink + '" title="More about ' + list_data.cs_name + '" class="btn d-center read-more visible-xs hidden-sm hidden-md hidden-lg">Read More ></a>' + '</div>' +
                                        '<div class="col-6 result-content-box">' +
                                        '<div class="project-services">' + list_data.cs_project_services_list + '</div>' +
                                        '<h3 class="result-content-title">' + list_data.cs_name + '</h3>' +
                                        '<h4 class="result-content-subtitle">' + list_data.cs_tagline + '</h4>' +
                                        list_data.cs_facts +
                                        '<a href="' + list_data.cs_permalink + '" title="More about ' + list_data.cs_name + '" class="btn d-center read-more hidden-xs visible-f-sm visible-f-md visible-f-lg">Read More ></a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>';
                                }
                            });

                            $('#js-results').html(results_output).addClass('row');
                        }

                    } else {
                        show_default_cs_view_with_results_count(false);
                    }
                },
                error: function (response) {
                    //console.log('error filter', response);
                    if (adv_filters.length) {
                        js_results_count_txt.show();
                        js_results_count_txt.text(filter_results_error_text);
                        show_default_cs_view_with_results_count(true);
                    }
                }
            });

        });

    } else {
        //console.log('The Advanced Filter is off!');
        show_default_cs_view_with_results_count(false);
    }

    /**
   * Case Studies Landing Page - Search functionality
   */
    if (($("input#search").length && typeof $("input#search") !== 'undefined') || ($("button#js-cs-search").length && typeof $("button#js-cs-search") !== 'undefined')) {

        //when enter key on input not empty, then trigger search button click event
        $('input#search').keypress(function (e) {
            if (e.which == 13 && ($('input#search').val().length && typeof $('input#search').val() !== 'undefined')) {
                $('button#js-cs-search').click();
            }
        });

        //on search button click event, do the search logic and list results
        $("button#js-cs-search").on("click", function (e) {

            //console.clear();

            //clear the Advanced Filter - all items, with/out collapsed lists
            hide_adv_filter_selected_items_with_collapsed(false);

            var search_keyword = $('input#search').val();
            var js_results_count_txt = $('#js-results-count');
            var adv_btn_reset = $('#js-reset-btn');

            //console.log('The Keyword Search is: ', search_keyword);

            if (search_keyword.length && typeof search_keyword !== 'undefined') {

                //show the Reset Filters / Search button; both attr & data are used!
                adv_btn_reset.text('Reset Search');
                adv_btn_reset.attr('data-reset', 'search');
                adv_btn_reset.data('reset', 'search');
                adv_btn_reset.show();

                //Persist the Keyword Search phrase, as stored on search_keyword - START
                var search_keyword_persist = search_keyword;
                localStorage.setItem("searchKeyword", search_keyword_persist);
                localStorage.setItem("searchKeywordTime", new Date($.now()));

                //clear the persisted Advanced Filter data also, if any
                dzy_clear_persisted_cs_filter_search_data(true, false);
                //Persist the Keyword Search phrase - END

                var search_results_singular_text = '1 result matching your criteria: ' + search_keyword;
                var search_results_plural_text = ' results matching your criteria: ' + search_keyword;
                var search_results_error_text = 'No results matching your criteria: ' + search_keyword;

                $.ajax({
                    url: ajax_object.ajaxurl,
                    method: 'POST',
                    dataType: 'JSON',
                    data: {
                        action: 'DzySearchCaseStudies',
                        search_keyword: search_keyword
                    },
                    cache: false,
                    success: function (response) {
                        //console.log('success search', response);

                        var search_results_data = response.data.search_results;

                        js_results_count_txt.show();

                        if (response.success == true && search_keyword.length > 0) {

                            if (search_results_data.found_posts > 1) {
                                js_results_count_txt.text(search_results_data.found_posts + search_results_plural_text);
                            } else if (search_results_data.found_posts == 1) {
                                js_results_count_txt.text(search_results_singular_text);
                            } else {
                                js_results_count_txt.text(search_results_error_text);
                                show_default_cs_view_with_results_count(true);
                            }

                            if (search_results_data.found_posts >= 1) {

                                hide_default_cs_view();

                                var results_output = '';

                                $.each(search_results_data.listing_data, function (index, list_data) {
                                    if (list_data.cs_images_count <= 1) {
                                        results_output += '<div class="col-lg-4 tablet-desktop-result js-result-cs">' +
                                            '<div class="tablet-result">' +
                                            '<div class="col-6 tablet-image">' + '<div class="wrap">' + list_data.cs_images + '</div>' + '<a href="' + list_data.cs_permalink + '" title="More about ' + list_data.cs_name + '" class="btn d-center read-more visible-xs hidden-sm hidden-md hidden-lg">Read More ></a>' + '</div>' +
                                            '<div class="col-6 result-content-box">' +
                                            '<div class="project-services">' + list_data.cs_project_services_list + '</div>' +
                                            '<h3 class="result-content-title">' + list_data.cs_name + '</h3>' +
                                            '<h4 class="result-content-subtitle">' + list_data.cs_tagline + '</h4>' +
                                            list_data.cs_facts +
                                            '<a href="' + list_data.cs_permalink + '" title="More about ' + list_data.cs_name + '" class="btn d-center read-more hidden-xs visible-f-sm visible-f-md visible-f-lg">Read More ></a>' +
                                            '</div>' +
                                            '</div>' +
                                            '</div>';
                                    } else {
                                        results_output += '<div class="col-lg-4 tablet-desktop-result js-result-cs">' +
                                            '<div class="tablet-result">' +
                                            '<div class="col-6 mobile tablet-image">' + '<div class="wrap">' + list_data.cs_images + '</div>' + '<a href="' + list_data.cs_permalink + '" title="More about ' + list_data.cs_name + '" class="btn d-center read-more visible-xs hidden-sm hidden-md hidden-lg">Read More ></a>' + '</div > ' +
                                            '<div class="col-6 result-content-box">' +
                                            '<div class="project-services">' + list_data.cs_project_services_list + '</div>' +
                                            '<h3 class="result-content-title">' + list_data.cs_name + '</h3>' +
                                            '<h4 class="result-content-subtitle">' + list_data.cs_tagline + '</h4>' +
                                            list_data.cs_facts +
                                            '<a href="' + list_data.cs_permalink + '" title="More about ' + list_data.cs_name + '" class="btn d-center read-more hidden-xs visible-f-sm visible-f-md visible-f-lg">Read More ></a>' +
                                            '</div>' +
                                            '</div>' +
                                            '</div>';
                                    }
                                });

                                $('#js-results').html(results_output);
                                $('#js-results').addClass("row");
                            }

                        } else {
                            show_default_cs_view_with_results_count(false);
                        }
                    },
                    error: function (response) {
                        //console.log('error search', response);
                        if (search_keyword.length) {
                            js_results_count_txt.show();
                            js_results_count_txt.text(search_results_error_text);
                            show_default_cs_view_with_results_count(true);
                        }
                    }
                });
            } else {
                //console.log('The Keyword Search Phrase is off: ', search_keyword );
                show_default_cs_view_with_results_count(false);

                //hide the Reset Filters / Search button; both attr & data are used!
                adv_btn_reset.text('Reset');
                adv_btn_reset.attr('data-reset', '');
                adv_btn_reset.data('reset', '');
                adv_btn_reset.hide();
            }

        });
    }

    /**
   * Case Studies Landing Page - Persist the Advanced Filter items / Search Keyword phrase - START
   */
    var persist_filters_search_minutes_span = 10; //for how long (in minutes) to persist the Advanced Filter items / Search Keyword phrase

    if ($('div#js-cslp').length && typeof $('div#js-cslp') !== 'undefined') { //logic _only_ for the Case Studies Landing Page

        //The logic for the Advanced Filter items - START
        if (localStorage.getItem("advFilters") && localStorage.getItem("advFiltersTime")) {

            //console.clear();

            var persisted_adv_filters = JSON.parse(localStorage.getItem("advFilters") || null) || {};
            var persisted_adv_filters_time = localStorage.getItem("advFiltersTime");
            var persisted_crt_time = new Date($.now());

            if (new Date(persisted_adv_filters_time) < new Date(persisted_crt_time)) {
                //newer access that the persisted time stamp

                var persisted_time_diff = (new Date(persisted_crt_time) - new Date(persisted_adv_filters_time)) / (1000 * 60); //difference in minutes

                if (persisted_time_diff <= persist_filters_search_minutes_span) {
                    //persisted_time_diff within persist_filters_search_minutes_span min.

                    if (($(".dropdown-item").length && typeof $(".dropdown-item") !== 'undefined') || ($(".case-studies-color-btn button").length && typeof $(".case-studies-color-btn button") !== 'undefined') || ($("button.dropdown-toggle span.ticked").length && typeof $("button.dropdown-toggle span.ticked") !== 'undefined')) {

                        $.each(persisted_adv_filters, function (paf_index, persisted_filter) {

                            var item_temp_last = {};
                            var afi_btn_open = false;

                            $.each(persisted_filter, function (fd_index, filter_data) {

                                if (filter_data.type == 'project-services') {

                                    var cscb = $(".case-studies-color-btn button[data-filter='[{" + '"item":"' + filter_data.item + '", "type":"' + filter_data.type + '"}]' + "']");
                                    item_temp_last = cscb;

                                    //skip marking the last item as selected, it will handled right after this loop
                                    if (paf_index == (persisted_adv_filters.length - 1)) {
                                        return;
                                    }

                                    //mark this item as selected
                                    cscb.toggleClass('ticked js-afi-ticked');
                                    $(".case-studies-color-btn button").each(function () {
                                        if (!$(this).hasClass('ticked')) {
                                            $(this).addClass('disable');
                                        } else {
                                            $(this).removeClass('disable');
                                        }
                                    });
                                    if ($(".case-studies-color-btn button.ticked").length < 1) {
                                        $(".case-studies-color-btn button.disable").each(function () {
                                            $(this).removeClass('disable');
                                        });
                                    }

                                } else {

                                    var afdi = $(".dropdown-item[data-filter='[{" + '"item":"' + filter_data.item + '", "type":"' + filter_data.type + '"}]' + "']");
                                    afi_btn_open = true;
                                    item_temp_last = afdi;

                                    //skip marking the last item as selected, it will handled right after this loop
                                    if (paf_index == (persisted_adv_filters.length - 1)) {
                                        return;
                                    }

                                    //mark this item as selected
                                    afdi.toggleClass('js-afi-ticked ticked');
                                    //Advanced Filter list head - mark it with X
                                    var afdi_dropdown_button = afdi.parent('.dropdown-menu').parent('div.dropdown').find('.btn.dropdown-toggle');
                                    var afdi_dropdown_list_items = afdi.parent('.dropdown-menu').find('.js-afi-ticked.ticked');
                                    if (afdi_dropdown_list_items.length) {
                                        afdi_dropdown_button.find('span.ticked').show();
                                    } else {
                                        afdi_dropdown_button.find('span.ticked').hide();
                                    }

                                }
                            });

                            //trigger the Ajax call on the last persisted item
                            if (paf_index == (persisted_adv_filters.length - 1)) {

                                //open the Advanced Filter lists
                                if (afi_btn_open == true) {
                                    $(".advanced-filter-btn[data-toggle='toggle']").click();
                                }
                                //mark the Reset Filters / Search button if filters are collapsed
                                var afi_btn_reset = $('#js-reset-btn');
                                if ($(".advanced-filter-btn[data-toggle='toggle']").hasClass('in') || $('.advanced-filter-collapse').hasClass('in')) {
                                    afi_btn_reset.addClass('align-bottom-right');
                                } else if (afi_btn_reset.hasClass('align-bottom-right')) {
                                    afi_btn_reset.removeClass('align-bottom-right');
                                }
                                //simulate entire selecting logic for this item and indirectly trigger the Ajax call
                                item_temp_last.click();

                            }

                        });
                    }

                } else {
                    //persisted_time_diff over persist_filters_search_minutes_span min.

                    //clear all persisted data, of any
                    dzy_clear_persisted_cs_filter_search_data(true, true);
                }

            } else {
                //current or previous access than the persisted time stamp, do nothing else
            }

        } else {
            //no persisted filters for LP, do nothing
        }
        //The logic for the Advanced Filter items - END

        //The logic for the Keyword Search phrase - START
        if (localStorage.getItem("searchKeyword") && localStorage.getItem("searchKeywordTime")) {

            //console.clear();

            var persisted_search_keyword = localStorage.getItem("searchKeyword");
            var persisted_search_keyword_time = localStorage.getItem("searchKeywordTime");
            var persisted_crt_time = new Date($.now());

            if (new Date(persisted_search_keyword_time) < new Date(persisted_crt_time)) {
                //newer access that the persisted time stamp

                var persisted_time_diff = (new Date(persisted_crt_time) - new Date(persisted_search_keyword_time)) / (1000 * 60); //difference in minutes

                if (persisted_time_diff <= persist_filters_search_minutes_span) {
                    //persisted_time_diff within persist_filters_search_minutes_span min.

                    if (($("input#search").length && typeof $("input#search") !== 'undefined') || ($("button#js-cs-search").length && typeof $("button#js-cs-search") !== 'undefined')) {
                        //place the persisted Keyword Search phrase
                        $('input#search').val(persisted_search_keyword);

                        //trigger search button click event
                        $('button#js-cs-search').click();
                    }

                } else {
                    //persisted_time_diff over persist_filters_search_minutes_span min.

                    //clear all persisted data, of any
                    dzy_clear_persisted_cs_filter_search_data(true, true);
                }

            } else {
                //current or previous access than the persisted time stamp, do nothing else
            }

        } else {
            //no persisted search for LP, do nothing else
        }
        //The logic for the Keyword Search phrase - END

    } else { //logic for outside the Case Studies Landing Page

        //console.clear();

        var persist_filters_search_time = null;

        if (localStorage.getItem("advFilters") && localStorage.getItem("advFiltersTime")) {
            persist_filters_search_time = localStorage.getItem("advFiltersTime");
        }

        if (localStorage.getItem("searchKeyword") && localStorage.getItem("searchKeywordTime")) {
            persist_filters_search_time = localStorage.getItem("searchKeywordTime");
        }

        var persisted_crt_time = new Date($.now());

        if (persist_filters_search_time) {
            var persisted_time_diff = (new Date(persisted_crt_time) - new Date(persist_filters_search_time)) / (1000 * 60); //difference in minutes
        } else {
            var persisted_time_diff = null;
        }

        if (persisted_time_diff && persisted_time_diff > persist_filters_search_minutes_span) {
            //persisted_time_diff over persist_filters_search_minutes_span min.

            //clear all persisted data, if any
            dzy_clear_persisted_cs_filter_search_data(true, true);
        } else {
            //persisted_time_diff within persist_filters_search_minutes_span min.

            //keep persisted data, if any, and do nothing else
        }

    }

    /**
   * Clear persisted data for Advanced Filter items / Search Keyword phrase, stored on localStorage
   * @param clear_filter, expects bool value
   * @param clear_search, expects bool value
   */
    function dzy_clear_persisted_cs_filter_search_data(clear_filter, clear_search) {

        //clear persisted Advanced Filter data, if any
        if (clear_filter == true) {
            if (localStorage.getItem("advFilters")) {
                localStorage.removeItem("advFilters");
            }
            if (localStorage.getItem("advFiltersTime")) {
                localStorage.removeItem("advFiltersTime");
            }
        }

        //clear persisted Keyword Search data, if any
        if (clear_search == true) {
            if (localStorage.getItem("searchKeyword")) {
                localStorage.removeItem("searchKeyword");
            }
            if (localStorage.getItem("searchKeywordTime")) {
                localStorage.removeItem("searchKeywordTime");
            }
        }

    }
    //Case Studies Landing Page - Persist the Advanced Filter items / Search Keyword phrase - END

    /**
   * Case Studies Landing Page - Reset the Advanced Filter / Search functionality
   */
    if ($('#js-reset-btn').length && typeof $('#js-reset-btn') !== 'undefined') {

        $('#js-reset-btn').on("click", function (e) {

            //console.clear();

            var adv_btn_reset_on = $(this);
            var adv_btn_reset_on_data = adv_btn_reset_on.data('reset');

            if (adv_btn_reset_on_data !== 'undefined') {

                //clear the filters
                if (adv_btn_reset_on_data == 'filters' || adv_btn_reset_on_data == 'all') {
                    hide_adv_filter_selected_items_with_collapsed(false);

                    //clear persisted Advanced Filter data, if any
                    dzy_clear_persisted_cs_filter_search_data(true, false);

                    //trigger reset on the Advanced Filter by simulating click on the 1st dropdown button X (already disabled)
                    $('button.dropdown-toggle span.ticked').first().click();
                }

                //clear the search
                if (adv_btn_reset_on_data == 'search' || adv_btn_reset_on_data == 'all') {
                    //clear the Keyword Search input
                    $('input#search').val('');

                    //clear persisted Keyword Search data, if any
                    dzy_clear_persisted_cs_filter_search_data(false, true);

                    //trigger search button click event
                    $('button#js-cs-search').click();
                }

            } else {
                //do nothing
            }

        });

    }

    /**
   * The Load More functionality on Case Studies Landing Page
   */
    $('#js-load-more-btn').click(function () {
        var cs_other_total = $('.js-other-cs').length;
        var cs_shown = $('.js-other-cs:visible').length;
        var cs_to_show_next = 1;

        $('.js-other-cs:lt(' + (cs_shown + cs_to_show_next) + ')').addClass('enable');

        var cs_shown_now = $('.js-other-cs:visible').length;

        if (cs_shown_now == cs_other_total) {
            $(this).attr("disabled", true);
            $(this).addClass('disable');
            $('#js-load-more').hide();
        }
    });

    /**
   * Show default Case Studies view, with/out the results count
   */
    function show_default_cs_view_with_results_count(with_results_count) {
        if (with_results_count == false) {
            $('#js-results-count').hide();
        }
        $('.row.js-default').show();
        $('.js-other-cs').removeClass('enable');
        $('#js-load-more').show();
        $('#js-load-more-btn').removeClass('disable');
        $('#js-load-more-btn').attr('disabled', false);
        $('#js-load-more-btn').prop('disabled', '');
        $('#js-results').html('');
    }

    /**
   * Hide default Case Studies view
   */
    function hide_default_cs_view() {
        $('.row.js-default').hide();
        $('#js-load-more').hide();
        $('.js-other-cs').each(function () {
            if ($(this).hasClass('enable')) {
                $(this).removeClass('enable');
            }
        });
    }

    /**
   * Responsive results mobile images carousel
   */
    function build_responsive_results_images_carousel(cs_rr_images) {
        var cs_rr_carousel = '';

        cs_rr_carousel += '<div class="owl-carousel-container">' +
            '<div class="carousel-controls mobile">' +
            '<div class="owl-carousel-left-slide">' +
            '<img src="../images/icons/group-copy-6.svg" alt="slide to right">' +
            '</div>' +
            '<div class="owl-carousel-right-slide">' +
            '<img src="../images/icons/group-copy-7.svg" alt="slide to left">' +
            '</div>' +
            '</div>' +
            '<div class="table-container mobile">' +
            '<div class="owl-carousel case-studies">' + cs_rr_images +
            '</div>' +
            '</div>' +
            '</div>';

        return cs_rr_carousel;
    }

    /**
   * Case Studies Landing Page - Clear the Advanced Filter selected items, with/out the collapsed lists
   */
    function hide_adv_filter_selected_items_with_collapsed(with_collapsed_items) {

        //clear the Advanced Filter - all items
        if ($('.js-afi-ticked.ticked').length) {
            $(".case-studies-color-btn button").each(function () {
                if ($(this).hasClass('ticked js-afi-ticked')) {
                    $(this).removeClass('ticked js-afi-ticked');
                }
                if ($(this).hasClass('disable')) {
                    $(this).removeClass('disable');
                }
            });
            $(".dropdown-item").each(function () {
                if ($(this).hasClass('js-afi-ticked ticked')) {
                    var dropdown_button = $(this).parent('.dropdown-menu').parent('.dropdown').find('.btn.dropdown-toggle');
                    var item_list_type = $(this).data('filter')[0].type.replace('-', ' ');

                    dropdown_button.find('span.ticked').hide();
                    $(this).removeClass('js-afi-ticked ticked');
                }
            });

        }

        //clear the Advanced Filter - collapsed lists
        if (with_collapsed_items == true) {
            if ($(".advanced-filter-btn[data-toggle='toggle']").hasClass('in')) {
                $(".advanced-filter-btn[data-toggle='toggle']").removeClass('in');
            }
            if ($('.advanced-filter-collapse').hasClass('in')) {
                $('.advanced-filter-collapse').removeClass('in');
            }
        }
    }

    //  });
    /**
     * Event tracking with Google Tag Manager - START ******************************************************************
     * Event name | Triggered... | Section
     */

    window.dataLayer = window.dataLayer || [];

    //Events triggered by Clicks - START ************************************************

    //{page}_header | User clicks {page} in header | Global Nav
    //services_header | User clicks services in header | Global Nav
    //agencies_header | User clicks agencies in header | Global Nav
    //estimation_tool_header | User clicks estimation tool in header | Global Nav
    //case_studies_header | User clicks case studies in header | Global Nav
    //aboutus_header | User clicks about us in header | Global Nav
    //faq_header | User clicks faq in header | Global Nav
    //covid_19_agency_ebook_header | User clicks COVID-19 eBook in header | Global Nav
    if ( $('.js_header_top_nav .js_navigation__list a').length && typeof $('.js_header_top_nav .js_navigation__list a') !== 'undefined' ) {
        $('.js_header_top_nav .js_navigation__list a').on( 'click', function(e) {

            var js_page_header_link = $(this);
            var js_page_header_link_href = js_page_header_link.attr('href');
            var js_page_header_link_href_slug = js_page_header_link_href.replace(window.location.origin, '');
            var js_page_header_link_event_name = '';

            $.each( js_page_header_link_href_slug.split('/'), function( index, js_page_slug_split ) {
                //handle multi-level slug and the last '/'
                if ( index > 1 ) {
                    js_page_header_link_event_name += '_';
                }
                js_page_header_link_event_name += js_page_slug_split;
            } );
            js_page_header_link_event_name = js_page_header_link_event_name.replace( /-/g, '_' );

            //agencies_header | User clicks agencies in header | Global Nav
            if ( js_page_header_link_href_slug == '/agency/' || js_page_header_link_href_slug == '/agencies/' ) {
                js_page_header_link_event_name = 'agencies_';
            }

            //aboutus_header | User clicks about us in header | Global Nav
            if ( js_page_header_link_href_slug == '/about-us/' ) {
                js_page_header_link_event_name = 'aboutus_';
            }

            if ( js_page_header_link_href_slug == '/' ) {
                js_page_header_link_event_name = 'home_';
            }

            //append the location part
            js_page_header_link_event_name += 'header';

            //skip pe Get in touch anchor or invalid event name
            if ( js_page_header_link_event_name != 'header' ) {
                window.dataLayer.push({'event': js_page_header_link_event_name});

                console.log('page_header', window.dataLayer);
            }

        } );
    }

    //getintouch_top_{page} | User clicks {page} Get In Touch button (Top) | Page
    if ( $('.js_header_top_nav a[id^="js_getintouch_top_"]').length && typeof $('.js_header_top_nav a[id^="js_getintouch_top_"]') !== 'undefined' ) {
        $('.js_header_top_nav a[id^="js_getintouch_top_"]').on( 'click', function(e) {

            var getintouch_top_page_id = $('.js_header_top_nav a[id^="js_getintouch_top_"]').attr('id');

            //if getintouch_top_page_id is valid
            if ( false !== getintouch_top_page_id && 'undefined' !== typeof getintouch_top_page_id ) {

                //getintouch_top_{page}| User clicks {page} Get In Touch button (Top) | Page
                var getintouch_top_event_name = getintouch_top_page_id.replace( 'js_', '' );

                //getintouch_top_home | User clicks homepage Get In Touch button (Top) | Homepage
                if ( getintouch_top_page_id == 'js_getintouch_top_frontpage' || getintouch_top_page_id == 'js_getintouch_top_homepage' ) {
                    getintouch_top_event_name = 'getintouch_top_home';
                }

                //getintouch_top_pm | User clicks PM page Get In Touch button (Top) | Product Management
                if ( getintouch_top_page_id == 'js_getintouch_top_product_management' ) {
                    getintouch_top_event_name = 'getintouch_top_pm';
                }

                //getintouch_top_des | User clicks Design page Get In Touch button (Top) | Design
                if ( getintouch_top_page_id == 'js_getintouch_top_design' ) {
                    getintouch_top_event_name = 'getintouch_top_des';
                }

                //getintouch_top_dev | User clicks Development page Get In Touch button (Top) | Development
                if ( getintouch_top_page_id == 'js_getintouch_top_development' ) {
                    getintouch_top_event_name = 'getintouch_top_dev';
                }

                window.dataLayer.push({'event': getintouch_top_event_name});

                console.log('getintouch_top_page', window.dataLayer);
            }

        } );
    }

    //BUTTONS:
    //getintouch_mid_home | User clicks homepage Get In Touch button (Middle) | Homepage
    //getintouch_footer | User clicks homepage Get In Touch button (Bottom) | Global Nav
    //imbusiness_home | User clicks â€œIâ€™m a businessâ€ on homepage | Homepage
    //imagency_home | User clicks Iâ€™m an agencyâ€ on homepage | Homepage
    //iminvestor_home | User clicks â€œIâ€™m an investorâ€ on homepage | Homepage
    //getintouch_header_businesses | User clicks "Get in touch" in header | Businesses
    //getintouch_cue_deazy_businesses | User clicks "Get in touch" in Cue team Deazy... section | Businesses
    //getintouch_how_we_make_businesses | User clicks "Get in touch" in How we make... section | Businesses
    //getintouch_challenges_agencies | User clicks "Schedule a call" in Solve these challenges... section | Agency / Agencies
    //getintouch_tryus_call_agencies | User clicks "Schedule a call" in Try us out section | Agency / Agencies
    //getintouch_tryus_brief_agencies | User clicks "Send us a brief - Cost comparison" in Try us out section | Agency / Agencies
    //getintouch_tryus_code_agencies | User clicks "Arrange a code test" in Try us out section | Agency / Agencies
    //getintouch_header_investors | User clicks "Get in touch" in header | Investors
    //getintouch_cue_deazy_investors | User clicks "Get in touch" in Cue team Deazy... section | Investors
    //getintouch_how_we_make_investors | User clicks "Get in touch" in How we make... section | Investors
    //getintouch_header_pm | User clicks "Get in touch" in header | Product Management
    //getintouch_header_des | User clicks "Get in touch" in header | Design
    //getintouch_header_mvp | User clicks â€œGet a quoteâ€ or â€œGet in touchâ€ in header | MVP
    //getintouch_header_dev | User clicks "Get in touch" in header | Development
    //getintouch_header_{dev_tech} | User clicks "Get in touch" in header | Development Technology
    //getintouch_header_services | User clicks "Get in touch" in header | Services
    //inhouse_open | User expands â€œShould I hire in-house...â€ | FAQ
    //techstacks_open | User expands â€œWhat tech stacks...â€ | FAQ
    //freelancers_open | User expands â€œIâ€™ve heard Freelancersâ€¦â€ | FAQ
    //involved_open | User expands â€œHow involved will Deazyâ€¦â€ | FAQ
    //quality_open | User expands â€œHow do you guaranteeâ€¦â€ | FAQ
    //design_open | User expands â€œWhat about Designâ€ | FAQ
    //whichteams_open | User expands â€œWhat development teamsâ€¦â€ | FAQ
    //lightbulb_open | User expands â€œHow many programmersâ€ | FAQ
    if ( $("button[data-js-evtr]").length && typeof $("button[data-js-evtr]") !== 'undefined' ) {
        $("button[data-js-evtr]").on( 'click', function(e) {

            var js_btn_evtr_item = $(this);
            var js_btn_evtr_data = $(this).attr('data-js-evtr');

            if ( !js_btn_evtr_item.length || typeof js_btn_evtr_item === 'undefined' || js_btn_evtr_data == '' || js_btn_evtr_data === 'undefined' ) {
                return false;
            }


            if ( js_btn_evtr_data == 'getintouch_footer' ) { //getintouch_footer | User clicks {page} Get In Touch button (Bottom) | Global Nav

                window.dataLayer.push({
                    'event': js_btn_evtr_data,
                    'pagePath': window.location.pathname
                });

            } else if ( js_btn_evtr_item.hasClass('js-question') ) { //{question}_open | User expands an answer | FAQ

                if ( js_btn_evtr_item.attr("aria-expanded") == 'false' ) { //click to expand it
                    window.dataLayer.push({'event': js_btn_evtr_data});
                }

            } else if ( js_btn_evtr_item.hasClass('visible-sm')) {

                window.dataLayer.push({
                    'event': js_btn_evtr_data,
                    'deviceType': 'mobile'
                });

            } else if ( js_btn_evtr_item.hasClass('visible-md')) {

                window.dataLayer.push({
                    'event': js_btn_evtr_data,
                    'deviceType': 'desktop'
                });

            } else {

                window.dataLayer.push({'event': js_btn_evtr_data});

            }

            console.log('button', js_btn_evtr_data, window.dataLayer);

        } );
    }

    //ANCHORS:
    //deazylogo_header | User clicks deazy logo in header | Global Nav
    //deazyd_footer | User clicks deazy D logo in footer | Global Nav
    //facebookout_footer | User clicks facebook icon in footer | Global Nav
    //linkedinout_footer | User clicks LinkedIn icon in footer | Global Nav
    //facebookout_header | User clicks facebook icon in header | Global Nav
    //linkedinout_header | User clicks linkedin icon in header | Global Nav
    //pm_three_steps_heading_home | User clicks Product Management heading in Three Steps section | Homepage
    //des_three_steps_heading_home | User clicks Design heading in Three Steps section | Homepage
    //mvp_three_steps_heading_home | User clicks Minimum Viable Product heading in Three Steps section | Homepage
    //dev_three_steps_heading_home | User clicks Development heading in Three Steps section | Homepage
    //aas_tab | User clicks â€œAs a serviceâ€ tab | Product Management
    //coach_tab | User clicks â€œcoachingâ€ tab | Product Management
    //branding_tab_des | User clicks â€œBrandingâ€ tab | Design
    //ux_tab_des | User clicks â€œUser Experienceâ€ tab | Design
    //ui_tab_des | User clicks â€œUser Interfaceâ€ tab | Design
    //branding_tab_toggle_des | User toggles to â€œBrandingâ€ tab | Design
    //ux_tab_toggle_des | User toggles to â€œUser Experienceâ€ tab | Design
    //ui_tab_toggle_des | User toggles to â€œUser Interfaceâ€ tab | Design
    //pm_heading_services | User clicks Product Management heading | Services
    //pm_readmore_services | User clicks Product Management â€œRead Moreâ€ | Services
    //mvp_heading_services | User clicks Minimum Viable Product heading | Services
    //mvp_readmore_services | User clicks Minimum Viable Product â€œRead Moreâ€ | Services
    //dev_heading_services | User clicks Development heading | Services
    //dev_readmore_services | User clicks Development â€œRead Moreâ€ | Services
    //des_heading_services | User clicks Design heading | Services
    //des_readmore_services | User clicks Design â€œRead Moreâ€ | Services
    if ( $("a[data-js-evtr]").length && typeof $("a[data-js-evtr]") !== 'undefined' ) {
        $("a[data-js-evtr]").on( 'click', function(e) {

            var js_anchor_evtr_item = $(this);
            var js_anchor_evtr_data = $(this).attr('data-js-evtr');

            if ( !js_anchor_evtr_item.length || typeof js_anchor_evtr_item === 'undefined' || js_anchor_evtr_data == '' || js_anchor_evtr_data === 'undefined' ) {
                return false;
            }

            if ( js_anchor_evtr_data == 'deazylogo_header' ) {

                if ( js_anchor_evtr_item.hasClass('js-mobile-nav') ) {
                    window.dataLayer.push({
                        'event': js_anchor_evtr_data,
                        'deviceType': 'mobile'
                    });
                } else {
                    window.dataLayer.push({
                        'event': js_anchor_evtr_data,
                        'deviceType': 'desktop'
                    });
                }

            } else if ( js_anchor_evtr_item.hasClass('visible-sm')) {

                window.dataLayer.push({
                    'event': js_anchor_evtr_data,
                    'deviceType': 'mobile'
                });

            } else if ( js_anchor_evtr_item.hasClass('visible-md')) {

                window.dataLayer.push({
                    'event': js_anchor_evtr_data,
                    'deviceType': 'desktop'
                });

            } else {

                window.dataLayer.push({'event': js_anchor_evtr_data});

            }

            console.log('anchor', js_anchor_evtr_data, window.dataLayer);

        } );
    }

    //Events triggered by Clicks - END ************************************************//

    //Events triggered by Behaviour / Scroll Depth - START ******************************

    var scroll_depth_percentage = 0; // in %

    //Get the maximum depth the user scrolled to
    $(window).on( 'scroll', function() {
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();

        //calculate current scroll depth
        var scrollPercent = (s / (d - c)) * 100;

        //update the scroll depth to the maximum
        if ( scrollPercent > scroll_depth_percentage ) {
            scroll_depth_percentage = Math.floor( scrollPercent );
        }
    } );

    //set the Event name for Scroll Depth, based on current page
    var scroll_depth_event_name = 'scrolldepth_';

    //scrolldepth_{page} | % of page scrolled by user | Page
    scroll_depth_event_name += dzy_get_window_location_pathname();

    //send data to GTM once, just before the current page is left
    $(window).bind( 'beforeunload', function (e) {
        if ( scroll_depth_event_name != 'scrolldepth_' ) {
            window.dataLayer.push({
                'event': scroll_depth_event_name,
                'scrollThreshold': scroll_depth_percentage,
                'scrollUnits': 'percent',
                'scrollDirection': 'vertical'
            });
        }

        console.log('scroll depth percentage', scroll_depth_event_name, window.dataLayer);

    });

    //Events triggered by Behaviour / Scroll Depth - END ******************************//

    /**
     * Get custom slug for Event Tracking - START
     * @returns {string}
     */
    function dzy_get_window_location_pathname() {
        var dzy_wlpn = window.location.pathname;
        var dzy_wlpn_event_name = '';
        var dzy_wlpn_length = dzy_wlpn.split('/').length;

        $.each( dzy_wlpn.split('/'), function( index, dzy_wlpn_split ) {
            //handle multi-level slug and the last '/'
            if ( index > 1 && index < dzy_wlpn_length - 1 ) {
                dzy_wlpn_event_name += '_';
            }
            dzy_wlpn_event_name += dzy_wlpn_split;
        } );
        dzy_wlpn_event_name = dzy_wlpn_event_name.replace( /-/g, '_' );

        if ( dzy_wlpn == '/') {
            dzy_wlpn_event_name = 'home';
        }

        if ( dzy_wlpn == '/agency/' || dzy_wlpn == '/agencies/' ) {
            dzy_wlpn_event_name = 'agencies';
        }

        if ( dzy_wlpn == '/about-us/') {
            dzy_wlpn_event_name = 'aboutus';
        }

        if ( dzy_wlpn == '/product-management/') {
            dzy_wlpn_event_name = 'pm';
        }

        if ( dzy_wlpn == '/development/') {
            dzy_wlpn_event_name = 'dev';
        }

        if ( dzy_wlpn == '/design/') {
            dzy_wlpn_event_name = 'des';
        }

        return dzy_wlpn_event_name;
    }
    //Get custom slug for Event Tracking - END

    //Event tracking with Google Tag Manager - END *********************************************************************

} );

/**
 * Custom function to capitalize each word from a string
 * @param str
 * @returns {string | *}
 */
function dzy_capitalize_words_string(str) {
    str = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
    return str;
}

/**
 * Validate a string against an e-mail address format
 * @param email_address
 * @returns {boolean}
 */
function dzy_is_valid_email_address(email_address) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email_address);
}
function dzy_is_valid_phone_number( phone_number ) {
    var pattern = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g);
    return pattern.test( phone_number );
}

/**
 * Get a cookie by name - START
 * @param cname
 * @returns {string}
 */
function dzy_get_cookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//Get a cookie by name - END

/**
 * Set a cookie by name - START
 * @param cname
 * @returns {string}
 */
function dzy_set_cookie( cname, cvalue, exdays ) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Set a cookie by name - END

function calculateEstTool2() {
    const hourlyRate = 30;
    let signUpMin;
    let signUpMax;
    let dashboardMin;
    let dashboardMax;
    let feedMin;
    let feedMax;
    let taggingMin;
    let taggingMax;
    let aVMin;
    let aVMax;
    let searchMin;
    let searchMax;
    let calendarMin;
    let calendarMax;
    let mapMin;
    let mapMax;
    let bookingsMin;
    let bookingsMax;
    let inventoryMin;
    let inventoryMax;
    let messagingMin;
    let messagingMax;
    let subscriptionMin;
    let subscriptionMax;
    let paymentsMin;
    let paymentsMax;
    let cartMin;
    let cartMax;
    let cmsMin;
    let cmsMax;
    let moderationMin;
    let moderationMax;
    let userMin;
    let userMax;
    let minAppScalingFactor;
    let maxAppScalingFactor;
    let minScopeScalingFactor;
    let maxScopeScalingFactor;
    let minPlatformScalingFactor;
    let maxPlatformScalingFactor;
    let minTechnicalScalingFactor;
    let maxTechnicalScalingFactor;

    if ($('#app').is(':checked')) {
        minAppScalingFactor = 1;
        maxAppScalingFactor = 1;
        $('.estimation-tool .table-top-options.mobile').show();
    }
    if ($('#website').is(':checked')) {
        minAppScalingFactor = 0.78;
        maxAppScalingFactor = 0.82;
        minPlatformScalingFactor = 1;
        maxPlatformScalingFactor = 1;
        minTechnicalScalingFactor = 1;
        maxTechnicalScalingFactor = 1;
        $('.estimation-tool .table-top-options.mobile').hide();
    }
    if ($('#mvp').is(':checked')) {
        minScopeScalingFactor = 0.63;
        maxScopeScalingFactor = .66;
    }
    if ($('#everything').is(':checked')) {
        minScopeScalingFactor = 0.96;
        maxScopeScalingFactor = 1.04;
    }
    if ($('#both').is(':checked') && (!$('#website').is(':checked'))) {
        minPlatformScalingFactor = 1.97;
        maxPlatformScalingFactor = 2.03;
    }
    if ($('#android').is(':checked')) {
        minPlatformScalingFactor = 1;
        maxPlatformScalingFactor = 1;
    }
    if ($('#iOS').is(':checked')) {
        minPlatformScalingFactor = 1;
        maxPlatformScalingFactor = 1;
    }
    if ($('#native').is(':checked')) {
        minTechnicalScalingFactor = 1;
        maxTechnicalScalingFactor = 1;
    }
    if ($('#cross-platform').is(':checked') && (!$('#website').is(':checked'))) {
        minTechnicalScalingFactor = 0.69;
        maxTechnicalScalingFactor = 0.71;
    }

    if ($('#sign-up').parent().parent().hasClass('checked')) {
        signUpMin = 8;
        signUpMax = 14;
    } else {
        signUpMin = 0;
        signUpMax = 0;
    }

    if ($('#dashboard').parent().parent().hasClass('checked')) {
        dashboardMin = 28;
        dashboardMax = 34;
    } else {
        dashboardMin = 0;
        dashboardMax = 0;
    }
    if ($('#feed').parent().parent().hasClass('checked')) {
        feedMin = 32;
        feedMax = 42;
    } else {
        feedMin = 0;
        feedMax = 0;
    }
    if ($('#tagging').parent().parent().hasClass('checked')) {
        taggingMin = 26;
        taggingMax = 34;
    } else {
        taggingMin = 0;
        taggingMax = 0;
    }
    if ($('#a-v').parent().parent().hasClass('checked')) {
        aVMin = 60;
        aVMax = 80;
    } else {
        aVMin = 0;
        aVMax = 0;
    }
    if ($('#search').parent().parent().hasClass('checked')) {
        searchMin = 50;
        searchMax = 70;
    } else {
        searchMin = 0;
        searchMax = 0;
    }
    if ($('#calendar').parent().parent().hasClass('checked')) {
        calendarMin = 30;
        calendarMax = 50;
    } else {
        calendarMin = 0;
        calendarMax = 0;
    }
    if ($('#map').parent().parent().hasClass('checked')) {
        mapMin = 26;
        mapMax = 32;
    } else {
        mapMin = 0;
        mapMax = 0;
    }
    if ($('#bookings').parent().parent().hasClass('checked')) {
        bookingsMin = 36;
        bookingsMax = 52;
    } else {
        bookingsMin = 0;
        bookingsMax = 0;
    }
    if ($('#inventory').parent().parent().hasClass('checked')) {
        inventoryMin = 42;
        inventoryMax = 50;
    } else {
        inventoryMin = 0;
        inventoryMax = 0;
    }
    if ($('#messaging').parent().parent().hasClass('checked')) {
        messagingMin = 32;
        messagingMax = 40;
    } else {
        messagingMin = 0;
        messagingMax = 0;
    }
    if ($('#subscription').parent().parent().hasClass('checked')) {
        subscriptionMin = 16;
        subscriptionMax = 24;
    } else {
        subscriptionMin = 0;
        subscriptionMax = 0;
    }
    if ($('#payments').parent().parent().hasClass('checked')) {
        paymentsMin = 8;
        paymentsMax = 16;
    } else {
        paymentsMin = 0;
        paymentsMax = 0;
    }
    if ($('#cart').parent().parent().hasClass('checked')) {
        cartMin = 24;
        cartMax = 36;
    } else {
        cartMin = 0;
        cartMax = 0;
    }
    if ($('#cms').parent().parent().hasClass('checked')) {
        cmsMin = 60;
        cmsMax = 80;
    } else {
        cmsMin = 0;
        cmsMax = 0;
    }
    if ($('#moderation').parent().parent().hasClass('checked')) {
        moderationMin = 32;
        moderationMax = 60;
    } else {
        moderationMin = 0;
        moderationMax = 0;
    }
    if ($('#user').parent().parent().hasClass('checked')) {
        userMin = 32;
        userMax = 60
    } else {
        userMin = 0;
        userMax = 0;
    }

    let minBaseHours = signUpMin + dashboardMin + feedMin + taggingMin + aVMin + searchMin + calendarMin + mapMin + bookingsMin + inventoryMin + messagingMin + subscriptionMin + paymentsMin + cartMin + cmsMin + moderationMin + userMin;
    let maxBaseHours = signUpMax + dashboardMax + feedMax + taggingMax + aVMax + searchMax + calendarMax + mapMax + bookingsMax + inventoryMax + messagingMax + subscriptionMax + paymentsMax + cartMax + cmsMax + moderationMax + userMax;
    let minScalingFactor = minAppScalingFactor * minScopeScalingFactor * minPlatformScalingFactor * minTechnicalScalingFactor;
    let maxScalingFactor = maxAppScalingFactor * maxScopeScalingFactor * maxPlatformScalingFactor * maxTechnicalScalingFactor;
    let adjustedMinHours = minBaseHours * minScalingFactor;
    let adjustedMaxHours = maxBaseHours * maxScalingFactor;
    let minCost = Math.round(adjustedMinHours * 30);
    let maxCost = Math.round(adjustedMaxHours * 30);
    console.log(minCost, maxCost)
    let minWeeks = Math.round((adjustedMinHours) / 40 / 2);
    let maxWeeks = Math.round((adjustedMaxHours) / 40 / 2);
    $("#min-cost").text('Â£' + minCost);
    $("#max-cost").text('Â£' + maxCost);
    $('#min-weeks').text(Math.ceil(minWeeks))
    $('#max-weeks').text(Math.ceil(maxWeeks))
    $("#min-base-hours").text(minBaseHours);
    $("#max-base-hours").text(maxBaseHours);
    // console.log(minBaseHours, maxBaseHours, minScalingFactor, 'minfactor', maxScalingFactor, 'maxfactor', adjustedMinHours, 'minAdjhours', adjustedMaxHours, 'maxadjhours', minCost, maxCost);
    // console.log(minAppScalingFactor, 'minApp', minScopeScalingFactor, 'minScope', minPlatformScalingFactor, 'minPlat', minTechnicalScalingFactor, 'minTech');
    // console.log(signUpMin, dashboardMin, feedMin,taggingMin);
}

//Set 2 global variables for modal
var scrollTopPosition = 0;
var lastKnownScrollTopPosition = 0;