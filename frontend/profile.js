/**
 * Created by eric on 11/27/15.
 */
$(function() {
	var isYou = false;
	var username = getParameterByName("username");
	var user;

	if (username == "" || username == "machomoustache") {
		isYou = true;
		username = "machomoustache";
	}

	$.getJSON("http://cs256-websolutions.com/ath-meet/backend/users.json", function(users) {
		$.getJSON("http://cs256-websolutions.com/ath-meet/backend/sports.json", function(sportsData) {
			var sportsImageMap = transformSportsData(sportsData);
			$.each(users, function(key, userData) {
				if (userData['username'] == username) {
					user = userData;
					return false;
				}
			});

			if (!user) {
				alert("Could not find user " + username);
			}

			if (isYou) {
				//$("#editProfile").show();
				$("#followers").show();
			} else {
				$("#sendMessage").show();
				$("#follow").show();
			}

			$("#name").append(user['firstName']);
			$("#image").attr("src", user['image']);
			$("#topContent").css("background-image", "url(" + user['coverImage'] + ")");

			//$.each(user['favoriteSports'], function(key, sport) {
			//	$("#sports").append($("<img />").attr("class", "sportIcon").attr("src", sportsImageMap[sport]));
			//});
		});
	});

	var stats = $("#stats");
	var avail = $("#avail");
	var statsContent = $("#statsContent");
	var availContent = $("#availContent");
	stats.click(function() {
		stats.attr("class", "clicked");
		avail.attr("class", "notClicked");
		availContent.hide();
		statsContent.show();
	});

	avail.click(function() {
		avail.attr("class", "clicked");
		stats.attr("class", "notClicked");
		statsContent.hide();
		availContent.show();
	});
});

var transformSportsData = function(data) {
	var sportsImageMap = {};
	$.each(data, function(key, sport) {
		sportsImageMap[sport['name']] = sport['image'];
	});
	return sportsImageMap;
};


function followOrUnfollow(){
	var follow = $("#follow");
    if(follow.html() == "Follow") {
		alert("You are now following!");
		follow.html("Unfollow");
    } else {
		alert("You are no longer following.");
		follow.html("Follow");
    }
    
}

function followers() {
    alert("jacksond11\nwifee\nchad_the_dad")
}

function sendMessage(){
    alert("555-555-5555");
}






