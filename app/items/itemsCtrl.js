nihol.controller("itemsCtrl", function ($scope, $rootScope, $location, $http, activeUser, Item,Store) {
    $scope.tmp = {};

    

    $scope.addItem = function () {
        var newItem={code:$scope.tmp.code,quantity:0};
        $rootScope.items.push(new Item($scope.tmp));
        $rootScope.store.push(new Store(newItem));
    };
   
    $scope.back=function()
    {
      $location.path($rootScope.loc);
    }      
    

    /*$scope.y=activeUser.get();
    $scope.name=$scope.y.firstName;
    $scope.tmp=new User("","","","",false);
    $scope.password;
    $scope.index=0;
    
    $scope.add=function()
        {
            $rootScope.users.push($scope.tmp);
        }
    $scope.getUser=function(str)
        {
            for (var i=0;i<$rootScope.users.length;i++)
                {
                   if($rootScope.users[i].firstName===str)
                   $scope.index=i;
                    return i;
                }
        }
        $scope.back=function()
        {
          $location.path("/main");
        }      
    $scope.update =function(selectedUser)
    {
        var i=$rootScope.users.indexOf(selectedUser);
        $rootScope.users[i].firstName=selectedUser.firstName;
        $rootScope.users[i].lastName=selectedUser.lastName;
        $rootScope.users[i].manager=selectedUser.manager;
        $rootScope.users[i].password=selectedUser.password;
        $rootScope.users[i].manager=selectedUser.manager;
        $rootScope.users[i].active=selectedUser.active;
    } */
})
