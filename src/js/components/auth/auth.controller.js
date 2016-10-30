(function() {

  'use strict';

  angular
    .module('gDatingApp.components.auth', [])
    .controller('loginController', loginController);

  loginController.$inject = ['authService'];

  function loginController(authService) {
    /*jshint validthis: true */
    this.user = {};
    this.onSubmit = (login) => {
      authService.loginInfo(login)
      .then((user) => {
        localStorage.setItem('token', user.data.data.token);
      });
      this.user = {};
    };
  }
})();
