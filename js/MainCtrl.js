//
angular
  .module('avengerApp')
  .controller('MainCtrl', function($scope, dataService) {

    console.log(dataService.car);

    $scope.test = "it's working!!";


    //By the way, never hard code your data like below.
    //This is purely for demo/learning purposes

    $scope.avengers = teamAvengers;
  }); //end controller

  //}); //end MainCtrl



/*
angular.module('cool-app')
  .controller('MainCtrl', function($scope) {

  //we need our controller to have access to our data, so we use scope
  $scope.myName = "Dustin";
  //the above is 1 way binding

  //this is 2 way binding
  $scope.thisIsAwesome = "hey there!";

});
*/
