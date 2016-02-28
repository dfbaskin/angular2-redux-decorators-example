import express from 'express'

let app = express()

var vendorFiles = {
  'es6-shim': 'node_modules/es6-shim',
  'systemjs': 'node_modules/systemjs/dist',
  'angular2': 'node_modules/angular2',
  'rxjs': 'node_modules/rxjs',
  'foundation': 'node_modules/foundation-sites/dist',
  'jquery': 'node_modules/foundation-sites/node_modules/jquery/dist',
  'what-input': 'node_modules/foundation-sites/node_modules/what-input',
  'redux': 'node_modules/redux/dist',
  'redux-thunk': 'node_modules/redux-thunk/lib',
  'lodash': 'node_modules/lodash'
}
for (let [name, path] of Object.entries(vendorFiles)) {
  app.use('/vendor/' + name, express.static(path))
}

app.use('/app', express.static('dist/es5'))
app.use('/', express.static('src'))

export default app
