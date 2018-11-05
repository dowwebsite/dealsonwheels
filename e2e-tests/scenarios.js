'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /v1_landing when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/v1_landing");
  });


  describe('v1_landing', function() {

    beforeEach(function() {
      browser.get('index.html#!/v1_landing');
    });


    it('should render v1_landing when user navigates to /v1_landing', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('v2_createAd', function() {

    beforeEach(function() {
      browser.get('index.html#!/v2_createAd');
    });


    it('should render v2_createAd when user navigates to /v2_createAd', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
