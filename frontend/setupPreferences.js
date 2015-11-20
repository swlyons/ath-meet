/**
 * Created by eric on 11/20/15.
 */
$(function() {
	var sportNamesArray = [];
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/sports.json", function(data) {
		$.each(data, function(key, value) {
			sportNamesArray.push(value["name"]);
		});
	});

	$("#tags").autocomplete({
		source: sportNamesArray
	});
});
