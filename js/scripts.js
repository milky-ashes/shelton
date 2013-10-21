$.fn.extend({
  exists: function(callback) {
    if (this.length > 0) {
      if (callback != null) {
        callback.call(this);
      }
      return true;
    } else {
      return false;
    }
  }
});

jQuery(document).ready(function(){

	$('html').removeClass('no-js').addClass('js');
	$('<div class="popup-overlay"></div>').appendTo('body').hide();
	
	$('[data-link]').click(function(){
		$("[data-menu=" + $(this).data('link') + "]").addClass('open');
		$('.popup-overlay').show();
		
	});
	
	$('.popup-overlay').click(function(){
		$("[data-menu]").removeClass('open');
		$(this).hide();
	});

	
	
	

	$('[data-slider]').exists(function(){
		$(this).flexslider({
			animation: "slide",
			smoothHeight: true,
			controlNav: false
		});
	});
	
	
	$('.hero-carousel').exists(function(){
		var fixHeight = $(window).height();
		
		$('.hero-carousel article img').height(fixHeight);
		
		var fixWidth = $('.hero-carousel article img').width();
		
		$('.hero-carousel article').height(fixHeight).width(fixWidth -1);
		
		
		$('.hero-carousel').heroCarousel({
			easing: 'easeOutExpo'
		});
		
		$('.hero-carousel-nav').width(fixWidth - 1);
	});
	
	
        $('#zoom').jqzoom({
            zoomType: 'innerzoom',
            preloadImages: false,
            alwaysOn:false
        });

});



