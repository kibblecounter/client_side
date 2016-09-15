angular
  .module("kibbleCounter")
  .controller("DashboardController", DashboardController);

  DashboardController.$inject = ["$scope", "$firebaseObject"];


  function DashboardController($scope, $firebaseObject) {
    var firebaseFoodRef = new Firebase(
      'https://kibblecounter.firebaseio.com/currentLevelFood');
    $scope.data = $firebaseObject(firebaseFoodRef);

    var firebaseWaterRef = new Firebase(
      'https://kibblecounter.firebaseio.com/currentLevelWater');
    $scope.data2=$firebaseObject(firebaseWaterRef)
    
  }
