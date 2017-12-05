nihol.controller("HomeCtrl", function ($scope,$http, $rootScope, $uibModal) {
    $rootScope.ddd=new Date();
    $rootScope.users = [];
    $rootScope.items = [];
    $rootScope.customers = [];
    $rootScope.store = [];
    

    $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
    }
});