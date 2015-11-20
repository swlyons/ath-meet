/**
 * Created by eric on 11/18/15.
 */
$(function() {
	initializeClickFunctions();
});

initializeClickFunctions = function() {
	$("#leftFooter").click(function() {
		$("#eventsMenu").toggle();
	});

	$("#middleFooter").click(function() {
		window.location.href = "newsFeed.html";
	});

	$("#rightFooter").click(function() {
		window.location.href = "profile.html";
	});

	$("#myEvents").click(function() {
		window.location.href = "myEvents.html";
	});

	$("#searchEvents").click(function() {
		window.location.href = "searchEvents.html";
	});

	$("#createEvent").click(function() {
		window.location.href = "createEvent.html";
	});
};