var nihol=angular.module("nihol", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

nihol.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl"
    })
    .when("/sale", {
        templateUrl: "app/sale/sale.html"
    })
    .when("/main", {
        templateUrl: "app/main/main.html",
        controller: "mainCtrl"
    })
    .when("/users", {
        templateUrl: "app/users/users.html",
        controller: "usersCtrl"
    })
    .otherwise({
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl"
    });
 });