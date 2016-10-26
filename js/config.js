(function() {

  'use strict';

  angular
    .module('gDatingApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
     .when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .otherwise('/');
  }

})();
