
/**
 * Created by saketmohan on 7/18/15.
 */
(function(angular) {

    var msg = angular.module('myapp');
    msg.controller('LoginCtrl', LoginController);

    function LoginController($location,$routeParams) {

        var lctrl = this;

        lctrl.goToHome = function() {
                $location.path('/home/Saket/Vizag');
        };

        console.log('login controller');
    }



}) (angular);