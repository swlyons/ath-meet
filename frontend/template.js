/**
 * Created by eric on 11/18/15.
 */
$(function() {
	initializeClickFunctions();
});

initializeClickFunctions = function() {
	$("#leftHeader").click(function() {
		window.history.back();
	});

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

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}