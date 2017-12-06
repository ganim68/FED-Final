nihol.controller("mainCtrl",function($scope,$http,$rootScope, $location,activeUser,User,Item,Store){
  
 if (!activeUser.isLoggedIn()) {
    $location.path("/");
    return;
  }

      //reading the items.json file
    if (!$rootScope.items.length)
      {
        $http.get("app/data/items.json").then(function (response) {
          
          for (var i = 0; i < response.data.length; i++) {
              $rootScope.items.push(new Item(response.data[i]));
          }
      });
      }
      //reading the storage.json file
      if (!$rootScope.store.length)
      {
        $http.get("app/data/storage.json").then(function (response) {
          
          for (var i = 0; i < response.data.length; i++) {
              $rootScope.store.push(new Store(response.data[i]));
          }
      });
      }  
  $scope.x="Welcome";
  $scope.y=activeUser.get();
  $scope.name=$scope.y.firstName;
  $scope.manager=$scope.y.manager/*false*/;
  $scope.proc=false;

  $scope.logout=function()
    {
      activeUser.logout();
      $location.path("/");
    }
  
  $scope.manageUsers=function()
    {
      $location.path("/users");
    }
    
  $scope.sales=function()
    {
      $location.path("/sale");
    }
  
  $scope.addItem=function()
    {
      $rootScope.loc="/main";
      $location.path("/items");
    }
  $scope.store=function()
    {
      $location.path("/store");
    }  
})