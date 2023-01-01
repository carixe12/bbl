const { config } = require('cypress/types/bluebird');

module.exports = (on, config) => {
    require('@cypress/code-coverage/task')(on, config);
    return config;
};

const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = (on, config) => {
    on("file:preprocessor", cucumber())
}