/**
 * Created by Happy on 02/09/17.
 */
'use strict';
(function(){

var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
    $scope.bshowGallery = false;
    $scope.bshowHome = true;
    $scope.data={};
    $scope.showGallery = function(){

        $scope.bshowGallery = true;
        $scope.bshowHome = false;
    }

    $scope.showHome = function(){
        $scope.bshowGallery = false;
        $scope.bshowHome = true;

    }





    /* JQuery Code */


    var $overlay = $('<div id="overlay"  ></div>');
    var $image =$('<img>');
    var $caption =$('<p></p>');

    $($overlay).append($image);
    $($overlay).append($caption);
    $('body').append($overlay);


    $("ul li a").click(function(e){

        if($(this).parent().parent().hasClass('main-nav')) {
            e.preventDefault();
            return;
        }
        e.preventDefault();

        alert('yes');


        $('.active-tab').not($class).removeClass('active-tab');
        $($overlay).show();

    })

});

app.directive('imageGallery', function(){
    return{
        restrict: 'A',
        templateUrl:'./partials/gallery.html'
    }
})





})();
