(function ($) {

	$.deparam = function(url) { // Counterpart of $.param
	
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
	
}(jQuery));
