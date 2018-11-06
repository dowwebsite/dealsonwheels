'use strict';

angular.module('myApp.createAd', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/createAd', {
            templateUrl: 'v2_createAd/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$http', 'fact', '$scope', '$location', function($http, fact, $scope, $location) {
        $scope.registrationNumber = '';
        $scope.submit = submit;
        $scope.imageLabel = '';

        // Talk to Car registrate
        $scope.getInfoByLicencePlate = function(){
            fact.getInfoByLicencePlate($scope.registrationNumber)
                .then(function(returned){
                    console.log('returned data: ', returned);
                    $scope.carInfo = returned;
                    $scope.carInfo.registeredAt = returned.registeredAt.split(".")[2];
                })
        };


        function submit(car){

            if(!$scope.imageLabel){
                $scope.imageLabel = '1989-jag.jpg'
            }

            var jsonObject = {
                username: car.username,
                manufacturer: car.type,
                model: car.subType,
                registration_number: $scope.registrationNumber,
                color: car.color,
                year: car.registeredAt,
                weight: 1348,
                next_check: car.nextCheck,
                image_url: "resources/images/" + $scope.imageLabel,
                pollution: car.pollution,
                price: car.price,
                description: $scope.description,
                driven: 100
            };


            // var obj = JSON.stringify(testing)
            // console.log('json: ', jsonObject);
            fact.postAd(jsonObject);
            $location.path( '/');

        }



        // Image processing stuff
        $(document).ready( function() {
            $(document).on('change', '.btn-file :file', function() {
                console.log('Changed');
                var input = $(this),
                    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
                input.trigger('fileselect', [label]);
            });

            $('.btn-file :file').on('fileselect', function(event, label) {
                var input = $(this).parents('.input-group').find(':text'),
                    log = label;
                $scope.imageLabel = label;
                console.log('label: ', label);

                if( input.length ) {
                    input.val(log);
                } else {
                    if( log ) alert(log);
                }

            });
            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        $('#img-upload').attr('src', e.target.result);
                    }

                    reader.readAsDataURL(input.files[0]);
                }
            }

            $("#imgInp").change(function(){
                readURL(this);
            });
        });



    }]);