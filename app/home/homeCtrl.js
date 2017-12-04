nihol.controller("HomeCtrl", function ($http,$scope, $rootScope, $uibModal) {
    $rootScope.ddd=new Date();
    $rootScope.users = [];
    $rootScope.items = [];
    $rootScope.customers = [];
    $rootScope.store = [];
        //reading the items.json file
    if (!$rootScope.items.length) {
        $http.get("app/data/items.json").then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                $rootScope.items.push(new Item(response.data[i]));
            }
        });
    }

    $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
    }
});