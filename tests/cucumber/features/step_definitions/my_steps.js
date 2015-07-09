(function () {

  'use strict';

  module.exports = function () {

    var helper = this;


    this.Given(/^I'm on the home page$/, function (next) {
      var world = helper.world;
      world.browser.
        url(world.cucumber.mirror.rootUrl).
        call(callback);
    });

})();
