(function ($) {
	
	$.fn.hasAttr = function(attrName) {
		return (!!$(this).attr(attrName));
	};

}(jQuery));
