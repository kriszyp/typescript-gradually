let fs = require('fs')
fs.writeFileSync('C:/temp/logtsc.txt', 'starting tsc')
let tsc = require('typescript/lib/tsc')
tsc.supportedTypeScriptExtensions.push('.js')
tsc.getScriptKindFromFileName = (filename) => 2
module.exports = tsc
