(function() {

  'use strict';

  angular
    .module('gDatingApp.config', ['ui.router'])
    .config(appConfig)
    .run(routeStart);

  appConfig = ['$stateProvider', '$urlRouterProvider'];
  routeStart.$inject = ['$rootScope', '$location', '$window', 'authService'];

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl',
      restricted: false,
      preventLoggedIn: true
    })
    .state('member', {
      url: '/member',
      templateUrl: 'js/components/member/member.view.html',
      controller: 'memberController',
      controllerAs: 'memberCtrl',
      restricted: true,
      preventLoggedIn: true
    })
    .state('member.info', {
      templateUrl: 'js/components/member/partials/_info.html',
      controller: 'memberController',
      controllerAs: 'memberCtrl',
      restricted: true,
      preventLoggedIn: true
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/components/auth/login.view.html',
      controller: 'loginController',
      controllerAs: 'loginCtrl',
      restricted: false,
      preventLoggedIn: false
    });
  }

  function routeStart($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChageStart', (event, next, curret) => {
      console.log('test', next.restricted);
      if (next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/login');
      }
    });
  }

})();
