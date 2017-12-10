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
    
    
    
    
    /*//reading the storage.json file
    if (!$rootScope.store.length)
    {
       $http.get("app/data/storage.json").then(function (response) {
           for (var i = 0; i < response.data.length; i++) {
               $rootScope.store.push(new Store(response.data[i]));
           }
       });
    }
        //reading the items.json file
    if (!$rootScope.items.length)
     {
        $http.get("app/data/items.json").then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                $rootScope.items.push(new Item(response.data[i]));
            }
        });
    }*/
});