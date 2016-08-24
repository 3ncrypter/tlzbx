var app = angular.module("tlzbx",["ngRoute"])
                .controller('teamCtrl', function($scope, $http) {
                    $http.get("dir/data.json")
                    .success(function (data) {$scope.items = data.employee;$scope.ch = Object.keys(data.employee);});                    
                })
                .config(function($routeProvider, $locationProvider){
                   $routeProvider
                    .when("/home",{
                       templateUrl:"pages/home.html"
                   })
                   .when("/tools",{
                       templateUrl:"pages/tools.html"
                   })
                   .when("/about",{
                       templateUrl:"pages/about.html"
                   })
                   .when("/participate",{
                       templateUrl:"pages/participate.html"
                   })
                   .when("/contact",{
                       templateUrl:"pages/contact.html"
                   })
                   .otherwise({
                       redirectTo:"/home"
                   })
                   $locationProvider.html5Mode(true);
                })