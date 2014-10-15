(function($) {

	$.fn.iterateTable = function(callback) {

		// Obtain the selected object
		tableSelector = $(this);

		// For each table element in selector...
		$(tableSelector).each(function() {

			tableElement = $(this);

			// Ignore if the element type is not a table
			if (tableElement.is("table") == false) return; // aka continue

			// Collect all table field names...

			field_names = [];
			fieldSelector = $("tr > th", tableElement);

			// Skip if their are no field names
			if (fieldSelector.length == 0) return; // aka continue

			fieldSelector.each(function(column_index) {
				th = $(this); // table header object
				field_name = th.text() || column_index;
				if (field_name.length == 0) field_name = column_index;
				field_names[column_index] = field_name;
			});

			// For each table row...
			$("tr", tableElement).each(function(row_index) {

				tr = $(this); // table row object

				fields = {};

				// Buffer column data...
				$("td", tr).each(function(column_index) {

					td = $(this); // table data object

					field_name = field_names[column_index];
					fields[ field_name ] = td;
				});

				// Pass the column data to the callback function
				callback(row_index, tr, fields);
			});
		});

		return this;
	}
})(jQuery);
