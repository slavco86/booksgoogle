angular.module('Directives', [])
.directive('scrollTo', function ($location, $anchorScroll) {
    return function(scope, element, attrs) {
  
      element.bind('click', function(event) {
          event.stopPropagation();
          var off = scope.$on('$locationChangeStart', function(ev) {
              off();
              ev.preventDefault();
          });
          var location = attrs.scrollTo;
          if ($location.hash() !== location){
            $location.hash(location);
          } else {
            $anchorScroll(location);
          }
          console.log(location);
      });
  
    };
  });