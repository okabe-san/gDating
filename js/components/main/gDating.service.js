(function() {

  'use strict';

  angular
    .module('gDatingApp.components.main')
    .service('memberService', memberService)
    .service('infoService', infoService)
    .service('popularService', popularService)
    .service('matchService', matchService)
    .service('matchMemberService', matchMemberService)
    .service('authService', authService);

  memberService.$inject = ['$http'];
  matchService.$inject = ['$http'];
  authService.$inject = ['$http'];

  function memberService($http) {
    /*jshint validthis: true */
    this.getInfo = () => {
      return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members?limit=100&offset=100')
      .then((result) => {
        return result.data.data;
      });
    };
  }

  function infoService() {
    /*jshint validthis: true */
    this.person = { selected: {} };
  }

  function popularService() {
    /*jshint validthis: true */
    this.popularList = [];
  }

  function matchService($http) {
    /*jshint validthis: true */
    this.getMatches = (memberId) => {
      return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members/' + memberId + '/matches')
      .then((matches) => {
        let ids = matches.data.data;
        this.matchMember = ids.reduce((prev, curr) => {
          return prev.concat(curr._id);
        }, []);
        return this.matchMember;
      });
    };
  }

  function matchMemberService() {
    /*jshint validthis: true */
    this.matchMember = [];
  }

  function authService($http) {
    /*jshint validthis: true */
    this.loginInfo = (login) => {
      return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login', login);
    };
    this.registerInfo = (register) => {
      return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/register', register);
    };
  }
})();
