angular
  .module("kibbleCounter")
  .controller("AuthController", AuthController);

AuthController.$inject = ['$scope', "$firebaseAuth"]

// Re-usable factory that generates the $firebaseAuth instance
kibbleCounter.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://kibblecounter.firebaseio.com");
  return $firebaseAuth(ref);
});

function AuthController ($scope, Auth) {

  // Listens for changes in authentication state
  Auth.$onAuth(function(authData) {
    $scope.authData = authData;

  });

  // Logs in a user with GitHub
  $scope.login = function() {
    Auth.$authWithOAuthPopup("github").catch(function(error) {
      console.error("Error authenticating with Google:", error);
    });
  };

  // Logs out the logged-in user
  $scope.logout = function() {
    Auth.$unauth();
  };
}
