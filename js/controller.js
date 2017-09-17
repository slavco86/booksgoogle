angular.module('Controllers', [])
.controller('HomeController', function($scope, $http, $location, $anchorScroll) {
    $scope.title = "Welcome To Angular Todo!";
    $http.get("https://www.googleapis.com/books/v1/volumes?q=HTML5").then(function(response){
        console.log(response.data.items);
        $scope.books = response.data.items;
    });
    $scope.scroll = function(x){
        $location.hash('book-' + x);
        $anchorScroll();
    };
});