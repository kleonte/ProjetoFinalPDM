(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$injector = ['$scope'];

    function HomeController($scope){

        
        $scope.msg = "Pictures";

        $scope.images = [];

        $scope.getGallery = function(){
          var auximages = [];
          galleryAPI.getMedia('Pictures', function(items){
              for(var i = items.length; i >= 0; i--){
                  auximages.push(items[i]);
              }
              $scope.images = auximages;
              $scope.$digest();
          }, function(error){alert(error);});

        }

        $scope.updateGallery = function(){
          $scope.getGallery();
          window.plugins.toast.showLongBottom('Atualizado!');
        }

        $scope.getGallery();



    }

})();
