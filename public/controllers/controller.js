var spaceApp = angular.module("space", ['ngRoute', 'ngAnimate']);

spaceApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl:'../views/home.html'
    }).
    when('/about', {
        templateUrl:'../views/about.html'
    }).
    when('/techskills', {
        templateUrl:'../views/tech.html'
    }).
    when('/projects', {
        templateUrl:'../views/projects.html'
    }).
    when('/contact', {
        templateUrl:'../views/contact.html',
        controller:"SpaceController"        
    }).
    otherwise({
        redirectTo:'/home'
    })
}])

spaceApp.controller("SpaceController", ['$scope','$http', function($scope,$http) {
    $scope.class = "navsmall";

    $scope.changeClass = function(){
      if ($scope.class === "navsmall"){
        $scope.class = "navsmall active bounceInDown"
      }
      else{
        $scope.class = "navsmall";
      }
    }
    $scope.sendEmail = function() {
        console.log($scope.contact)
        $http.post('/send', $scope.contact)
    }

}])

