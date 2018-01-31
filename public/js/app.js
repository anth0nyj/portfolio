console.log('Hola mundo');

const app = angular.module("Portfolio", ['ngRoute']);

app.controller("MainController", ["$http", function($http) {
// app.controller("MainController", [function() {
  this.test = "Meow";
  this.phone = "(516) 232-4229";
  this.showProject = null;
}]);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true });

  $routeProvider.when('/contact', {
    templateUrl: '../ng_routes/contact.html',
    controller: 'MainController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/', {
    templateUrl: '../ng_routes/about.html',
    controller: 'MainController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/projects', {
    templateUrl: '../ng_routes/projects.html',
    controller: 'MainController',
    controllerAs: 'ctrl'
  });

}]);
