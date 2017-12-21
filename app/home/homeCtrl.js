nihol.controller("HomeCtrl", function ($http,$scope, $rootScope, $uibModal,Item,Store) {
    $rootScope.ddd=new Date();
    $rootScope.users = [];
    $rootScope.items = [];
    $rootScope.customers = [];
    $rootScope.store = [];
    $rootScope.loc = "";
    

    $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
    }
    //alert("1" + JSON.stringify($rootScope.customers[0]));
});