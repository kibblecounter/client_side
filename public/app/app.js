angular
    .module('kibbleCounter', ['firebase', 'ui.router'])
    .config(config)

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'app/views/home.html'
        })
        .state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardController',
            templateUrl: 'app/views/dashboard.html'
        })
        .state('getstarted', {
            url: '/getstarted',
            controller: 'GetStartedController',
            templateUrl: 'app/views/getstarted.html'
        })
        .state('login', {
            url: '/login',
            controller: 'AuthController',
            templateUrl: 'app/views/login.html'
        })
        .state('signup', {
            url: '/signup',
            controller: 'SignUpController',
            templateUrl: 'app/views/signup.html'

        });
}
