// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "default e2e tests": (browser) => {
    browser
      .url("https://www.baidu.com")
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".home")
      .end();
  }
};
