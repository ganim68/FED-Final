nihol.controller("LoginCtrl", function ($scope , $rootScope,$uibModalInstance, $http, $location, activeUser, User) {

  // TO DO: Detele this
    $scope.uname = "Ganim";
    $scope.password = "gan123";
    //$rootScope.users = [];
    $http.get("app/data/users.json").then(function (response) {
        
        for (var i = 0; i < response.data.length; i++) {
            $rootScope.users.push(new User(response.data[i]));
        }
    });

    $scope.failedAttempt = false;

    $scope.login = function() {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
            $uibModalInstance.close("Logged-in");
            $location.path("/main")
        } else {
            $scope.failedAttempt = true;
        }




        //console.log($scope.email + " " + $scope.password)
    }

    var getLoggedInUser = function() {
        for (var i = 0; i < $rootScope.users.length; i++) {
            if ($rootScope.users[i].firstName === $scope.uname && $rootScope.users[i].password === $scope.password) {
                return $rootScope.users[i];
            }
        }
        return null;
    }

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
});
