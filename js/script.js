/*global $, document, window, setInterval, clearInterval, AOS*/

// VARIABLES
var ost = 0,
    Nav = $("header nav"),
    menuBtn = $("header nav .icons .nav-menu-btn"),
    firstLine = $("header nav .icons .nav-menu-btn span:first-of-type"),
    lastLine = $("header nav .icons .nav-menu-btn span:last-of-type"),
    menuOverlay = $("header nav .menu-overlay"),
    navMenuContainer = $("header nav .nav-menu-container"),
    headerContent = $("header .header-content .container"),
    headerVideo = $("header .header-content .content-text .about-video"),
    portfolioContent = $(".portfolio .portfolio-content .portfolio-items"),
    portfolioItems = $(".portfolio .portfolio-items .item"),
    pageContent = $(".blog .page-content.next-to-sidebar"),
    Aside = $(".blog aside"),
    progressBar = $(".progress-bar"),
    ScrollToTop = $("#Scroll-To-Top"),
    Html = $("html"),
    Body = $("body"),
    htmlBody = $("html, body"),
    $document = $(document),
    $window = $(window),
    sliderDirection;

// Sliders Direction Based on Page Direction
if (Html.attr("dir") === "ltr") {

    sliderDirection = false;

} else if (Html.attr("dir") === "rtl") {

    sliderDirection = true;

}

