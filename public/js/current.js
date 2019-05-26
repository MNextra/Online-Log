/*!
 * Custom Theme JavaScript
 */
jQuery(document).ready(function() {
    "use strict";
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').on('click', function() {
        $('.navbar-toggle:visible').click();
    }); 
    
    $('.header-navbar .navbar').sticky({ topSpacing: 0 });
      
    // OWL slider
    if (jQuery('.owl-carousel').size() > 0) {
        
        var owl = $("#owl-journal, #owl-intro");
        
        owl.owlCarousel({
            items : 1,
            itemsDesktopSmall : [1200,1],
            itemsTablet: [768,1],
            singleItem : false,
            stopOnHover : true,
            navigation : true,
            pagination: false,
            paginationSpeed : 1000,
            goToFirstSpeed : 2000,
            autoHeight : true,
            dots: false,
            autoPlay : false,
            touchDrag : false,
            mouseDrag : false,
            transitionStyle:"fade"
        });
    }
    /* ---------------------------------------------
     WoW plugin
    --------------------------------------------- */
    new WOW().init({
      mobile: true,
    });
    // GT3 Popup Video
    popup_video ();

    gt3_menu_line();
    $(window).scroll(function() {
        gt3_menu_line();
    });
    one_page_scroll();
    
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 81
    })
    // GT3 Popup Video
    function popup_video () {
        if (jQuery(".swipebox-video, .swipebox").length) {
            jQuery( '.swipebox-video, .swipebox' ).swipebox( {
                useCSS : true, // false will force the use of jQuery for animations
                useSVG : true, // false to force the use of png for buttons
                initialIndexOnArray : 0, // which image index to init when a array is passed
                hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
                removeBarsOnMobile : true, // false will show top bar on mobile devices
                hideBarsDelay : 3000, // delay before hiding bars on desktop
                videoMaxWidth : 1140,
                autoplayVideos: true,
                beforeOpen: function() {}, // called before opening
                afterOpen: null, // called after opening
                afterClose: function() {}, // called after closing
                loopAtEnd: false // true will return to the first image after the last image is reached
            } );
        }
    }
    // create the back to top button
    $('body').prepend('<a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>');

    var amountScrolled = 300;

    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    $('a.back-to-top, a.simple-back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    /* Currency Start */
    jQuery('.wrap_white > i').on("tap click", function() {
        var element = jQuery(this);
        if (element.hasClass('is-active')) {
            element.parents('.wrap_white').find('.opened_area').slideUp(200);
            element.removeClass('is-active');
        }else{
            element.parents('.wrap_white').find('.opened_area').slideDown(200);
            element.addClass('is-active');
        }
    });
    jQuery('.opened_area li').on('tap click', function() {
        jQuery(this).parents('.wrap_white').find('.form-group_controls-icon').removeClass('is-active');
        jQuery(this).parents('.wrap_white').find('.opened_area').slideUp(200);
        jQuery(this).parents('.wrap_white').find('.open_form_currency').text(jQuery(this).text());
    });
    /* Currency End */

    // menu line
    function gt3_menu_line(){
        var menu = jQuery('.collapse.navbar-collapse.header_side.menu_line_enable > ul');
        if (menu.length) {
            menu.each(function(){
                var menu = jQuery(this);
                var current = '';
                if (!menu.find('.menu_item_line').length) {
                    menu.append('<span class="menu_item_line"></span>');
                }                
                var menu_item = menu.find('> .menu-item');
                var currentItem = menu.find('> .menu-item.active');
                var currentItemParent = menu.find('> .current-menu-ancestor');
                var line = menu.find('.menu_item_line');
                if (currentItem.length || currentItemParent.length) {
                    current = currentItem.length ? currentItem : (currentItemParent.length ? currentItemParent : '');
                    line.css({width: current.find('>a').outerWidth()});
                    line.css({left: current.find('>a').offset().left - menu.offset().left});
                }

                menu_item.mouseenter(function(){
                    line.css({width: jQuery(this).find('> a').outerWidth()});
                    line.css({left: jQuery(this).find('> a').offset().left - jQuery(this).parent().offset().left});
                });

                menu.mouseleave(function(){
                    if (current.length) {
                        line.css({width: current.find('> a').outerWidth()});
                        line.css({left: current.find('> a').offset().left - menu.offset().left});
                    } else {
                        line.css({width:'0'});
                        line.css({left:'100%'});
                    }
                });


            })
        }
    }
});

function one_page_scroll(){
  var sticky_header = jQuery('.header-navbar .sticky-wrapper');
  var sticky_header_height = 0;
  var offset = 0;
  var windowW = jQuery(window)
  if (sticky_header.length && windowW.width() >= 1200) {    
    sticky_header_height = sticky_header.height();
  }
  
  jQuery('#mainNav li > a[href*="#"]:not([href="#"])').on('click',function(e){
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = jQuery(this.hash);
      if (target.length) {
        if (target.offset().top < 300) {
          offset = 0;        
        }else{
          offset = target.offset().top - sticky_header_height + 10
        }
            jQuery('html, body').animate({
              scrollTop: (offset)
            }, 1000);
            return false;
        }
    }
  })
}

jQuery(window).load(function(){
	"use strict";
});

jQuery(window).resize(function() {
	"use strict";
});

// Call & init
$(document).ready(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    // Adjust the slider
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
    // Bind dragging events
    drags(cur.find('.handle'), cur.find('.resize'), cur);
  });
});

$(window).resize(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
  });
});

function drags(dragElement, resizeElement, container) {
    
  // Initialize the dragging event on mousedown.
  dragElement.on('mousedown touchstart', function(e) {
    
    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');
    
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
    
    // Get the initial position
    var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - startX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();
 
    // Set limits
    minLeft = containerOffset + 10;
    maxLeft = containerOffset + containerWidth - dragWidth - 10;
    
    // Calculate the dragging distance on mousemove.
    dragElement.parents().on("mousemove touchmove", function(e) {
        
      // Check if it's a mouse or touch event and pass along the correct value
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

      leftValue = moveX + posX - dragWidth;
      
      // Prevent going off limits
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      
      // Translate the handle's left value to masked divs width.
      widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
            
      // Set the new values for the slider and the handle. 
      // Bind mouseup events to stop dragging.
      $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function(){
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(e){
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
  });
}
