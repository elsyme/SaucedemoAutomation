const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    defaultCommandTimeout:20000,
    chromeWebSecurity : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});