$(function () {

    "use strict";

    // Nav Fixed on Scroll
    if ($window.scrollTop() > 0) {
        Nav.addClass("fixed");
    } else {
        Nav.removeClass("fixed");
    }

    $window.on("scroll", function () {

        if ($window.scrollTop() > 0) {
            Nav.addClass("fixed");
        } else {
            Nav.removeClass("fixed");
        }

        var cOst = $window.scrollTop();

        if (cOst > ost) {
            Nav.addClass("hidden");
        } else {
            Nav.removeClass("hidden");
        }

        ost = cOst;
    });

    // Show and Hide Menu
    $document.on('click', function (e) {

        if ($(e.target).closest($("header nav .icons .nav-menu-btn:not(.btn-when-menu-is-open)")).length) {

            menuOverlay.fadeIn(600);
            menuBtn.addClass("btn-when-menu-is-open");

            firstLine.addClass("first-line-when-menu-is-open");
            lastLine.addClass("last-line-when-menu-is-open");

            if (Html.attr("dir") === "ltr") {

                navMenuContainer.animate({
                    right: 0
                }, 600);

            } else if (Html.attr("dir") === "rtl") {

                navMenuContainer.animate({
                    left: 0
                }, 600);

            }

        } else if ($(e.target).closest($("header nav .icons .btn-when-menu-is-open, header nav .menu-overlay")).length) {

            menuOverlay.fadeOut(600);
            menuBtn.removeClass("btn-when-menu-is-open");

            firstLine.removeClass("first-line-when-menu-is-open");
            lastLine.removeClass("last-line-when-menu-is-open");

            if (Html.attr("dir") === "ltr") {

                navMenuContainer.animate({
                    right: "-100%"
                }, 600);

            } else if (Html.attr("dir") === "rtl") {

                navMenuContainer.animate({
                    left: "-100%"
                }, 600);

            }
        }

    });

    // Dropdown Menu in Mobile
    if ($window.width() < 992) {
        $("header nav .nav-menu .menu-item-has-children, header nav .nav-menu .has-mega-menu, header nav .nav-menu .mega-menu-container li").on("click", function (e) {
            e.stopPropagation();
            $(this).children("ul").slideToggle(600);
        });
    }

    // Smooth Scroll
    $("header nav .nav-menu .menu-item a[data-value]").on("click", function () {
        htmlBody.animate({
            scrollTop: $($(this).data('value')).offset().top
        }, 600);
    });

    // Add Class Active to Menu Links on Scrolling
    $window.on('scroll', function () {

        var cur_pos = $(this).scrollTop();

        $("body > .section").each(function () {

            var top = $(this).offset().top - 20,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {

                $('header nav .nav-menu .menu-item a[data-value="#' + $(this).attr('id') + '"]').addClass("active").parent("li").siblings("li").children("a").removeClass("active");

            }

        });

    });

    // Fire Magnific Popup Plugin in Header
    if (headerVideo.length) {
        headerVideo.magnificPopup({
            type: 'iframe'
        });
    }

    // Image Pan Effect on Hover
    $(".pan-effect").on('mousemove', function (e) {
        $(this).find('img').css({
            transformOrigin: ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
        });
    });

    // Fire Magnific Popup Plugin in Portfolio Section
    if ($('.portfolio').length) {
        portfolioItems.each(function () {

            if (!$(this).attr('href') || $(this).attr('href') === '#') {

                $(this).attr('href', $(this).children("img").attr('src'));

            }

        });

        portfolioContent.magnificPopup({
            delegate: '.item:not(.hidden)',
            type: 'image',
            gallery: {
                enabled: true
            },
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        });
    }

    if ($('.clients').length || $('.project-slider').length) {

        // Fire Owl Carousel Slider Plugin in Clients Section
        $('.testimonials .clients').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 600,
            dragEndSpeed: 600,
            dots: false,
            rtl: sliderDirection,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });

        // Fire Owl Carousel Slider Plugin in Portfolio Single Page
        $('.portfolio-single .project-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 600,
            dragEndSpeed: 600,
            dots: false,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            rtl: sliderDirection,
            smartSpeed: 600,
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: true
                }
            }
        });

    }

    // Switching in Pricing Section
    $(".pricing .switching label").on("click", function () {
        $('.pricing .pricing-content .result.' + $(this).attr('class')).addClass("active").siblings(".result").removeClass("active");
    });

    // Fire theiaStickySidebar Plugin
    if (Aside.length) {
        if (pageContent.outerHeight() > Aside.outerHeight()) {
            if ($window.width() >= 992) {

                Aside.theiaStickySidebar({
                    additionalMarginTop: Nav.height() + 30,
                    additionalMarginBottom: 30
                });

                Aside.find(".widget:not(:nth-last-of-type(2))").css("margin-bottom", "30px");
            } else {
                Aside.find(".widget:not(:nth-last-of-type(1))").css("margin-bottom", "30px");
            }
        } else {
            if ($window.width() >= 992) {

                pageContent.theiaStickySidebar({
                    additionalMarginTop: Nav.height() + 30,
                    additionalMarginBottom: 30
                });

            }
            Aside.find(".widget:not(:nth-last-of-type(1))").css("margin-bottom", "30px");
        }
    }

    // Accordions
    $(".accordions .card .title.active").next(".content").slideDown(300);

    $(".accordions .card .title").on("click", function () {
        $(this).toggleClass("active").parent(".card").siblings(".card").children(".title").removeClass("active");
        $(this).siblings(".content").slideToggle(300).parent(".card").siblings(".card").children(".content").slideUp(300);
    });

    // Tabs
    $(".tabs").each(function () {

        var activeTab = $(this).find(".tabs-titles li.active").index();

        $(this).find(".tabs-contents .content").eq(activeTab).addClass("active").siblings(".content").removeClass("active");

    });

    $(".tabs .tabs-titles li").on("click", function () {

        var thisTab = $(this).index();

        $(this).addClass("active").siblings("li").removeClass("active");
        $(this).parent(".tabs-titles").siblings(".tabs-contents").children().eq(thisTab).addClass("active").siblings(".content").removeClass("active");
    });

    // Tabs in History Steps
    $(".step-progress.history").each(function () {

        var activeTab = $(this).find(".step-label.active").index(".step-progress.history .step-label");

        $(this).siblings(".history-contents").find(".content").eq(activeTab).addClass("active").siblings(".content").removeClass("active");

    });

    $(".step-progress.history .step-label").on("click", function () {

        var thisTab = $(this).index(".step-progress.history .step-label");

        $(this).addClass("active").siblings(".step-label").removeClass("active");
        $(this).parent(".step-progress.history").siblings(".history-contents").children().eq(thisTab).addClass("active").siblings(".content").removeClass("active");
    });

    // Alerts Messages
    $(".alert .close").on("click", function () {
        $(this).parent(".alert").fadeOut(function () {
            $(this).remove();
        });
    });

    // Responsive Table
    if ($window.width() < 768) {

        $("table tbody tr td").each(function () {
            $(this).before("<td class='fake-title'></td>");
        });

        $("table").each(function () {

            var tHeadTh = Array();

            $(this).find("thead th").each(function (i) {
                tHeadTh[i] = $(this).text();
            });

            $(this).find("tbody tr").each(function () {
                $(this).children('td.fake-title').each(function (i) {
                    $(this).text(tHeadTh[i]);
                });
            });
        });

    } else {
        $("table tbody tr .fake-title").remove();
    }

    // Modal Dialog
    $document.on('click', function (e) {

        var modalBtn = $(".modal-btn"),
            modal = $(".modal .modal-container");

        if ($(e.target).closest(modalBtn).length) {

            $('.' + $(e.target).closest(modalBtn).data('modal') + ' .modal-container').fadeIn().css("display", "flex");

        } else if (!$(e.target).closest(modal).length || $(e.target).closest($(".modal .modal-close, .modal .overlay, .modal .close-modal-on-click")).length) {

            modal.fadeOut();

        }

    });

    // Custom Range Slider
    var rangeSlider = $(".range-slider"),
        rangeSliderOutput = $(".range-slider-value");

    rangeSliderOutput.html(rangeSlider.val());

    rangeSlider.on("change", function () {
        rangeSliderOutput.html($(this).val());
    });

    // Custom Number
    $(".custom-number .fa-minus").on("click", function () {

        var $number = $(this).siblings('.number'),
            currentVal = parseInt($number.val());

        if (!isNaN(currentVal) && currentVal >= 1) {

            $number.val(currentVal - 1);

        }

    });

    $(".custom-number .fa-plus").on("click", function () {

        var $number = $(this).siblings('.number'),
            currentVal = parseInt($number.val());

        if (isNaN(currentVal)) {

            $number.val(1);

        } else {

            $number.val(currentVal + 1);

        }

    });

    // Custom Select Menu
    $('select').each(function () {

        var $this = $(this),
            i;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');

        $styledSelect.text($this.children('option:selected').text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (i = 0; i < $this.children('option').length; i += 1) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        $styledSelect.on("click", function (e) {
            e.stopPropagation();

            $('div.select-styled.active').not(this).each(function () {

                $(this).removeClass('active').next('ul.select-options').hide();

            });

            $(this).toggleClass('active').next('ul.select-options').toggle();

            $list.empty();

            for (i = 0; i < $this.children('option').length; i += 1) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

        });

        $list.on("click", "li", function (e) {
            e.stopPropagation();

            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel')).change();
            $list.hide();

        });

        $this.on("DOMNodeInserted", "option", function () {

            $styledSelect.text($this.children('option:first').text());

            $list.empty();

            for (i = 0; i < $this.children('option').length; i += 1) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

        });

        $document.on("click", function () {

            $styledSelect.removeClass('active');
            $list.hide();

        });

    });

    // Custom File Upload
    $(".custom-file-input .file").change(function () {

        var $this = $(this),
            files = $this.prop("files"),
            length = files.length,
            names = $.map(files, function (val) {
                return val.name + ", ";
            });

        names[length - 1] = names[length - 1].replace(", ", "");

        $this.siblings("label").html(names);
    });

    // Fire countTo Plugin
    if (progressBar.length) {

        $window.on("scroll.progressBar", function () {
            if ($(this).scrollTop() >= progressBar.offset().top - $window.height() + 220) {

                $(".progress-bar .bar-fill .bar-value span").countTo();

                $(".progress-bar .bar-fill").each(function () {
                    $(this).animate({
                        width: $(this).attr('data-value') + "%"
                    }, 1000);
                });

                $window.off("scroll.progressBar");
            }
        });
    }

    if ($(".countup").length) {
        $(".countup .item").each(function () {

            var $this = $(this);

            $window.on("scroll.countup" + $this.index(".item"), function () {
                if ($(this).scrollTop() >= $this.offset().top - $window.height() + 150) {

                    $this.find(".item-text .count").countTo();

                    $window.off("scroll.countup" + $this.index(".item"));
                }
            });
        });
    }

    // Fire Circle Progress Plugin
    if ($(".progress-pie .pie").length) {
        $('.progress-pie .pie').each(function () {

            var $this = $(this),
                dataFill = $this.data("customfill"),
                EmptyFill = $this.data("customemptyfill"),
                dataValue = $this.data("customvalue");

            $this.circleProgress({
                size: 140,
                startAngle: 4.74,
                thickness: 4,
                fill: dataFill,
                emptyFill: EmptyFill,
                animation: {
                    duration: 1200
                }
            });

            $window.on("scroll.progress-pie" + $this.index(".pie"), function () {
                if ($(this).scrollTop() >= $this.offset().top - $window.height() + 220) {

                    $this.circleProgress({
                        value: dataValue
                    }).on('circle-animation-progress', function (event, progress) {
                        $this.find('strong').html(Math.round(dataValue * 100 * progress) + '%');
                    });

                    $window.off("scroll.progress-pie" + $this.index(".pie"));
                }
            });

        });
    }

    // Scroll to Top Button
    if (Html.attr("dir") === "ltr") {

        if ($window.scrollTop() >= 600) {
            ScrollToTop.css("right", "20px");
        } else {
            ScrollToTop.css("right", "-40px");
        }

    } else if (Html.attr("dir") === "rtl") {

        if ($window.scrollTop() >= 600) {
            ScrollToTop.css("left", "20px");
        } else {
            ScrollToTop.css("left", "-40px");
        }

    }

    $window.on("scroll", function () {
        if (Html.attr("dir") === "ltr") {

            if ($window.scrollTop() >= 600) {
                ScrollToTop.css("right", "20px");
            } else {
                ScrollToTop.css("right", "-40px");
            }

        } else if (Html.attr("dir") === "rtl") {

            if ($window.scrollTop() >= 600) {
                ScrollToTop.css("left", "20px");
            } else {
                ScrollToTop.css("left", "-40px");
            }

        }
    });

    ScrollToTop.on("click", function () {
        htmlBody.animate({
            scrollTop: 0
        }, 600);
    });

    // AOS Plugin
    AOS.init({
        once: true,
        disable: 'mobile'
    });

    // Nice Scroll Plugin
    Html.niceScroll({
        cursorcolor: Body.css("color"),
        background: "#f7f7f7",
        cursorborder: "none",
        cursorwidth: "4px",
        cursorborderradius: "3px",
        cursorminheight: 130,
        hidecursordelay: 1000,
        horizrailenabled: false,
        zindex: "6000"
    });

    // Fix NiceScroll Plugin After Loading
    $window.on("scroll", function () {
        Html.getNiceScroll().resize();
    });

});

