nihol.controller("storeCtrl", function ($scope, $rootScope, $location, $http,Item,Store) {
    $scope.itemsToAdd = [];
    $scope.tmp=new Store("",0);
    $scope.date=new Date();
    
    $scope.getItem = function (tmp) {
        for (var i=0;i<$rootScope.store.length;i++)
            {
                if($rootScope.store[i].code===tmp.code){
                    alert("2" + JSON.stringify($scope.store[i]));
                    return $rootScope.store[i];
                }
                
            }
    };
    $scope.updateStore=function()
        {
            for(var i=0;i<$scope.itemsToAdd.length;i++)
                {
                  alert("1" + JSON.stringify($scope.itemsToAdd[0]));
                    $scope.getItem($scope.itemsToAdd[i]).quantity+=$scope.itemsToAdd[i].quantity; 
                }
            $location.path("/main");    
        };
    $scope.back=function()
    {
      $location.path("/main");
    } 
    
    $scope.newItem=function()
        {
            $rootScope.loc="/store";
            $location.path("/items");
        }
    $scope.addItem=function()
        {
            $scope.itemsToAdd.push(new Store($scope.tmp));  
        }    
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