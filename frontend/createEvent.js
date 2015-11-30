/**
 * Created by eric on 11/30/15.
 */
$(function() {
	var sportNamesArray = [];
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/sports.json", function(sports) {
		$.each(sports, function(key, sport) {
			sportNamesArray.push(sport["name"]);
		})
	});

	var textBox = $("#sport");
	textBox.autocomplete({
		source: sportNamesArray
	});

	$("#when").datepicker({
		showButtonPanel: true
	});
});