(function ($) {

	$.fn.scrollTo = function(target, settings, callback) {

		// Based on: http://lions-mark.com/jquery/scrollTo/

		settings = $.extend({
			offsetTop:	64,
			offsetLeft:	64,
			// jQuery.animate parameters...
			speed:		"slow",
			easing:		"swing"
		}, settings);

		return this.each(function() {
			
			var scrollPane = $(this);

			var scrollX = target.offset().left + scrollPane.scrollLeft() + parseInt(settings.offsetLeft);
			var scrollY = target.offset().top + scrollPane.scrollTop() + parseInt(settings.offsetTop);

			scrollPane.animate({
					scrollLeft:	scrollX,
					scrollTop:	scrollY
				},
				settings.speed,
				settings.easing,
				function() {
					if (typeof callback == 'function') {
						callback.call(this);
					}
				}
			);
		});
	};

}(jQuery));
