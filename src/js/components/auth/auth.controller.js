(function() {

  'use strict';

  angular
    .module('gDatingApp.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['authService', '$state'];

  function authController(authService, $state) {
    /*jshint validthis: true */
    this.user = {};
    this.newUder = {};
    this.onSubmit = (login) => {
      authService.loginInfo(login)
      .then((user) => {
        localStorage.setItem('token', user.data.data.token);
        $state.go('member');
      });
      this.user = {};
    };
    this.logout = () => {
      $state.go('home');
      localStorage.clear();
    };
    this.onClick = (register) => {
      authService.registerInfo(register)
      .then((newUser) => {
        localStorage.setItem('token', newUser.data.data.token);
        $state.go('member');
      });
      this.newUser = {};
    };
  }

})();
