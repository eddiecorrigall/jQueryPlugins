/* REQUIRES:
 * 	jQuery jquery.cookie.js
 *
 * USE:
 * 	$(document).ready(function() {
 *		$("form").rememberForm();
 *	});
 */

(function($) {

	$.fn.rememberForm = function() {

		// Set default values
		days = 365;

		// Obtain the selected object
		formSelector = $(this);

		// Ignore if the element type was not a form
		if (formSelector.is("form") == false) return this;

		// For each child form element in the form(s)...
		$(formSelector).each(function() {
		
			// Obtain the form object and name
			formElement = $(this);
			formName = formElement.attr("name") || '';

			// For each child input element of the form...
			$(":input", formElement).each(function() {

				// Obtain the input object and name
				inputElement = $(this);
				inputName = inputElement.attr("name");

				// Validate input name, it must exist!
				if (typeof inputName == 'undefined') return; // aka continue
				if (inputName.length == 0) return; // aka continue
				
				// Build a key to store in cookies
				key = (formName.length > 0)
					? (formName + '.' + inputName)
					: inputName;
				
				// If no key can be made, skip
				if(key.length == 0) return; // aka continue
				
				// Get past data from cookies
				if($.cookie(key)) { 
					inputElement.val($.cookie(key));
				}

				// Bind a new event to the input,
				// Upon change, store the value in cookies...
				inputElement.bind("change", function() {
					$.cookie(key, inputElement.val(), {
						"path" : "/",
						"expires" : days
					});
				});
			});
		});

		return this;
	};
})(jQuery);