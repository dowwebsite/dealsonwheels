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
            getAllAdvertisements: getAllAdvertisements
        };

        function getInfoByLicencePlate(number){
            return $http({
                method: 'GET',
                url: 'http://apis.is/car?number=' + number
            }).then(function successCallback(response) {
                console.log('Success: ', response);
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
                console.log('Success: ', response);
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
                console.log('Success: ', response);
                return response.data;

            }, function errorCallback(response) {
                console.log('Error: ', response);
                // return response;
            });
        };


        function getCarMakers(){
            return [
                {
                    "name": "Alfa Romero",
                    "value": "1"
                },
                {
                    "name": "Aston Martin",
                    "value": "2"
                },
                {
                    "name": "Audi",
                    "value": "3"
                },
                {
                    "name": "BMW",
                    "value": "4"
                }]
        }

        // factory function body that constructs shinyNewServiceInstance
        var cars = [
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "kr.",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            },
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "kr.",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            },
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "kr.",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            },
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "kr.",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            },
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "ISK    ",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            },
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "kr.",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            },
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "kr.",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            },
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "kr.",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            },
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "kr.",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            },
            {
                "name": "Jaguar",
                "model": "xjs",
                "price": "1.000.000",
                "currency": "kr.",
                "year": "1989",
                "img": "resources/images/1989-jag.jpg",
                "description": "This vehicle is in great shape for its age. It's been kept indoors since it was new so there is no visible rust of any kind."
            }
        ];
    });
