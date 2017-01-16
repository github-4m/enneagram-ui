angular.module('loginService', ['ngResource']);
angular.module('loginService').factory('SignIn', function($resource, CookiesManager, RequestIdManager) {
  return $resource(CookiesManager.get('api') + '/api/login', null, {
    post: {
      method: 'POST',
      params: {
        'requestId': RequestIdManager.get()
      }
    }
  });
});