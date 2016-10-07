angular.module("DaftPunkSite")

.config(function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl: "../templates/home.html",
    })
    .when("/about", {
        templateUrl: "../templates/about.html",
    })
    .when("/contact", {
        templateUrl: "../templates/contact.html",
    })
    .otherwise("/home", {
        templateUrl: "../templates/home.html",
    });
})