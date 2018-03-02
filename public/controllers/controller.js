var space = angular.module('space', ['ngRoute']);

space.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl:'/index.html'
    }).
    when('/about', {
        templateUrl:'/public/views/about.html'
    }).
    when('/techskills', {
        templateUrl:'/public/views/tech.html'
    }).
    when('/works', {
        templateUrl:'/public/views/works.html'
    }).
    when('/contact', {
        templateUrl:'/public/views/works.html'        
    }).
    otherwise({
        redirectTo:'/home'
    })
}])

space.controller('spaceController' ['$scope','$http', function($scope,$http) {
    $scope.hi = 'hi'
}])

