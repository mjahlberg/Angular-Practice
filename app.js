// name our angular app
var app = angular.module('App', [])

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
    template: '<div class="ng-modal" ng-show="show"><div class="ng-modal-overlay" ng-click="hideModal()"></div><div class="ng-modal-dialog" ng-style="dialogStyle"><div class="ng-modal-close" ng-click="hideModal()">X</div><div class="ng-modal-dialog-content" ng-transclude></div></div></div>'
  }
})

.directive('modalRepeat', function () {
    return {          
        restrict: 'E',
        replace: true,
        transclude: true,
        template:'<div class="wrapper"><div class="videobox" ng-click="toggleModal()" style="list-style: none;" ng-repeat="thing in things"><img ng-src="{{thing.img}}"><figcaption>{{thing.company}}</figcaption></div></div>'
    }
})

.controller('MyCtrl', function($scope) {

    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };

    $scope.things = [ 
        {    
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


