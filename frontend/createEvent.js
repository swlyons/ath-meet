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
		window.location.href = "newsFeed.html";
	});
});