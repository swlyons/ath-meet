/**
 * Created by eric on 12/1/15.
 */
$(function() {
	var eventId = 10;
	var event;
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/allEvents.json", function(events) {
		$.each(events, function(key, eachEvent) {
			if (eachEvent['eventId'] == eventId) {
				event = eachEvent;
				return false;
			}
		});

		$("#sport").append(event['activity']);
		$("#where").append(event['location']);
		$("#when").append(event['date'] + " at " + event['time']);
		var list = $("#participants");

		$.each(event['participants'], function(key, person) {
			list.append($("<li></li>").append(person));
		});
	});
});