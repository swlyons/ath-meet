/**
 * Created by eric on 11/26/15.
 */
$(function() {
	var events = [];
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/allEvents.json", function(data) {

	});

	$("#tags".on('input', function() {
		var button = $("#addSport");
		if (sportNamesArray.indexOf(textBox.val()) == -1) {
			button.attr("disabled", true);
		} else {
			button.attr("disabled", false);
			button.focus();
		}
	});
});
