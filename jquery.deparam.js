(function ($) {

	// Extract parameters from url
	// Counterpart of $.param
	// Returns a Dictionary of key-value-pairs
	$.deparam = function(url) {
	
		var searchQueryIndex = url.indexOf('?');
		if (searchQueryIndex < 0) return {};
		var searchQuery = url.substr(searchQueryIndex + 1);

		var fragmentIndex = searchQuery.indexOf('#');
		if (0 < fragmentIndex) {
			searchQuery = searchQuery.substring(0, fragmentIndex);
		}

		var parameters = {};
		
		$.each(searchQuery.split('&'), function(index, parameter) {
			
			var keyValuePair = parameter.split('=');
			
			var field = keyValuePair[0];
			var value = keyValuePair[1];
			
			if (parameters.hasOwnProperty(field) == false) {
				parameters[field] = [];
			}
			
			parameters[field].push(value);
		});
		
		return parameters;
	};

	// Extract the fragment from url
	// Returns a String
	$.fragment = function(url) {
		
		var fragmentIndex = url.indexOf('#');
		
		if (0 < fragmentIndex) {
			return url.substr(fragmentIndex + 1);
		}

		return "";
	};
	
}(jQuery));
