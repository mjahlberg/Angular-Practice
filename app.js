var app = angular.module('App', [])

.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true,
    transclude: true,
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
    template: '<div class="ng-modal" ng-show="show"><div class="ng-modal-overlay" ng-click="hideModal()"></div><div class="ng-modal-dialog" ng-style="dialogStyle"><div class="ng-modal-close" ng-click="hideModal()">X</div><div><img ng-src="http://i.imgur.com/kwvK3Ct.png"><figcaption>Spotify</figcaption></div><div class="ng-modal-dialog-content" ng-transclude></div></div></div>'
  }
})

.directive('modalRepeat', function () {
    return {          
        restrict: 'E',
        replace: true,
        // getting error for "no root element" to use partial template (modal-repeat.html)here
        template:'<div class="wrapper"><div class="videobox" ng-click="toggleModal()" style="list-style: none;" ng-repeat="thing in things"><img ng-src="{{thing.img}}"><figcaption>{{thing.company}}</figcaption></div></div>'
    }
})

.controller('MyCtrl', function($scope) {

    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
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


