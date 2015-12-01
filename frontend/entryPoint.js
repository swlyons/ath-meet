/**
 * Created by eric on 11/17/15.
 */
window.onload = function() {
	$("#createAccount").click(createAccountSlide);
	$("#signIn").click(signInSlide);
};

var createAccountSlide = function() {
	$("#signInCredentials").slideUp();
	$("#createAccountCredentials").slideDown();
	$("#fullBox").animate({height: "294px"}, function() {
		$("#createAccount").attr("class", "clickedButton").unbind().click(createAccount);
	});
	$("#signIn").attr("class", "unclickedButton").unbind().click(signInSlide);
};

var createAccount = function() {
	if (validateTextBox($("#createdUsername")) && validateTextBox($("#createdPassword"))) {
		window.location.href = "setupPreferences.html"
	}
};

var validateTextBox = function(textBox) {
	var value = textBox.val();
	if (!value) {
		alert("Please enter a valid username and password");
		return false;
	}
	return true;
};

var signInSlide = function() {
	$("#createAccountCredentials").slideUp();
	$("#signInCredentials").slideDown();
	$("#fullBox").animate({height: "243px"}, function() {
		$("#signIn").attr("class", "clickedButton").unbind().click(signIn);
	});
	$("#createAccount").attr("class", "unclickedButton").unbind().click(createAccountSlide);
};

var signIn = function() {
	if (validateTextBox($("#signInUsername")) && validateTextBox($("#signInPassword"))) {
		window.location.href = "newsFeed.html";
	}
};