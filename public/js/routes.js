myApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/index.html'
    })
    .when('/chef_registration', {
        // controller: 'ChefsController',
        // controllerAs: 'ChefsCtrl',
        templateUrl: '/partials/chef_registration.partial.html',
        redirectTo: '/chefs.html'
    })
    .when('/diner_registration', {
        // controller: 'DinersController',
        // controllerAs: 'DinersCtrl',
        templateUrl: '/partials/diner_registration.partial.html',
        redirectTo: '/diners.html'
    })
    .when('/chef_login', {
        // controller: 'ChefsController',
        // controllerAs: 'ChefsCtrl',
        templateUrl: '/partials/chef_login.partial.html',
        redirectTo: '/chefs.html'
    })
    .when('/diner_login', {
        // controller: 'DinersController',
        // controllerAs: 'DinerCtrl',
        templateUrl: '/partials/chef_login.partial.html',
        redirectTo: '/diners.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})