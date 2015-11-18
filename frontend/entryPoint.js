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
	$("#fullBox").animate({height: "294px"});
	$("#signIn").css("border-width", "2px").unbind().click(signInSlide);
	$("#createAccount").css("border-width", "4px").unbind().click(createAccount);
};

var createAccount = function() {
	window.location.href = "/setupPreferences.html"
};

var signInSlide = function() {
	$("#createAccountCredentials").slideUp();
	$("#signInCredentials").slideDown();
	$("#fullBox").animate({height: "243px"});
	$("#createAccount").css("border-width", "2px").unbind().click(createAccountSlide);
	$("#signIn").css("border-width", "4px").unbind().click(signIn);
};

var signIn = function() {
	window.location.href = "/newsFeed.html"
};