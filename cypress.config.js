const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mcjv9v',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
