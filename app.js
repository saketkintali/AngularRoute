/**
 * Created by saketmohan on 7/18/15.
 */
(function(angular) {

    var msg = angular.module('myapp',['ngRoute']);

    msg.config(moduleConfig);

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login.html',
                controller: 'LoginCtrl',
                controllerAs: 'lctrl'
            })
            .when('/home/:name/:city', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl',
                controllerAs: 'hctrl'
            })
            .when('/profile', {
                templateUrl: 'profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'pctrl',
                resolve: {
                    userData: loadUser,
                    userPicData: loadUserPic
                }
            })
            .otherwise({
                redirectTo: '/login'
            });

        function loadUser($http) {
          return  $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/users/1'

            });
        }

        function loadUserPic($http) {
            return  $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/photos/1'

            });
        }
    }



})(angular);