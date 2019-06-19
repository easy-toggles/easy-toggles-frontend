module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  setupFilesAfterEnv: ['./setupEnzyme.ts'],
  testMatch: [ "**/test/**/*.test.ts?(x)" ],
  globals: {
    'ts-jest': {
      babelConfig: './.babelrc'
    }
  }
}
