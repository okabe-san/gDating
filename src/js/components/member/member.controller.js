(function() {

  'use strict';

  angular
    .module('gDatingApp.components.member', [])
    .controller('memberController', memberController)
    .controller('infoController', infoController);

  memberController.$inject = ['memberService', 'popularService', 'matchService', '$scope', '$state'];
  infoController.$inject = ['memberService', 'infoService', 'matchService', 'matchMemberService'];
  getLikes.$inject = ['popularService'];

  function memberController(memberService, popularService, matchService, $scope, $state) {
    /*jshint validthis: true */
    memberService.getInfo()
    .then((member) => {
      this.members = member;
    });
    $scope.reload = function () {
      $state.reload();
    };
    this.popularCheck = function() {
      this.members = getLikes(popularService, this.members);
    };
  }

  function infoController(memberService, infoService, matchService, matchMemberService) {
    /*jshint validthis: true */
    this.person = infoService.person;
    this.match = matchMemberService.matchMember;
    this.info = (person) => {
      this.person.selected = person;
      const id = this.person.selected._id;
      matchService.getMatches(id)
      .then((ids) => {
        matchMemberOnly(ids, memberService)
        .then((result) => {
          this.match.matchMember = result;
        });
      });
    };
  }

  function matchMemberOnly(ids, memberService) {
    /*jshint validthis: true */
    return memberService.getInfo()
    .then((members) => {
      let result = members.filter((member) => {
        return ids.indexOf(member._id) !== -1;
      });
      return result;
    });
  }

  function getLikes(popularService, members) {
    /*jshint validthis: true */
    let check = members.reduce((prev, curr) => {
      return prev.concat(curr._matches);
    }, []);
    let result = members.filter((member) => {
      return check.indexOf(member._id) !== -1;
    });
    result.map((id) => {
      id.count = 0;
      check.forEach((num) => {
        if (num === id._id) {
          id.count++;
        }
      });
      return id;
    });
    return result;
  }

})();
