(function() {

  'use strict';

  angular
    .module('gDatingApp.components.member', [])
    .controller('memberController', memberController)
    .controller('popularConroller', popularConroller)
    .controller('infoController', infoController);

  memberController.$inject = ['memberService'];
  popularConroller.$inject = ['popularService'];
  infoController.$inject = ['infoService'];

  function memberController(memberService) {
    /*jshint validthis: true */
    // this.greeting = 'Hello World!';
    memberService.getInfo()
    .then((member) => {
      this.members = member;
    });
  }

  function popularConroller(popularService) {
    /*jshint validthis: true */
    this.popular = popularService.popularList;
    this.popularCheck = (members) => {
      let memberId = members.map((member) => member._id);
      let checkList = members.reduce((prev, curr) => {
        return prev.concat(curr._matches);
      }, []);
      let result = checkList.map((check) => {
        if (memberId.indexOf(check) > -1) {
          let test = {
            id: '',
            num: 0
          };
          test.id = check;
          test.num++;
          return test;
        }
      }).filter((item) => item);
      console.log(result);
    };
    //   let checkList = [];
    //   let membersId = [];
    //   let result = [];
    //   members.forEach(function (member) {
    //     membersId.push(member._id);
    //     member._matches.forEach(function (match) {
    //       if(checkList.indexOf(match) === -1) {
    //         checkList.push(match);
    //       }
    //     });
    //   });
    //   checkList.forEach(function (check) {
    //     let test = {
    //       id: '',
    //       num: 0
    //     };
    //     if (membersId.indexOf(check) > -1) {
    //       test.id = check;
    //       test.num ++;
    //       result.push(test);
    //     }
    //   });
    //   console.log(result);
  }

  function infoController(infoService) {
    /*jshint validthis: true */
    this.person = infoService.person;
    this.info = (person) => {
      // console.log('test', person);
      this.person.selected = person;
    };
  }

})();
