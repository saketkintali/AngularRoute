/**
 * Created by saketmohan on 7/18/15.
 */
(function(angular) {

    angular.module('myapp').controller('HomeCtrl', HomeController);

    function HomeController($routeParams) {

        var hctrl = this;
        hctrl.params = $routeParams;
        console.log('params: ',$routeParams);
        console.log('home controller');
    }



}) (angular);