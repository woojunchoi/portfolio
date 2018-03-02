var space = angular.module('space', ['ngRoute']);

space.config(['$routeProvider', function($routeProvider) {
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
        templateUrl:'../views/contact.html'        
    }).
    otherwise({
        redirectTo:'/home'
    })
}])

space.controller('spaceController' ['$scope','$http', function($scope,$http) {
    $scope.hi = 'hi'
}])

