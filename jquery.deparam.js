(function ($) {

	$.deparam = function(url) { // Counterpart of $.param
	
		searchQueryIndex = url.indexOf('?');
		
		if (searchQueryIndex < 0) {
			return {};
		}
		
		searchQuery = url.substr(searchQueryIndex + 1);
		
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
