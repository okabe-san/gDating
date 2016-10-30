(function() {

  'use strict';

  angular
    .module('gDatingApp.components.member', [])
    .controller('memberController', memberController)
    .controller('infoController', infoController);

  memberController.$inject = ['memberService', 'popularService'];
  infoController.$inject = ['infoService'];

  function memberController(memberService, popularService) {
    /*jshint validthis: true */
    // this.greeting = 'Hello World!';
    memberService.getInfo()
    .then((member) => {
      this.members = member;
      console.log(this.members);
    });
    this.popularCheck = function() {
      this.members = getLikes(popularService, this.members);
      console.log(this.members);
    };
  }

  function infoController(infoService) {
    /*jshint validthis: true */
    this.person = infoService.person;
    this.info = (person) => {
      // console.log('test', person);
      this.person.selected = person;
    };
  }

  function getLikes(popularService, members) {
    /*jshint validthis: true */
    const popular = popularService.popularList;
    let memberId = members.map((member) => member._id);
    let checkList = members.reduce((prev, curr) => {
      return prev.concat(curr._matches);
    }, []);
    let result = checkList.map((check) => {
      if (memberId.indexOf(check) > -1) {
        let temp = members.filter((tempMember) => {
          if (tempMember._id === check) {
            return tempMember;
          }
        });
        let test = {
          _id: '',
          num: 0,
          username: '',
          description: ''
        };
        test._id = check;
        test.num++;
        test.username = temp.username;
        test.description = temp.description;
        return test;
      }
    }).filter((item) => item);
    popular.push(result);
    return popular[0];
  }

})();
