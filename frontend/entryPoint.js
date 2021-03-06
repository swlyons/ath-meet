/**
 * Created by eric on 11/17/15.
 */
$(function() {
	setTimeout(function() {
		$("#logo").animate({top: 0}, 1000);
		$("#fullBox").fadeIn(1000, function() {
			$("#createAccount").click(createAccountSlide);
			$("#signIn").click(signInSlide);
		});
	}, 1000);
});

var createAccountSlide = function() {
	$("#signInCredentials").slideUp();
	$("#fullBox").animate({height: "305px"});
	$("#createAccountCredentials").slideDown(function() {
		$("#createAccount").attr("class", "clickedButton").unbind().click(createAccount);
		$("#createdUsername").focus();
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
	$("#fullBox").animate({height: "255px"});
	$("#signInCredentials").slideDown(function() {
		$("#signIn").attr("class", "clickedButton").unbind().click(signIn);
		$("#signInUsername").focus();
	});
	$("#createAccount").attr("class", "unclickedButton").unbind().click(createAccountSlide);
};

var signIn = function() {
	if (validateTextBox($("#signInUsername")) && validateTextBox($("#signInPassword"))) {
		window.location.href = "newsFeed.html";
	}
};