/**
 * Created by eric on 12/2/15.
 */
$(function() {
	$("#continue").click(function() {
		$("#mainContent2").animate({"right": "200%"}, 500, function() {
			window.location.href = "setupAvailability.html";
		});
	});
});

var validateTextBox = function(textBox, textBoxName) {
	if (textBox.val() == "") {
		alert("Please fill in your " + textBoxName);
		return false;
	}
	return true;
};