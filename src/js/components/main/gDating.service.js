(function() {

  'use strict';

  angular
    .module('gDatingApp.components.main')
    .service('memberService', memberService)
    .service('infoService', infoService)
    .service('popularService', popularService)
    .service('authService', authService);

  memberService.$inject = ['$http'];
  authService.$inject = ['$http'];

  function memberService($http) {
    /*jshint validthis: true */
    this.getInfo = () => {
      return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members?limit=20&offset=100')
      .then((result) => {
        return result.data.data;
      });
    };
  }

  function infoService() {
    /*jshint validthis: true */
    // this.person = [];
    // a1 { selected: b4 }
    this.person = { selected: {} };
  }

  function popularService() {
    /*jshint validthis: true */
    this.popularList = [];
  }

  function authService($http) {
    /*jshint validthis: true */
    this.loginInfo = (login) => {
      return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login', login);
    };
  }
})();
