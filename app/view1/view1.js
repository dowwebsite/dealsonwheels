angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'vm'
        });
    }])

    .controller('View1Ctrl', ['fact', function(fact) {
        var vm = this;
        vm.title = "Hallo!";

        vm.cars = fact.getAllCars();
        vm.carMakers = fact.getCarMakers();


    }])
    // Define the DribbblePlayer function
    .factory('fact', function() {
        return {
            getAllCars: getAllCars,
            getCarMakers: getCarMakers

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

        function getAllCars(){
            return [
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
            ]};
    });

