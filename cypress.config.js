const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://bugbank.netlify.app/',
    viewportWidth: 1536,
    viewportHeight: 960
  }
})
