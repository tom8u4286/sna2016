var loginCheck = function() {
    FB.getLoginStatus(function(response) {
        console.log("getLoginStatus()");
        if (response.status === 'connected') {
            FB.logout(function(response) {
                $("#my-button").html("Facebook Login");
                $("#my-profile-picture").attr("src", "");
                $("#user-name").html(null);
                $(".friend-block").empty();
            });
        }
        else {
            FB.login(function(response) {
                $("#my-button").html("Facebook Logout");
            },{scope: 'email,user_friends'});
        }
    });
}