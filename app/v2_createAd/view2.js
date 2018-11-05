'use strict';

angular.module('myApp.createAd', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/createAd', {
            templateUrl: 'v2_createAd/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$http', 'fact', '$scope', function($http, fact, $scope) {
        $scope.registrationNumber = '';
        // vm.getInfoByLicencePlate = fact.getInfoByLicencePlate;
        $scope.getInfoByLicencePlate = function(){
            fact.getInfoByLicencePlate($scope.registrationNumber)
                .then(function(returned){
                    console.log('returned data: ', returned);
                    $scope.carInfo = returned;
                })
        };




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