/**
 * Created by eric on 11/20/15.
 */
$(function() {
	initCheckboxTable();

	var sportNamesArray = [];
	var sportImageArray = [];
	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/sports.json", function(data) {
		$.each(data, function(key, value) {
			sportNamesArray.push(value["name"]);
			sportImageArray.push(value["image"]);
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

var initCheckboxTable = function() {
	var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	var table = $("#checkBoxTable");
	var head = $("<thead></thead>");
	var header = $("<tr></tr>");
	header.append($("<th></th>").append("Day"));
	header.append($("<th></th>").append("Morning (before noon)"));
	header.append($("<th></th>").append("Afternoon (noon to 5)"));
	header.append($("<th></th>").append("Evening (after 5)"));
	head.append(header);
	table.append(head);

	for (var i = 0; i < days.length; i++) {
		var tr = $("<tr></tr>");
		tr.append($("<td></td>").append(days[i]));
		tr.append($("<td></td>").attr("align", "center").append($("<input />").attr("type", "checkbox")));
		tr.append($("<td></td>").attr("align", "center").append($("<input />").attr("type", "checkbox")));
		tr.append($("<td></td>").attr("align", "center").append($("<input />").attr("type", "checkbox")));
		table.append(tr)
	}
};
