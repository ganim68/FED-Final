var nihol=angular.module("nihol", ["ngRoute"]);

nihol.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home.html"
    })
    .when("/sale", {
        templateUrl: "app/sale.html"
    })
 });