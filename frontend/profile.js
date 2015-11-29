/**
 * Created by eric on 11/27/15.
 */
$(function() {
	var stats = $("#stats");
	var avail = $("#avail");
	var statsContent = $("#statsContent");
	var availContent = $("#availContent");
	stats.click(function() {
		stats.attr("class", "clicked");
		avail.attr("class", "notClicked");
		availContent.hide();
		statsContent.show();
	});

	avail.click(function() {
		avail.attr("class", "clicked");
		stats.attr("class", "notClicked");
		statsContent.hide();
		availContent.show();
	});
});