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

	var users = [];
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/users.json", function(data) {
		$.each(data, function(key, user) {
			users.push(user["username"]);
		});
	});

	var sportTextBox = $("#sport");
	sportTextBox.autocomplete({
		source: sportNamesArray
	});

	var userTextBox = $("#who");
	userTextBox.autocomplete({
		source: users
	});

	$("#when").datetimepicker({
		format:'m/d/y g:i A',
		formatTime: 'g:i A',
		step: 30,
		ampm: true
	});
});