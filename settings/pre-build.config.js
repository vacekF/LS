var simpleEditing = require('simple-editing/pre-build-editing')
var simpleCompletion = require('simple-core/pre-build-completion')
if (process.env.NODE_ENV === 'development') {
  var simpleServer = require('simple-server/simple-server')
}

simpleEditing.processAllPages()
simpleCompletion.processAllPages()