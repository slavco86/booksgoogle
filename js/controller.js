angular.module('Controllers', [])
.controller('HomeController', function($scope, $http, $location, $anchorScroll, anchorSmoothScroll) {
    $scope.title = "Welcome To Angular Todo!";
    $http.get("https://www.googleapis.com/books/v1/volumes?q=HTML5").then(function(response){
        console.log(response.data.items);
        $scope.books = response.data.items;
        setTimeout(function(){ 
            if(previousSelection !== null){
                console.log(selection);
                for(i = 0; i < selection.length; i++){
                    var name = selection[i];
                    console.log(name);
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
        console.log(selection);
        var elName = "book-" + index;
        var arIndex = selection.indexOf(elName);
        console.log("index of selected book: " + arIndex);
        if(arIndex == -1){
            selection.push(elName);
            console.log("added id" + elName + " at index " + arIndex);
        } else {
            selection.splice(arIndex,1);
            console.log("removed id" + elName + " at index " + arIndex);

        }
        sessionStorage.setItem("selection", JSON.stringify(selection))
        console.log(selection);
        var element = document.getElementById(elName);
        console.log(element);
        if(element.classList.contains("is-selected")){
            element.classList.remove("is-selected");
            
        } else {
            element.classList.add("is-selected");
            console.log("adding class");
        }
    }
});