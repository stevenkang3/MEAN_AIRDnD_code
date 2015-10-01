myApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        // controller: 'CustomerController',
        // controllerAs: 'CustomerCtrl',
        templateUrl: '/index.html'
    })
    .when('/chef_registration', {
        // controller: 'OrderController',
        // controllerAs: 'OrderCtrl',
        templateUrl: '/partials/chef_registration.partial.html'
    })
    .when('/diner_registration', {
        // controller: 'OrderController',
        // controllerAs: 'OrderCtrl',
        templateUrl: '/partials/diner_registration.partial.html'
    })
    .when('/chef_login', {
        // controller: 'OrderController',
        // controllerAs: 'OrderCtrl',
        templateUrl: '/partials/chef_login.partial.html'
    })
    .when('/diner_login', {
        // controller: 'OrderController',
        // controllerAs: 'OrderCtrl',
        templateUrl: '/partials/chef_login.partial.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})