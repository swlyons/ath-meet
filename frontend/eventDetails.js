/**
 * Created by eric on 12/1/15.
 */
$(function() {
	var eventId = getParameterByName("id");

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
		$("#owner").append($("<a></a>").append("@" + event['owner']));
		$.each(event['participants'], function(key, person) {
			$("#participants").append($("<li></li>").append($("<a></a>").append("@" + person)));
		});
		$("#details").append(event['details']);
	});
});