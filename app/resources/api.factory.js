'use strict';
//
angular
    .module('myApp.fact', [])
    .factory('fact', function() {
        return {
            getAllCars: getAllCars

        };

        function getAllCars(){
            return cars;
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
