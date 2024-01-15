const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n8fc1i',
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/*.js',
    setupNodeEvents(on, config) {
     
    },
  },
  chromeWebSecurity: false,
  browser: "chrome",
  chromeBinary: "/usr/bin/google-chrome",
  watchForFileChanges: false
});
