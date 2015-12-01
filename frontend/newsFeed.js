/**
 * Created by eric on 11/19/15.
 */
$(function() {
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/newsFeed.json", function(newsFeedData) {
		$.getJSON("http://cs256-websolutions.com/ath-meet/backend/users.json", function(usersData) {
			var userImageMap = transformUserData(usersData);

			var table = $("<table></table>").attr("id", "feedContent").attr("cellspacing", "10");

			$.each(newsFeedData, function(key, feedItem) {
				var row = $("<tr></tr>");
				var cell = $("<td></td>").attr("class", "feedCell");
				var image = $("<img />").attr("class", "profilePicture").attr("src", userImageMap[feedItem["username"]]);
				var link = $("<a></a>").attr("href", "profile.html?username=" + feedItem["username"]);
				var imageLink = link.clone();
				imageLink.append(image);
				link.append("@" + feedItem["username"]);
				var label = $("<label></label>").append(link).append(": " + feedItem["text"]);
				cell.append(imageLink).append(label);
				row.append(cell);
				table.append(row);
			});

			$("#mainContent").append(table);
		});
	});
});

var transformUserData = function(data) {
	var userImageMap = {};
	$.each(data, function(key, user) {
		userImageMap[user['username']] = user['image'];
	});
	return userImageMap;
};