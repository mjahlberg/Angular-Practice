var app = angular.module('App', [])

//this directive is the actual firing of the function to 'show' the width and height of the modal when and iteam in ng-repeat is clicked
.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },

    // getting error for "no root element" to use partial template (modal-dialog.html) here
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  }
})

//this directive runs the 'ng-repeat' through the 'things' listed in 'MyCtrl'
.directive('modalRepeat', function () {
    return {          
        restrict: 'E',
        replace: true,

        // getting error for "no root element" to use partial template (modal-repeat.html)here
        template:'<div class="wrapper"><div class="videobox" ng-click="toggleModal()" style="list-style: none;" ng-repeat="thing in things"><a ng-click="editThing(thing);"><img ng-src="{{thing.img}}"></a><figcaption>{{thing.company}}</figcaption></div></div>'
    }
})

// this controller is for the toggle between showing 'modalShown' and not showing 'modalShown'
.controller('MyCtrl', function($scope) {

    //currently set to false so that the modal does not show up when the page loads
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };
    $scope.editing = null;
    $scope.editThing = function(thing) {
      $scope.editing = thing;
    };

    // added list inside the same controller so the list and the function for calling the modal can be used by both directives
    $scope.things = [ 
        {  

        // Tried to add an id to each one to be able to call a specific img in modal but not successful yet  
            "id" : 1,
            "img" : "http://i.imgur.com/kwvK3Ct.png",
            "company" : "Spotify"
        },
        {   
            "id" : 2, 
            "img" : "http://i.imgur.com/zdHbBiq.png?1",
            "company" : "The Duck Brand"
        },
        {    
            "id" : 3,
            "img" : "http://i.imgur.com/gk8nyyK.png",
            "company" : "Frito-Lay"
        },
        {    
            "id" : 4,
            "img" : "http://i.imgur.com/eraWw1c.png",
            "company" : "Pantene"
        },
        {   
            "id" : 5, 
            "img" : "http://i.imgur.com/Y3jQ76G.png?1",
            "company" : "Anheuser-Busch InBev"
        },
        {    
            "id" : 6,
            "img" : "http://i.imgur.com/lNuhA5F.png?1",
            "company" : "Tongal"
        }
    ];
})


