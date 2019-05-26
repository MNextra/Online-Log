/* SORTING */

jQuery(window).load(function () {
    "use strict";
    if (jQuery('.block_grid-isotope').size() > 0) {
        jQuery('.block_grid-isotope').isotope('reLayout');
        setTimeout("jQuery('.block_grid-isotope').isotope('reLayout')", 500);
    } else {
    }
    jQuery('.gallery_filter a').on('click', function () {
        jQuery('.block_grid-isotope').isotope('reLayout');
        setTimeout("jQuery('.block_grid-isotope').isotope('reLayout')", 800);
    });
});
jQuery(window).resize(function () {
    "use strict";
    if (jQuery('.block_grid-isotope').size() > 0) {
        jQuery('.block_grid-isotope').isotope('reLayout');
    } else {
    }
});

jQuery.fn.portfolio_addon = function(addon_options) {
	"use strict";
	//Set Variables
	var addon_el = jQuery(this),
		addon_base = this,
		img_count = addon_options.items.length,
		img_per_load = addon_options.load_count,
		$newEls = '',
		loaded_object = '',
		$container = jQuery('.image-grid');
	
	jQuery('.load_more_works').on( 'click', function(){
		$newEls = '';
		loaded_object = '';									   
		var loaded_images = $container.find('.added').size();
		if ((img_count - loaded_images) > img_per_load) {
			var now_load = img_per_load;
		} else {
			var now_load = img_count - loaded_images;
		}
		
		if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

		if (loaded_images < 1) {
			var i_start = 1;
		} else {
			var i_start = loaded_images+1;
		}

        if (now_load > 0) {			
			if (addon_options.type == 1) {
				//Wide Portfolio
				for (var i = i_start-1; i < i_start+now_load-1; i++) {
					loaded_object = loaded_object + '<div class="block_grid-item element added"><div class="item_wrapper"><div class="block_img"><a class="photozoom" href="'+ addon_options.items[i].url +'"></a><div class="caption"><div class="info"><h6>'+ addon_options.items[i].title +'</h6><em>'+ addon_options.items[i].subtitle +'</em></div></div><img src="'+ addon_options.items[i].src +'" alt="" /></div></div></div>';
				}
				
			} else {}
			  
			$newEls = jQuery(loaded_object);
			$container.isotope('insert', $newEls, function() {
				$container.isotope('reLayout');							
			});			
		}
	});
} 