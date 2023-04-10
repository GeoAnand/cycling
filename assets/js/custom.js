(function ($) {
	"use strict";
	var cycling = {
		initialised: false,
		version: 1.0,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			// Functions Calling

			this.loader();
			this.products_slider();
			this.testimonial();
			this.popup();
			this.toggle_menu();
			this.product_count();

		},
        

        // loader start
        loader: function () { 
            $(window).on('load', function() {
                var load;
                setTimeout(function() {
                    $('body').addClass('load');
                }, 500);
            });
        },
        // loader end
        // products slider start
        products_slider: function () { 
            if($('.cl-products-slider').length > 0){
                var swiper = new Swiper('.cl-products-slider .swiper-container', {
                    slidesPerView: 4,
                    spaceBetween: 24, 
                    loop:true,
                    autoplay:true,
                    speed:1500,
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 24
                        },
                        767: {
                            slidesPerView: 1,
                            spaceBetween: 24
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 24
                        },
                        1199: {
                            slidesPerView: 3,
                            spaceBetween: 24
                        },
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }
        },
        // products slider end
        // testimonial slider start
        testimonial: function () { 
            if($('.cl-testimonial').length > 0){
                var swiper = new Swiper('.cl-testimonial .swiper-container', {
                    slidesPerView: 1,
                    spaceBetween: 24, 
                    loop:true,
                    autoplay:true,
                    speed:1500,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }
        },
        // testimonial slider end
        // popup start
        popup: function () {
            if($('.cl-play-icon').length > 0){
                $('.cl-popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
                });
            };
        },
		// popup end
        // mobile menu start
        toggle_menu: function () {
            if($('.cl-header').length > 0){
                var w = window.innerWidth;
                if (w <= 1199) {
                    $(".cl-menu-toggle").on('click',function(e){
                        event.stopPropagation();
                        $("body").toggleClass("cl-open-menu");
                    });
                    $("body").on('click',function(){
                        $("body").removeClass("cl-open-menu");
                    });
                    $(".cl-navbar").on('click',function(){
                        event.stopPropagation();
                    });
                    $(".cl-navbar > ul > li").on('click', function (e) {
                        $(".cl-mega-menu-ul").slideToggle();
                    });
                    $(".cl-navbar>ul li").on('click',function(){
                        $(this).children(".cl-sub-menu,ul.cl-mega-menu").slideToggle();
                    });
                }
            };
        },
		// mobile menu end
        // quantity start
        product_count: function () {
            $('.cl-add-count').on('click',function(){
                if ($(this).prev().val() < 50000) {
                    $(this).prev().val(+$(this).prev().val() + 1);
                }
            });
            $('.cl-sub-count').on('click',function(){
                if ($(this).next().val() > 1) {
                    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
                }
            });
        },
        // quantity end
    };	
    cycling.init();
})(jQuery);	
new WOW().init();
// Contact Form Submission
function checkRequire(formId , targetResp){
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object')? $(formId):$('#'+formId);
    target.find('input , textarea , select').each(function(){
        if($(this).hasClass('require')){
            if($(this).val().trim() == ''){
                check = 1;
                $(this).focus();
                $(this).parent('div').addClass('form_error');
                targetResp.html('You missed out some fields.');
                $(this).addClass('error');
                return false;
            }else{
                $(this).removeClass('error');
                $(this).parent('div').removeClass('form_error');
            }
        }
        if($(this).val().trim() != ''){
            var valid = $(this).attr('data-valid');
            if(typeof valid != 'undefined'){
                if(!eval(valid).test($(this).val().trim())){
                    $(this).addClass('error');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                }else{
                    $(this).removeClass('error');
                }
            }
        }
    });
    return check;
}
$(".submitForm").on('click', function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm , errroTarget);
    
    if(check == 0){
       var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type' , _this.attr('form-type'));
        $.ajax({
            method : 'post',
            url : 'ajaxmail.php',
            data:formDetail,
            cache:false,
            contentType: false,
            processData: false
        }).done(function(resp){
            console.log(resp);
            if(resp == 1){
                targetForm.find('input').val('');
                targetForm.find('textarea').val('');
                errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
            }else{
                errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
            }
        });
    }
});

// custom - js (Slider)
/* parallax slider script on Home 1*/
const para_slider = new Swiper('.para_slider', {
    speed: 800,
    loop: true,
    parallax: true,
    simulateTouch: false,
    preventInteractionOnTransition: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    // If we need pagination
    navigation: {
        nextEl: '.para_slider .next_swiper',
        prevEl: '.para_slider .prev_swiper',
    },

});

   /* client slider script */
   const client_slider = new Swiper(".client_slider", {
    slidesPerView: 5,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
        1279: {
            slidesPerView: 6,
        },
    },
});

/* testimonial slider  */
const testi2_slider = new Swiper('.testi2_slider', {
    speed: 800,
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        }
    },

});

/* scroll to top script */
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", scrollToTop);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

//scroll to top appear
// When the user scrolls down 200px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.opacity = "1";
    } else {
        scrollToTopBtn.style.opacity = "0";
    }
}

/* counter init with waypoint */
    /* trigger waypoints on the element with class .stat_section */
    const counterSection = document.querySelector('.stat_section');
    if (counterSection) {
        const counter = new Waypoint({
            element: counterSection,
            handler: function (direction) {
                /* variable:class,duration time= default 5 (seconds) */
                rdn_counter(".counter_text", 120);
            },
            offset: '75%',
        })

    }

    // lightbox

    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });

    // hide gallery

    function togglePara() {
        const secondPara = document.getElementById("second-para");
        const readMoreBtn = document.querySelector(".dir-btn");
      
        if (secondPara.style.display === "block") {
          secondPara.style.display = "none";
          readMoreBtn.textContent = "Load More";
        } else {
          secondPara.style.display = "block";
          readMoreBtn.textContent = "Load Less";
        }
      }

    //   world heritage
    function worldheritage() {
        const secondPara = document.getElementById("world_heritage");
        const readMoreBtn = document.querySelector(".wd-btn");
      
        if (secondPara.style.display === "block") {
          secondPara.style.display = "none";
          readMoreBtn.textContent = "Load More";
        } else {
          secondPara.style.display = "block";
          readMoreBtn.textContent = "Load Less";
        }
      }

    //   Madras Day
    function madrasday() {
        const secondPara = document.getElementById("madras_day");
        const readMoreBtn = document.querySelector(".Madras-btn");
      
        if (secondPara.style.display === "block") {
          secondPara.style.display = "none";
          readMoreBtn.textContent = "Load More";
        } else {
          secondPara.style.display = "block";
          readMoreBtn.textContent = "Load Less";
        }
      }

      //   Book Launch
    function booklaunch() {
        const secondPara = document.getElementById("book_launch");
        const readMoreBtn = document.querySelector(".bl-btn");
      
        if (secondPara.style.display === "block") {
          secondPara.style.display = "none";
          readMoreBtn.textContent = "Load More";
        } else {
          secondPara.style.display = "block";
          readMoreBtn.textContent = "Load Less";
        }
      }

    // slider - youtube
    /* event slider script in home 5 */
    const event_slide_five = new Swiper(".event_slide_five", {
        speed: 400,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            780: {
                slidesPerView: 2,
            },
            1279: {
                slidesPerView: 4,
            },
        }
    });
    
    // Define isMobileDevice() function
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
      }

    if (isMobileDevice()) {
        event_slide_five.autoplay.stop();
      }