nihol.controller("mainCtrl",function($scope,$location,activeUser,User){
  
  $scope.x="Welcome";
  $scope.y=activeUser.get();
  $scope.name=$scope.y.firstName;
  $scope.manager=$scope.y.manager;
  console.log($scope.y.firstName);
  $scope.logout=function()
    {
      activeUser.logout();
      $scope.y=activeUser.get();
      if(!$scope.y)
        $scope.name="NoBody";
      $scope.x="Good buy";
    }
  $scope.goback=function()
    {
      $location.path("/");
    }
})






/*nihol.controller("mainCtrl",function ($scope, $http, $location, activeUser, User) {
    
      $scope.x=activeUser.get();
      $scope.t=x.firstName;
     
    });*/
    