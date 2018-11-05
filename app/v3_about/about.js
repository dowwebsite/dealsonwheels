/**
 * Created by edda on 3.11.2018.
 */
angular
    .module('myApp.about', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'v3_about/about.html',
            controller: 'AboutCtrl'
        });
    }])

    .controller('AboutCtrl', [function() {

    }]);