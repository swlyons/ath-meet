/**
 * Created by eric on 11/18/15.
 */
window.onload = function() {


	$("#leftFooter").click(function() {
		alert("Events!");
	});

	$("#middleFooter").click(function() {
		window.location.href = "newsFeed.html";
	});

	$("#rightFooter").click(function() {
		window.location.href = "profile.html";
	});
};