/**
 * Created by eric on 11/19/15.
 */
$(function() {
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/myEvents.json", function(data) {
		var table = $("<table></table>").attr("id", "eventList").attr("cellspacing", "10");

		$.each(data, function(key, event) {
			var row = $("<tr></tr>");
			var cell = $("<td></td>").attr("class", "eventCell");
			var label = $("<label></label>").append(event["date"] + " at " + event["time"] + "<br />" + event["activity"] + " with");
			label.append(formatPeople(event["participants"]));
			cell.append(label);
			row.append(cell);
			table.append(row);
		});

		$("#mainContent").append(table);
	});
});

var formatPeople = function(people) {
	if (people.length == 0) {
		return "";
	}
	var result = "";
	for (var i = 0; i<people.length; i++) {
		if (i != 0) {
			if (i == people.length-1) {
				result += " and"
			} else {
				result += ",";
			}
		}
		result += " <a href='profile.html?id=" + people[i] + "'>@" + people[i] + "</a>";
	}
	return result;
};

