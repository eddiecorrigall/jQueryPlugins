(function ($) {

	$.fragment = function(url) {
		
		var fragmentIndex = url.indexOf('#');
		
		if (0 < fragmentIndex) {
			return url.substr(fragmentIndex + 1);
		}

		return false;
	}

}(jQuery));
