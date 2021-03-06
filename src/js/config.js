(function() {

  'use strict';

  angular
    .module('gDatingApp.config', ['ui.router'])
    .config(appConfig)
    .run(routeStart);

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl',
      restricted: false
    })
    .state('member', {
      url: '/member',
      templateUrl: 'js/components/member/member.view.html',
      controller: 'memberController',
      controllerAs: 'memberCtrl',
      restricted: true
    })
    .state('member.info', {
      templateUrl: 'js/components/member/partials/info.html',
      controller: 'memberController',
      controllerAs: 'memberCtrl',
      restricted: true
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/components/auth/login.view.html',
      controller: 'authController',
      controllerAs: 'authCtrl',
      restricted: false
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/components/auth/register.view.html',
      controller: 'authController',
      controllerAs: 'authCtrl',
      restricted: false
    });
  }

  function routeStart($rootScope, $state, authService) {
    $rootScope.$on('$stateChangeStart', (event, toState, fromState) => {
      // console.log('test', toState);
      if (toState.restricted && !localStorage.getItem('token')) {
        event.preventDefault();
        $state.go('login');
      }
    });
  }

})();
