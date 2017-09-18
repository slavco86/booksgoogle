angular.module('Controllers', [])
.controller('HomeController', function($scope, $http, $location, $anchorScroll, anchorSmoothScroll) {
    $scope.title = "Welcome To Angular Todo!";
    $http.get("https://www.googleapis.com/books/v1/volumes?q=HTML5").then(function(response){
        $scope.books = response.data.items;
        setTimeout(function(){ 
            if(previousSelection !== null){
                for(i = 0; i < selection.length; i++){
                    var name = selection[i];
                    var el = document.getElementById(name);
                    el.classList.add("is-selected");
                }
            }
        }, 250);
        
    });
    $scope.scroll = function(x){
        $anchorScroll.yOffset = 150;
        var location = "book-" + x;
        $anchorScroll(location);
    };
    var selection = []
    var previousSelection = JSON.parse(sessionStorage.getItem("selection"));
    if (previousSelection !== null){
        for(q = 0; q < previousSelection.length; q++){
            selection.push(previousSelection[q]);
        }
    }
    $scope.selection = function(index){
        var elName = "book-" + index;
        var arIndex = selection.indexOf(elName);
        if(arIndex == -1){
            selection.push(elName);
        } else {
            selection.splice(arIndex,1);

        }
        sessionStorage.setItem("selection", JSON.stringify(selection))
        var element = document.getElementById(elName);
        if(element.classList.contains("is-selected")){
            element.classList.remove("is-selected");
            
        } else {
        }
    }
});