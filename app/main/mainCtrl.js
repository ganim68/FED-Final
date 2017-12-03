nihol.controller("mainCtrl",function($scope, $location,activeUser,User){
  
  $scope.x="Welcome";
  $scope.y=activeUser.get();
  $scope.name=$scope.y.firstName;
  $scope.manager=/*$scope.y.manager*/false;
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
   
})