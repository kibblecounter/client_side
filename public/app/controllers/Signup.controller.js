angular
  .module("kibbleCounter")
  .controller("SignupController", SignupController);

SignupController.$inject = ['$scope', "$firebaseAuth"]

function SignupController ($scope, $firebaseAuth){

//create new user with email/pw
  var ref = new Firebase("https://kibblecounter.firebaseio.com");
  ref.createUser({
    email    : " ",
    password : " "
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });

}
