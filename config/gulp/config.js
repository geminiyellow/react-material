var args = require('minimist')(process.argv.slice(2));
var VERSION = args.version || require('../../package.json').version;

module.exports = {
  banner: (
    '/*!\n' +
    ' * React Material Design\n' +
    ' * https://github.com/ilivebox/react-material\n' +
    ' * @license MIT\n' +
    ' * v' + VERSION + '\n' +
    ' */\n'
  ),

  jsBaseFiles: [
    'src/core/**/*.js'
  ],
  jsFiles: [
    'src/**/*.js',
    '!src/**/*.spec.js'
  ],
  mockFiles: [],
  themeBaseFiles: [
    'src/core/style/variables.scss',
    'src/core/style/mixins.scss'
  ],
  scssBaseFiles: [
    'src/core/style/color-palette.scss',
    'src/core/style/variables.scss',
    'src/core/style/mixins.scss',
    'src/core/style/structure.scss',
    'src/core/style/typography.scss',
    'src/core/services/layout/layout.scss'
  ],
  scssStandaloneFiles: [
    'src/core/services/layout/layout.attributes.scss'
  ],
  scssTestFiles: [
    'src/core/services/layout/layout.scss'
  ],
  paths: 'src/{components,services}/**',
  outputDir: 'dist/'
};


