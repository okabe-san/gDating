(function() {

  'use strict';

  angular
    .module('gDatingApp.config', ['ui.router'])
    .config(appConfig);

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .state('member', {
      url: '/member',
      templateUrl: 'js/components/member/member.view.html',
      controller: 'memberController',
      controllerAs: 'memberCtrl'
    })
    .state('member.info', {
      templateUrl: 'js/components/member/partials/_info.html',
      controller: 'memberController',
      controllerAs: 'memberCtrl'
    });
  }

})();
