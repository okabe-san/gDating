// sample angular code

(function() {

  'use strict';

  angular
    .module('gDatingApp', [
      'ui.router',
      'gDatingApp.config',
      'gDatingApp.components.main',
      'gDatingApp.components.member',
      'ui.materialize'
    ]);

})();
