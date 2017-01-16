angular.module('defaultService', ['ngResource', 'ngCookies']);
angular.module('defaultService').factory('AlertManager', function() {
  var alerts = [];
  var alertManager = {
    add: function(type, msg) {
      alerts.push({
        type: type,
        msg: msg
      });
    },
    remove: function(index) {
      alerts.splice(index, 1);
    },
    getAll: function() {
      return alerts;
    }
  };
  return alertManager;
});
angular.module('defaultService').factory('RequestIdManager', function(CookiesManager) {
  var requestId = '';
  if (CookiesManager.get('username') == null) {
    requestId = 'anonymous-' + (new Date).getTime();
  } else {
    requestId = CookiesManager.get('username') + '-' + (new Date).getTime();
  }
  return {
    get: function() {
      return requestId;
    }
  }
});
angular.module('defaultService').factory('PropertiesManager', function($http, CookiesManager) {
  return {
    init: function() {
      $http.get('/resources/properties/api.properties').then(function(response) {
        CookiesManager.put('api', response.data.api);
      });
    }
  }
});
angular.module('defaultService').factory('CookiesManager', function($cookies) {
  var cookiesManager = {
    get: function(key) {
      var value = $cookies.get(key);
      return typeof value == 'undefined' || value == 'null' ? null : value;
    },
    put: function(key, value) {
      $cookies.put(key, value, {
        path: '/'
      });
    },
    remove: function(key) {
      $cookies.remove(key, {
        path: '/'
      });
    }
  };
  return cookiesManager;
});