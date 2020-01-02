var settings = require('simple-settings/dist/simple-settings.api.js')
var editing = require('simple-editing/simple-editing.api.js')
var core = require('simple-core/simple-core.api.js')

var apiList =  []

exports.apiList = apiList.concat(settings, editing, core)