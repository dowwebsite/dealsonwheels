angular.module('myApp.landing', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'v1_landing/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'vm'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'fact', function($scope, fact) {
        fact.getAllAdvertisements()
            .then(function(adArray){
                $scope.ads = adArray;
            });


        fact.getCarMakers()
            .then(function(carMakerArr){
                $scope.carMakers = carMakerArr;
            })

    }]);
