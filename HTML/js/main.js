(function($) {
    'use strict';
	
	jQuery(document).ready(function(){
		
		/* START STICKY MENU JS */
		$(window).on('scroll',function(){
			if($(window).scrollTop()>70) {
			$('.navbar').addClass('nav-change');
			}
			else{
				$('.navbar').removeClass('nav-change');
			}
		}); 
		//smooth-scrolling
		$(window).on('scroll',function(){
			if($(window).scrollTop()>70) {
			$('.navbar').addClass('nav-change');
			}
			else{
				$('.navbar').removeClass('nav-change');
			}
		}); 
		//smooth-scrolling
			$('a[href*="#"]')
			.click(function(event) {
			if (
			  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			  && 
			  location.hostname == this.hostname
			) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			  if (target.length) {
				event.preventDefault();
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 2500, function() {
				  var $target = $(target);
				  $target.focus();
				  if ($target.is(":focus")) { 
					return false;
				  } else {
					$target.attr('tabindex','-1'); 
					$target.focus();
				  };
				});
			  }
			}
		  });
			
			
			$(window).on('scroll',function(){
		    if($(this).scrollTop() > 150){
		    	$('.menu-top').addClass('sticky_menu');
			}
			else{
			   $('.menu-top').removeClass('sticky_menu');
			}
			});

		/* END STICKY MENU JS */
		
		/* START MOBILE-MENU  */
			$('.main_menu').slicknav({
				prependTo:".mobile-nav",
			});
		/* START MOBILE-MENU  */
		 
		/* START ISOTOP JS */
			var $grid = $('.work_content_area').isotope({
			  // options
			});
			// filter items on button click
			$('.work_filter').on( 'click', 'li', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});
			// filter items on button click
			$('.work_filter').on( 'click', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active')
			});
		/* END ISOTOP JS */
		
		/* START LIGHTBOX */
		
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			});
		
		/* END LIGHTBOX JS */
		
		/* START COUNDOWN JS */
			$('#counter_area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/* END COUNDOWN JS */
		
		/* START TESTIMONIAL JS */
			$(".testimonial_area").owlCarousel({
				loop:true,
				navText:false,
				autoplayHoverPause: false,
				autoplay: 6000,
				smartSpeed: 1000,
				margin: 30,
				autoPlay:true,
				items:1,
				responsive:{
					320:{
						items:1
					},
					767:{
						items:1
					},
					991:{
						items:1
					},
					1200:{
						items:1
					}
				}
				
			});
		/* END TESTIMONIAL JS */	
	});	
	
		/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.animated-bar').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/
		
})(jQuery);