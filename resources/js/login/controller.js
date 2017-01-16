angular.module('loginController', []);
angular.module('loginController').controller('loginCtrl', ['$scope', 'AlertManager', 'SignIn', function($scope, AlertManager, SignIn) {
  // datasource section
  $scope.signIn = function(username, password) {
    SignIn.post({
      'username': username,
      'password': password
    }, function(response) {
      if (response.success) {
        // do something here after login
      } else {
        AlertManager.add('danger', response.errorMessage);
      }
    }, function(response) {
      AlertManager.add('danger', response.data.message);
    });
  }
  // clickable section
  $scope.clickSignIn = function() {
    $scope.signIn($scope.username, $scope.password);
  }
  $scope.clickCloseAlert = function(index) {
    AlertManager.remove(index);
  }
  $scope.initialize = function() {
    $scope.alerts = AlertManager.getAll();
    $scope.username = null;
    $scope.password = null;
  }
  $scope.initialize();
}]);