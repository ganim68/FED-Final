nihol.controller("HomeCtrl", function ($scope, $rootScope, $uibModal) {
    $rootScope.ddd=new Date();
    $rootScope.users = [];
    $rootScope.items = [];
    $rootScope.customers = [];
    $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
    }
});