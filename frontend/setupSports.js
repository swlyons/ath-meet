$(function() {
	var sportNamesArray = [];
	var sportImageArray = [];
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/sports.json", function(sports) {
		$.each(sports, function(key, sport) {
			sportNamesArray.push(sport["name"]);
			sportImageArray.push(sport["image"]);
		});
	});

	var textBox = $("#tags");
	textBox.autocomplete({
		source: sportNamesArray,
		select: function (event, ui) {
			var button = $("#addSport");
			if (sportNamesArray.indexOf(ui.item.value) == -1) {
				button.attr("disabled", true);
			} else {
				button.attr("disabled", false);
				button.focus();
			}
		}
	});

	$("#addSport").click(function() {
		//Hide the placeholder text
		$("#emptyTableText").hide();

		var tr = $("<tr></tr>");
		tr.append($("<td></td>").append($("<img />").attr("class", "sportImage").attr("src", sportImageArray[sportNamesArray.indexOf(textBox.val())])));
		tr.append($("<td></td>").append(textBox.val()));
		tr.append($("<td></td>").attr("class", "removeRow").append($("<img />").attr("id", "removeImage").attr("src", "../images/redX.png")).click(function(){
			$(this).parent().remove();

			//If the table is now empty,
			if ($("#selectedSports").find("tbody").find("tr").length == 0) {
				$("#emptyTableText").show();
			}
		}));
		$("#selectedSports").prepend(tr);
		$("#addSport").attr("disabled", true);
		textBox.val("");
		textBox.focus();
	});

	$("#continue").click(function() {
		window.location.href = "newsFeed.html";
	});
});