nihol.controller("usersCtrl",function($scope,$location,$http,activeUser,User){
    
    $scope.y=activeUser.get();
    $scope.name=$scope.y.firstName;
    $scope.tmp=new User("","","","",false);
    $scope.password;
    $scope.index=0;
    $scope.ddd=new Date();
    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }
    });
    $scope.add=function()
        {
            $scope.users.push($scope.tmp);
        }
    $scope.getUser=function(str)
        {
            for (var i=0;i<$scope.users.length;i++)
                {
                   if($scope.users[i].firstName===str)
                   $scope.index=i;
                    return i;
                }
        }
        $scope.back=function()
        {
          $location.path("/main");
        }      
    /*scope.update(selectedUser)
    {
        var i=$scope.users.indexOf(selectedUser);
        $scope.users[i].firstName=selectedUser.firstName;
    }*/       
  })
