/// <reference types="cypress" />
const cucmber = require('cypress-cucumber-preprocessor').default;
const csvdata = require('csvdata');
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on("file:preprocessor", cucmber());
}


module.exports = (on, config) =>{
on('task', {
      log (message) {
        csvdata.write('./faillogs.csv', message, {append: true, header: 'Step'})
        return null
    }
  })
}
