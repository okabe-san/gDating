(function() {

  'use strict';

  angular
    .module('gDatingApp.components.member', [])
    .controller('memberController', memberController)
    .controller('infoController', infoController)
    .controller('popularController', popularController);

  memberController.$inject = ['memberService'];
  infoController.$inject = ['infoService'];

  function memberController(memberService) {
    /*jshint validthis: true */
    // this.greeting = 'Hello World!';
    memberService.getInfo()
    .then((member) => {
      this.member = member;
      // console.log(this.member);
    });
  }

  function infoController(infoService) {
    /*jshint validthis: true */
    this.person = infoService.person;
    this.info = (person) => {
      console.log('test', person);
      this.person.selected = person;
    };
  }

  function popularController() {

  }

})();
