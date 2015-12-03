/**
 * Created by eric on 12/2/15.
 */
$(function() {
	$("#continue").click(function() {
		//if (validateTextBox($("#firstName"), "first name") &&
		//	validateTextBox($("#lastName"), "last name") &&
		//	validateTextBox($("#phoneNumber"), "phone number"))
			window.location.href = "setupAvailability.html";
	});
});

var validateTextBox = function(textBox, textBoxName) {
	if (textBox.val() == "") {
		alert("Please fill in your " + textBoxName);
		return false;
	}
	return true;
};