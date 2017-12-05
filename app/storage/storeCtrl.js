nihol.controller("storeCtrl", function ($scope, $rootScope, $location, $http,Item,Store) {
    $scope.itemsToAdd = [];
    $scope.tmp=new Store("",0);
    $scope.date=new Date();
    
    $scope.getItemByCode = function (code) {
        for (var i=0;i<$rootScope.items.length;i++)
            {
                if($rootScope.items[i].code===code)
                    return $rootScope.items[i];
            }
    };
    /*$scope.addItem = function () {
        if($scope.tmp.length)
            {
                for(var i=0;i<$scope.tmp.length;i++)
                    {

                    }
            }
        $rootScope.items.push(new Item($scope.tmp));
    };

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