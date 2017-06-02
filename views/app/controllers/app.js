/*global angular*/
var app = angular.module('instalcohol', ['ngRoute', 'angularCSS', 'google.places']);


//Route provider for Angular Routing.
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, $provide) {
        $routeProvider.when('/', {
                templateUrl: '/partials/home.html',
                controller: 'homeCtrl',
                css: '/css/home.css'
            })
            .when('/login', {
                templateUrl: '/partials/login.html',
                controller: 'loginCtrl',
                css: '/css/login.css'
            })
            .when('/contact', {
                templateUrl: '/partials/contact.html',
                controller: 'contactCtrl',
                css: '/css/contact.css'
            })
            .when('/signup', {
                templateUrl: '/partials/signup.html',
                controller: 'signupCtrl',
                css: '/css/signup.css'
            })
            .when('/forgot-pass', {
                templateUrl: '/partials/forgot-pass.html',
                controller: 'forgot-passCtrl',
                css: '/css/forgot-pass.css'
            })
            .when('/welcome', {
                templateUrl: '/partials/welcome.html',
                controller: 'welcomeCtrl',
                css: '/css/welcome.css'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');

    }])
    
    
    //comment this out when working or else you will need to be signed in.

    // .run(function($rootScope, $location, AuthService, AUTH_EVENTS) {
    //     $rootScope.$on('$routeChangeStart', function(event, next, nextParams, fromState) {
    //         current fix but will be changed. I'm sure there is a better way. 
    //         Currently it checks if the user is in the home page and if they aren't it makes them login.
    //         if ($location.path() === '/') {
    //             console.log('Welcome');
    //         } else {
    //             if (!AuthService.isAuthenticated()) {
    //                 console.log('Log in!');
    //                 event.preventDefault();
    //                 window.location.href = '/login';
    //             } else {
    //                 console.log('Signed In');
    //                 $location.path('/welcome')
    //             }
    //         }

    //     });
    // });