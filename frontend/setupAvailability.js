$(function() {
	initCheckboxTable();

	$("#continue").click(function() {
		window.location.href = "setupSports.html";
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
		tr.append($("<td></td>").attr("class", "tableHeader").append(days[i]));
		tr.append($("<td></td>").attr("align", "center").append($("<input />").attr("type", "checkbox")));
		tr.append($("<td></td>").attr("align", "center").append($("<input />").attr("type", "checkbox")));
		tr.append($("<td></td>").attr("align", "center").append($("<input />").attr("type", "checkbox")));
		table.append(tr)
	}
};
