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
    .when("/customers", {
        templateUrl: "app/customers/customers.html",
        controller: "customersCtrl"
    })
    .when("/items", {
        templateUrl: "app/items/items.html",
        controller: "itemsCtrl"
    })
    .when("/store", {
        templateUrl: "app/storage/store.html",
        controller: "storeCtrl"
    })
    .otherwise({
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl"
    });
 });
 