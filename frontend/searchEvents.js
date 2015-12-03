/**
 * Created by eric on 11/26/15.
 */
var events = [];

$(function() {
	var textBox = $("#tags");
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/allEvents.json", function(data) {
		textBox.attr("disabled", false).attr("placeholder", "Searching...");
		$.each(data, function(key, event) {
			events.push(event);
		});
		loadRows();
	});

	textBox.keyup(loadRows);
});

var loadRows = function() {
	$("#eventsTable").find("tbody").html("");
	$.each(events, function(key, event) {
		if (searchEventForSubstring(event, $("#tags").val().toLowerCase())) {
			addToTable(event);
		}
	});
};

var searchEventForSubstring = function(event, substring) {
	if (event["date"].toLowerCase().indexOf(substring) != -1) {
		return true;
	}
	if (event["time"])
	if (event["activity"].toLowerCase().indexOf(substring) != -1) {
		return true;
	}
	$.each(event["participants"], function(key, person) {
		if (person.indexOf(substring)) {
			return true;
		}
	});

	return false;
};

var addToTable = function(event) {
	var tr = $("<tr></tr>").attr("id", event["eventId"]);
	tr.append($("<td></td>").append(event["date"]));
	tr.append($("<td></td>").append(event["time"]));
	tr.append($("<td></td>").append(event["activity"]));
	tr.click(function() {
		window.location.href = "eventDetails.html?id=" + event["eventId"];
	});
	$("#eventsTable").append(tr);
};
