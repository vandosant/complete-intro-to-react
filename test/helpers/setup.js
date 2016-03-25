// setup browser pipeline to run tests through babel
require('babel-register')
require('babel-polyfill')

// starter dom for browser test #kent-c.-dodds
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