$window.on("load", function () {

    "use strict";

    // Header Height
    headerContent.css({
        paddingTop: Nav.outerHeight()
    });

    // Preloader
    $(".preloader").delay(400).fadeOut(600, function () {
        $(this).remove();
    });

    // Filtering Portfolio
    $(".portfolio .portfolio-content ul.work-cat li").on("click", function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    });

    $(".portfolio .portfolio-content ul.work-cat li:first-of-type").on("click", function () {
        portfolioItems.removeClass("hidden").hide(0).show(0);
    });

    $(".portfolio .portfolio-content ul.work-cat li:not(:first-of-type)").on("click", function () {
        portfolioItems.hide(0).addClass("hidden");
        $('.' + $(this).data('value')).removeClass("hidden").show(0);
    });

    // Clients Feedback in Testimonials Section
    if ($("#testimonials").length) {

        var cardContent = $(".testimonials .testimonials-content .client-card > div:not(.arrows)"),
            clientImg = $(".testimonials .testimonials-content .client-card .client-img img"),
            clientName = $(".testimonials .testimonials-content .client-card .card-text .card-name"),
            feedbackDate = $(".testimonials .testimonials-content .client-card .card-text .feedback-date"),
            feedbackText = $(".testimonials .testimonials-content .client-card .card-text .feedback"),
            firstFeedback = $(".testimonials .all-clients .client:first-of-type"),
            clientFeedback = $(".testimonials .all-clients .client"),
            nextBtn = $(".testimonials .client-card .arrows #next"),
            prevBtn = $(".testimonials .client-card .arrows #prev"),
            clientIndex = 0,
            feedbackSpeed = 5000;

        firstFeedback.addClass("active").siblings(".client").removeClass("active");

        clientImg.attr({
            'src': firstFeedback.find(".client-img img").attr('src'),
            'alt': firstFeedback.find(".client-img img").attr('alt')
        });
        clientName.text(firstFeedback.find('.card-name').text());
        feedbackDate.text(firstFeedback.find('.feedback-date').text());
        feedbackText.text(firstFeedback.find('.feedback').text());

        // When Click on Client Image
        $(".testimonials .all-clients .client .client-img img").on("click", function () {
            cardContent.hide();

            clientIndex = $(this).parents(".client").index();

            $(this).parents(".client").addClass("active").siblings(".client").removeClass("active");

            clientImg.attr({
                'src': $(this).attr('src'),
                'alt': $(this).attr('alt')
            });
            clientName.text($(this).parent(".client-img").siblings(".card-text").children('.card-name').text());
            feedbackDate.text($(this).parent(".client-img").siblings(".card-text").children('.feedback-date').text());
            feedbackText.text($(this).parent(".client-img").siblings(".card-text").children('.feedback').text());

            cardContent.fadeIn(300);
            feedbackResetTiming();
        });

        // When Click on Next Button
        nextBtn.on("click", function () {
            cardContent.hide();

            if (clientIndex < clientFeedback.length - 1) {
                clientIndex += 1;
            } else {
                clientIndex = 0;
            }

            clientFeedback.eq(clientIndex).addClass("active").siblings(".client").removeClass("active");

            clientImg.attr({
                'src': clientFeedback.eq(clientIndex).find(".client-img img").attr('src'),
                'alt': clientFeedback.eq(clientIndex).find(".client-img img").attr('alt')
            });
            clientName.text(clientFeedback.eq(clientIndex).find('.card-name').text());
            feedbackDate.text(clientFeedback.eq(clientIndex).find('.feedback-date').text());
            feedbackText.text(clientFeedback.eq(clientIndex).find('.feedback').text());

            cardContent.fadeIn(300);
            feedbackResetTiming();
        });

        // When Click on Prev Button
        prevBtn.on("click", function () {
            cardContent.hide();

            if (clientIndex > 0) {
                clientIndex -= 1;
            } else if (clientIndex === 0) {
                clientIndex = clientFeedback.length - 1;
            }

            clientFeedback.eq(clientIndex).addClass("active").siblings(".client").removeClass("active");

            clientImg.attr({
                'src': clientFeedback.eq(clientIndex).find(".client-img img").attr('src'),
                'alt': clientFeedback.eq(clientIndex).find(".client-img img").attr('alt')
            });
            clientName.text(clientFeedback.eq(clientIndex).find('.card-name').text());
            feedbackDate.text(clientFeedback.eq(clientIndex).find('.feedback-date').text());
            feedbackText.text(clientFeedback.eq(clientIndex).find('.feedback').text());

            cardContent.fadeIn(300);
            feedbackResetTiming();
        });

        // slider timing
        function feedbackTiming() {
            nextBtn.click();
        }

        // slider autoplay
        var feedbackTimingRun = setInterval(function () {
            feedbackTiming();
        }, feedbackSpeed);

        function feedbackResetTiming() {

            clearInterval(feedbackTimingRun);

            feedbackTimingRun = setInterval(function () {
                feedbackTiming();
            }, feedbackSpeed);

        }

    }

});