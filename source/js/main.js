// FUNCTIONS
// ---------------------------------------------------------------------------

// Toggles tabs, ensures it's relative to the triggering element so that
// multiple tab components can be used on a page without unintentional
// triggering of other elements
// Accepts: jQuery objects
function tabToggle(nav, tab) {
	// reset active nav class and aria attributes
	var navControls = nav.parents('.tab-nav-wrapper').find('.tab-nav-link');
	navControls.removeClass('active');
	navControls.attr('aria-selected', 'false');

	// then activate the selected ones
	nav.addClass('active');
	nav.attr('aria-selected', 'true');

	// control active tab display
	tab.parents('.tab-pane-wrapper').find('.tab-pane').removeClass('active');
	tab.addClass('active');
}

// Checks if tab nav is smaller than available area, if so add class to help
// align objects from the beginning rather than the center
// Accepts: jQuery object
function tabNavCheck(nav){
	var navWidth = nav.width();
	var navInnerWidth = 0;

	// measure each nav item
	nav.find('.tab-nav-item').each(function(){
		var itemWidth = parseInt($(this).width());
		navInnerWidth += itemWidth;
	});

	// if larger, trigger alternate styles
	if (navInnerWidth >= navWidth) {
		nav.addClass('nav-exceeded');
	} else {
		nav.removeClass('nav-exceeded');
	}
}

// Scroll to and focus an element, built for assisting keyboard navigation
// Accepts: jQuery object
function focusScroll(el) {
	var verticalOffset = 170;
	var timeInMs = 200;
	$('html, body').animate({scrollTop: el.offset().top - verticalOffset}, timeInMs, 'linear');
	el.focus();
}

// EVENTS
// ---------------------------------------------------------------------------

$(document).ready(function(){

	// Tab change listener
	$('.js-tab-control').click(function(event){
		event.preventDefault(); // keep the url clean
		var _this = $(this);
		var tab = _this.parents('.tab').find(_this.attr('href')); // find matching tab
		tabToggle(_this, tab); //send jQuery objects to function
	});

	// Tab nav overflow enable, allow multiple instances
	$('.tab-nav-wrapper').each(function(){
		tabNavCheck($(this));
	});

	// Trigger scroll and focus, accessibility assist
	$('.js-link-focus').click(function(event){
		event.preventDefault();
		var _this = $(this);
		var target = $(_this.attr('href'));
		focusScroll(target);
	});
});

$(window).resize(function(){
	// On resize, check tab nav
	$('.tab-nav-wrapper').each(function(){
		tabNavCheck($(this));
	});
})

