angular.module('myApp', ['ngRoute', 'Controllers', 'Directives', 'Services']);

angular.module('myApp').config(function($locationProvider, $routeProvider) {
   $locationProvider.html5Mode(true);  // Enable href routing without hashes

   $routeProvider.when('/', {
       templateUrl: 'templates/home.html',
       controller: 'HomeController'
   })
   .when('/accounts/register', {
       templateUrl: 'templates/register.html',
       controller: 'RegisterController'
   });
});
