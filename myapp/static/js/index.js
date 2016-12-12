window.fbAsyncInit = function() {
FB.init({
  appId      : '754318864731770',
  xfbml      : true,
  version    : 'v2.8'
});
FB.AppEvents.logPageView();
};
window.fbloaded();

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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
$("#my-button").click(function() {
    loginCheck();
});

window.fbloaded = function() {
    FB.Event.subscribe('auth.statusChange', function(response) {
        if (response.status === 'connected') {
            FB.api("/me/picture?width=30", function(response) {
                $("#my-profile-picture").attr("src", response.data.url);
            });
            FB.api("/me", function(response) {
                $("#user-name").html( response.name);
            });
        }
    });
}