var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
$routeProvider.when('/', {
  templateUrl: 'partials/front.html',
  controller:'AppsController',
  controllerAs: 'appCtrl',
  // redirectTo: '/front',
}).when('/new_app', {
  templateUrl: 'partials/new_app.html',
  controller:'AppsController',
  controllerAs: 'newAppCtrl'
}).when('/chef', {
  templateUrl: 'partials/chef.html',
  controller:'AppsController',
  controllerAs: 'appCtrl'
})
.when('/diner_registration', {
  templateUrl: 'partials/diner_registration.partial.html',
  controller:'DinerController',
  controllerAs: 'dinerCtrl'
})
.when('/chef_registration', {
  templateUrl: 'partials/chef_registration.partial.html',
  controller:'AppsController',
  controllerAs: 'appCtrl'
})
.when('/diner_login', {
  templateUrl: 'partials/diner_login.partial.html',
  controller:'AppsController',
  controllerAs: 'appCtrl'
})
.when('/chef_login', {
  templateUrl: 'partials/chef_login.partial.html',
  controller:'AppsController',
  controllerAs: 'appCtrl'
})
.when('/main', {
  templateUrl: 'partials/main.html',
  controller:'AppsController',
  controllerAs: 'appCtrl'
})
.otherwise({
  redirectTo: '/',
  // controller: 'AppsController',
  // controllerAs: 'appCtrl'
});

});
