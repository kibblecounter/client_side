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

      //create new user with email/pw
      var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
      ref.createUser({
        email    : "bobtony@firebase.com",
        password : "correcthorsebatterystaple"
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });
      //log in with email/pw
      var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
        ref.authWithPassword({
        email    : "bobtony@firebase.com",
        password : "correcthorsebatterystaple"
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
});


    }
