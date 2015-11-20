/**
 * Created by eric on 11/19/15.
 */
$(function() {
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/myEvents.json", function(data) {
		var table = $("<table></table>").attr("id", "eventList").attr("cellspacing", "10");

		$.each(data, function(key, val) {
			var row = $("<tr></tr>");
			var cell = $("<td></td>").attr("class", "eventCell");
			var label = $("<label></label>").append(val["date"] + " at " + val["time"] + "<br />" + val["activity"] + " with");
			cell.append(label);
			row.append(cell);
			table.append(row);
		});

		$("#mainContent").append(table);
	});
});

