/**
 * Created by eric on 12/1/15.
 */
$(function() {

	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/allEvents.json", function(eventsData) {
		$.getJSON("http://cs256-websolutions.com/ath-meet/backend/users.json", function(usersData) {
			var userImageMap = transformUserData(usersData);

			var table = $("<table></table>").attr("id", "matchUpTable").attr("cellspacing", "10");

			$.each(eventsData, function(key, event) {
				var row = $("<tr id=\'event"+event["eventId"]+"\'></tr>");
				var cell = $("<td class='matchUpCell'></td>");

				var innerTable = $("<table></table>");
				var topRow = $("<tr></tr>");
				var topCell = $("<td colspan='2'></td>");
				var image = $("<img />").attr("class", "profilePicture").attr("src", userImageMap[event['owner']]);
				var profileLink = $("<a></a>").attr("href", "profile.html?username=" + event['owner']);
				var imageLink = profileLink.clone();
				imageLink.append(image);
				topCell.append(imageLink);

				profileLink.append("@" + event['owner']);
				var eventLink = $("<a>View Event Details</a>").attr("href", "eventDetails.html?id=" + event['eventId']);
				var label = $("<label></label>").append(profileLink);

				label.append(": Want to play " + event['activity'].toLowerCase() + " at " + event['location'] + " " + event['date'] + " at " + event['time'] + "? ").append(eventLink).append($("<br/>"));
				topCell.append(label);

				topRow.append(topCell);
				innerTable.append(topRow);

				var bottomRow = $("<tr></tr>");
				var bottomLeftCell = $("<td class='buttonTd'></td>");
				var bottomRightCell = $("<td class='buttonTd'></td>");
				var accept = $("<button class='answerButton accept' onclick=\'removeRow(\"event"+event["eventId"]+"\", \"accept\")\'>Accept</button>").attr("id", "accept" + event["eventId"]);
				var ignore = $("<button class='answerButton ignore' onclick=\'removeRow(\"event"+event["eventId"]+"\", \"ignore\")\'>Ignore</button>").attr("id", "ignore" + event["eventId"]);
				bottomLeftCell.append(accept);
				bottomRightCell.append(ignore);
				bottomRow.append(bottomLeftCell);
				bottomRow.append(bottomRightCell);

				innerTable.append(bottomRow);

				cell.append(innerTable);
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

function removeRow(id, message){
    var confirmationDialogBox = "<div id='confirmationDialogBox'><p>Are you sure you want to "+message+"?</p></div>";
    $("html").append(confirmationDialogBox);
    $("#confirmationDialogBox").dialog({
        width: 500,
        buttons:{
            "Yes": function () {
                $("#"+id).remove();
                $(this).dialog("close");
            },
            "No": function (){
                $(this).dialog("close");
            }
        },
        close: function() {$("#confirmationDialogBox").remove();},
        closeOnExcape: true,
        modal: true,
        title: "Confirmation"        
    });

}

