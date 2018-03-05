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

spaceApp.controller("SpaceController", ['$scope','$http','$timeout', function($scope,$http,$timeout) {
    $scope.class = "navsmall";
    $scope.alertClass = "alert alert-success"

    $scope.changeClass = function(){
      if ($scope.class === "navsmall"){
        $scope.class = "navsmall active bounceInDown"
      }
      else{
        $scope.class = "navsmall";
      }
    }

    $scope.alert = function() {
        if($scope.alertClass === "alert alert-success") {
            console.log('hyyyoy')
            $scope.alertClass = "alert alert-success active"
            $timeout(function() {
                $scope.alertClass="alert alert-success"
            },3000)
        }
    }

    $scope.sendEmail = function() {
        if(!$scope.contact.name || !$scope.contact.email || !$scope.contact.message) {
            return;
        }
        $http.post('/send', $scope.contact)
            $scope.contact.name =''
            $scope.contact.email =''
            $scope.contact.message=''
            $scope.alert()
    }
}])

