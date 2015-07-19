/**
 * Created by saketmohan on 7/17/15.
 */
/**
 * Created by saketmohan on 7/18/15.
 */
(function(angular) {

    var msg = angular.module('myapp');
    msg.controller('ProfileCtrl', ProfileController);

    function ProfileController($http, userData, userPicData) {

        var pctrl = this;
        pctrl.users = userData.data;
        pctrl.users.imgUrl = userPicData.data.url;
        console.log('profile controller');
        console.log(userData);

    }



}) (angular);