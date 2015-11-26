/**
 * Created by eric on 11/26/15.
 */
var events = [];

$(function() {
	var textBox = $("#tags");
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/myEvents.json", function(data) {
		textBox.attr("disabled", false).attr("placeholder", "Searching...");
		textBox.keyup();
		$.each(data, function(key, event) {
			events.push(event);
		});
	});

	textBox.keyup(loadRows);
});

var loadRows = function() {
	$("#eventsTable").find("tbody").html("");
	$.each(events, function(key, event) {
		if (searchEventForSubstring(event, $("#tags").val())) {
			addToTable(event);
		}
	});
};

var searchEventForSubstring = function(event, substring) {
	if (event['date'].indexOf(substring) != -1) {
		return true;
	}
	if (event['activity'].indexOf(substring) != -1) {
		return true;
	}
	$.each(event['participants'], function(key, person) {
		if (person.indexOf(substring)) {
			return true;
		}
	});

	return false;
};

var addToTable = function(event) {
	var tr = $("<tr></tr>").attr("id", event['id']);
	tr.append($("<td></td>").append(event["date"]));
	tr.append($("<td></td>").append(event["time"]));
	tr.append($("<td></td>").append(event["activity"]));
	tr.click(function() {
		console.log(tr.attr("id"));
	});
	$("#eventsTable").append(tr);
};
