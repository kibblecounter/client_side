angular
  .module("kibbleCounter")
  .controller("LoginController", LoginController);

LoginController.$inject = ['$scope', "$firebaseAuth"]

function LoginController ($scope, $firebaseAuth){
    var firebaseAuth = new Firebase("https://kibblecounter.firebaseio.com");
    var auth = $firebaseAuth(firebaseAuth);

      $scope.login = function() {
        $scope.authData = null;
        $scope.error = null;

        auth.$authAnonymously().then(function(authData) {
          $scope.authData = authData;
        }).catch(function(error) {
          $scope.error = error;
        });
      }

      //log in with email/pw
      var ref = new Firebase("https://kibblecounter.firebaseio.com");
        ref.authWithPassword({
        email    : " ",
        password : " "
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
});
      var ref = new Firebase("https://kibblecounter.firebaseio.com");
        ref.onAuth(function(authData){
          if (authData) {
            //user logged in
          } else {
            //user logged out
          }
        })
    }
