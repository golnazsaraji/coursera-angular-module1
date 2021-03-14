(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.menu = "";
    $scope.message = "";


    $scope.diplayStatus = function(){
        if($scope.menu == "")
          $scope.message = "Please enter data first";
        else{
          var items = this.menu.split(',');
          var count = items.length;
          if(count <= 3)
            $scope.message = "Enjoy!";
          else
            $scope.message = "Too much!";
        }
    };
  }
})();
