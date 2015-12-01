/**
 * Created by eric on 11/30/15.
 */
$(function() {
	var sportNamesArray = [];
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/sports.json", function(sports) {
		$.each(sports, function(key, sport) {
			sportNamesArray.push(sport["name"]);
		})
	});

	var users = [];
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/users.json", function(data) {
		$.each(data, function(key, user) {
			users.push(user["username"]);
		});
	});

	var sportTextBox = $("#sport");
	sportTextBox.autocomplete({
		source: sportNamesArray
	});

	var dropDown = $("#eventType");
	dropDown.change(function() {
		var invites = $(".invites");
		var nonInvites = $(".nonInvites");
		switch (dropDown.val()) {
			case "public":
			case "random":
				invites.hide();
				nonInvites.show();
				break;
			case "private":
				nonInvites.hide();
				invites.show();
				break;
			default:
				nonInvites.hide();
				invites.hide();
				break;
		}
	});

	var userTextBox = $("#invites");
	userTextBox.autocomplete({
		source: users,
		select: function (event, ui) {
			var button = $("#addUser");
			if (users.indexOf(ui.item.value) == -1) {
				button.attr("disabled", true);
			} else {
				button.attr("disabled", false);
				button.focus();
			}
		}
	});

	$("#addUser").click(function() {
		//Hide the placeholder text
		$("#emptyTableText").hide();

		var tr = $("<tr></tr>");
		tr.append($("<td></td>").append(userTextBox.val()));
		tr.append($("<td></td>").attr("class", "removeRow").append($("<img />").attr("id", "removeImage").attr("src", "../images/redX.png")).click(function(){
			$(this).parent().remove();

			//If the table is now empty,
			if ($("#participants").find("tbody").find("tr").length == 0) {
				$("#emptyTableText").show();
			}
		}));
		$("#participants").prepend(tr);
		$("#addUser").attr("disabled", true);
		userTextBox.val("");
		userTextBox.focus();
	});

	$("#when").datetimepicker({
		format:'m/d/y g:i A',
		formatTime: 'g:i A',
		step: 30,
		ampm: true
	});

	$("#create").click(function() {
		if (validateSport(sportNamesArray) && validateLocation() && validateDate() && validateEventType()) {
			window.location.href = "newsFeed.html";
		}
	});


});

var validateSport = function(sportNamesArray) {
	var value = $("#sport").val();
	if (!value || sportNamesArray.indexOf(value) == -1) {
		alert("Please enter a valid sport");
		return false;
	}
	return true;
};

var validateLocation = function() {
	var value = $("#where").val();
	if (!value) {
		alert("Please enter a valid location");
		return false;
	}
	return true;
};

var validateDate = function() {
	var value = $("#when").val();
	if (!value || isNaN(Date.parse(value))) {
		alert("Please enter a valid date");
		return false;
	}
	return true;
};

var validateEventType = function() {
	var dropDown = $("#eventType").val();
	if (dropDown == "") {
		alert("Please select a valid event type");
		return false;
	} else if (dropDown == "public" || dropDown == "random") {
		return validateParticipantNumber();
	} else {
		return validateParticipants();
	}
};

var validateParticipantNumber = function() {
	var value = $("#participantNumber").val();
	if (!value || value < 1) {
		alert("Please enter a valid number of participants");
		return false;
	}
	return true;
};

var validateParticipants = function() {
	return true;
};
