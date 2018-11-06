'use strict';
//
angular
    .module('myApp.fact', [])
    .factory('fact', function($http) {
        var baseUrl = 'http://54.229.222.0/';

        return {
            getAllCars: getAllCars,
            getCarMakers: getCarMakers,
            getInfoByLicencePlate: getInfoByLicencePlate,
            getAllAdvertisements: getAllAdvertisements,
            postAd: postAd
        };

        function getInfoByLicencePlate(number){
            return $http({
                method: 'GET',
                url: 'http://apis.is/car?number=' + number
            }).then(function successCallback(response) {
                console.log('All info: ', response);
                return response.data.results[0];
            }, function errorCallback(response) {
                console.log('Error: ', response);
                return response;
            });
        }

        function getAllCars(){
            return $http({
                method: 'GET',
                url: baseUrl + 'get/all/cars'
            }).then(function successCallback(response) {
                console.log('All cars in system: ', response);
                // return response.data.results[0];
            }, function errorCallback(response) {
                console.log('Error: ', response);
                // return response;
            });
        };


        function getAllAdvertisements(){
            return $http({
                method: 'GET',
                url: baseUrl + 'get/all/advertisements'
            }).then(function successCallback(response) {
                console.log('All advertisements: ', response);
                return response.data;

            }, function errorCallback(response) {
                console.log('Error: ', response);
                // return response;
            });
        };


        function getCarMakers(){
            return $http({
                method: 'GET',
                url: baseUrl + 'get/all/manufacturers'
            }).then(function successCallback(response) {
                console.log('Manufacturers: ', response);
                return response.data;

            }, function errorCallback(response) {
                console.log('Error: ', response);
                // return response;
            });
        }

        function postAd(object){
            return $http({
                method: 'POST',
                url: baseUrl + 'create/an/advertisement',
                data: object
            }).then(function successCallback(response) {
                console.log('Manufacturers: ', response);
                return response.data;

            }, function errorCallback(response) {
                console.log('Error: ', response);
                // return response;
            });
        }

    });
