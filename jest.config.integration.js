var config = require('./jest.config')
config.testMatch = [ "**/test/integration/**/*.test.[jt]s?(x)" ]
module.exports = config

