nihol.controller("usersCtrl",function($scope,$location,$http,activeUser,User){
    
    $scope.y=activeUser.get();
    $scope.name=$scope.y.firstName;
    $scope.tmp=new User("","","","",false);
    $scope.password;
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
  })
