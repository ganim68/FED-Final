// Shared User Constructor
nihol.factory("User", function(){
    function User(tmpObject) {
        this.firstName = tmpObject.firstName;
        this.lastName = tmpObject.lastName;
        this.email = tmpObject.email;
        this.password = tmpObject.password;
        this.manager = tmpObject.manager;
    };

    return User;
});

// Service that manges the active user
nihol.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get
    };   
});