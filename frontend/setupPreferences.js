/**
 * Created by eric on 11/20/15.
 */
$(function() {
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/sports.json");
	var availableTags = [

	];

	$("#tags").autocomplete({
		source: availableTags
	});
});
