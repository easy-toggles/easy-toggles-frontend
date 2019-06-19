var config = require('./jest.config')
config.testMatch = [ "**/test/unit/**/*.test.[jt]s?(x)" ]
console.log('RUNNING UNIT TESTS')
module.exports = config

