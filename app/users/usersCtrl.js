nihol.controller("usersCtrl",function($scope,$rootScope,$location,$http,activeUser,User){
    
    $scope.y=activeUser.get();
    $scope.name=$scope.y.firstName;
    $scope.tmp=new User("","","","",false);
    $scope.password;
    $scope.index=0;
    
    $scope.add=function()
        {
            $rootScope.users.push(new Item($scope.tmp.firstName,$scope.tmp.lastName,$scope.tmp.email,$scope.tmp.password,$scope.tmp.manager,active));
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
        $rootScope.users[i].email=selectedUser.email;
        $rootScope.users[i].password=selectedUser.password;
        $rootScope.users[i].manager=selectedUser.manager;
        $rootScope.users[i].active=selectedUser.active;
    }       
  })
