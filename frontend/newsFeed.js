/**
 * Created by eric on 11/19/15.
 */
$(function() {
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/newsFeed.json", function(data) {
		var table = $("<table></table>").attr("id", "feedContent").attr("cellspacing", "10");

		$.each(data, function(key, val) {
			var row = $("<tr></tr>");
			var cell = $("<td></td>").attr("class", "feedCell");
			var image = $("<img />").attr("class", "profilePicture").attr("src", val["image"]);
			var link = $("<a></a>").attr("href", "profile.html?id=" + val["username"])
			link.append("@" + val["username"]);
			var label = $("<label></label>").append(link).append(": " + val["text"]);
			cell.append(image).append(label);
			row.append(cell);
			table.append(row);
		});

		$("#mainContent").append(table);
	});
});