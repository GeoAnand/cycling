!function(e){({initialised:!1,version:1,init:function(){this.initialised||(this.initialised=!0,this.loader(),this.products_slider(),this.testimonial(),this.popup(),this.toggle_menu(),this.product_count())},loader:function(){e(window).on("load",(function(){setTimeout((function(){e("body").addClass("load")}),500)}))},products_slider:function(){if(e(".cl-products-slider").length>0)new Swiper(".cl-products-slider .swiper-container",{slidesPerView:4,spaceBetween:24,loop:!0,autoplay:!0,speed:1500,breakpoints:{480:{slidesPerView:1,spaceBetween:24},767:{slidesPerView:1,spaceBetween:24},991:{slidesPerView:2,spaceBetween:24},1199:{slidesPerView:3,spaceBetween:24}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},testimonial:function(){if(e(".cl-testimonial").length>0)new Swiper(".cl-testimonial .swiper-container",{slidesPerView:1,spaceBetween:24,loop:!0,autoplay:!0,speed:1500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},popup:function(){e(".cl-play-icon").length>0&&e(".cl-popup-youtube").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})},toggle_menu:function(){e(".cl-header").length>0&&(window.innerWidth<=1199&&(e(".cl-menu-toggle").on("click",(function(i){event.stopPropagation(),e("body").toggleClass("cl-open-menu")})),e("body").on("click",(function(){e("body").removeClass("cl-open-menu")})),e(".cl-navbar").on("click",(function(){event.stopPropagation()})),e(".cl-navbar > ul > li").on("click",(function(i){e(".cl-mega-menu-ul").slideToggle()})),e(".cl-navbar>ul li").on("click",(function(){e(this).children(".cl-sub-menu,ul.cl-mega-menu").slideToggle()}))))},product_count:function(){e(".cl-add-count").on("click",(function(){e(this).prev().val()<5e4&&e(this).prev().val(+e(this).prev().val()+1)})),e(".cl-sub-count").on("click",(function(){e(this).next().val()>1&&e(this).next().val()>1&&e(this).next().val(+e(this).next().val()-1)}))}}).init()}(jQuery),(new WOW).init();new Swiper(".para_slider",{speed:800,loop:!0,parallax:!0,simulateTouch:!1,preventInteractionOnTransition:!0,autoplay:!1,navigation:{nextEl:".para_slider .next_swiper",prevEl:".para_slider .prev_swiper"}}),new Swiper(".client_slider",{slidesPerView:5,loop:!0,autoplay:{delay:7e3,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1},768:{slidesPerView:4},1024:{slidesPerView:5},1279:{slidesPerView:6}}}),new Swiper(".testi2_slider",{speed:800,loop:!0,slidesPerView:3,centeredSlides:!0,autoplay:{delay:6e3,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3}}});const e=document.querySelector(".scrollToTopBtn");e&&e.addEventListener("click",(function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}));const i=document.querySelector(".stat_section");if(i){new Waypoint({element:i,handler:function(e){rdn_counter(".counter_text",120)},offset:"75%"})}$(document).on("click",'[data-toggle="lightbox"]',(function(e){e.preventDefault(),$(this).ekkoLightbox()}));new Swiper(".event_slide_five",{speed:400,loop:!0,slidesPerView:3,spaceBetween:0,autoplay:{delay:8e3,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3},780:{slidesPerView:2},1279:{slidesPerView:4}}});!function(e){e(".js-fullheight").css("height",e(window).height()),e(window).resize((function(){e(".js-fullheight").css("height",e(window).height())}));e(".featured-carousel").owlCarousel({loop:!0,autoplay:!0,margin:30,animateOut:"fadeOut",animateIn:"fadeIn",nav:!0,dots:!0,autoplayHoverPause:!1,items:1,navText:["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})}(jQuery);