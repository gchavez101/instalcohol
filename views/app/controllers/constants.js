/*global angular*/
angular.module('instalcohol')


//Used to improve the setup of the page.
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated'
})
 
//The API Endpoint.
.constant('API_ENDPOINT', {
  url: 'https://instalcohol-gchavez1011.c9users.io:8081/api'
});