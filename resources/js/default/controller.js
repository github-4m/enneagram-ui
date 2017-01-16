angular.module('defaultController', []);
angular.module('defaultController').controller('headerCtrl', ['$scope', '$window', 'PropertiesManager', function($scope, $window, PropertiesManager) {
  angular.element($window).bind('resize', function() {
    $scope.innerWidth = $window.innerWidth;
    $scope.$apply();
  });
  $scope.isHorizontalNavigation = function() {
    if ($scope.innerWidth > 680) {
      return true;
    } else {
      return false;
    }
  }
  $scope.isNavigation = function() {
    if ('login' != $scope.pageCode && $scope.navs.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  // datasource section
  $scope.propertiesManager = function() {
    PropertiesManager.init();
  }
  $scope.initialize = function() {
    $scope.innerWidth = $window.innerWidth;
    $scope.pageCode = pageCode;
    $scope.navs = [];
    $scope.navs.push({
      code: 'student',
      name: 'Student',
      link: '/admin/student',
      sequence: 0
    });
    $scope.navs.push({
      code: 'questionnaire',
      name: 'Questionnaire',
      link: '/admin/questionnaire',
      sequence: 1
    });
    $scope.navs.push({
      code: 'user',
      name: 'User',
      link: '/admin/user',
      sequence: 2
    });
    $scope.propertiesManager();
  }
  $scope.initialize();
}]);
angular.module('defaultController').controller('footerCtrl', ['$scope', function($scope) {}]);