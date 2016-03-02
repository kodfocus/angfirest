'use strict'

var app = angular.module("AngFirest", [
    'ngAnimate',
    'ngResource',
    'ngRoute'
    ])
.config(function($routeProvider){
    $routeProvider
    .when('/buscar', {
        templateUrl: 'vistas/buscar.html'
    })
    .otherwise({
        redirectTo: '/buscar'
    });
});