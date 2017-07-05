let fs = require('fs')

let ts = require('typescript/lib/tsserver')
ts.supportedTypeScriptExtensions.push('.js')
ts.getScriptKindFromFileName = (fileName) => {
        var ext = fileName.substr(fileName.lastIndexOf("."));
        switch (ext.toLowerCase()) {
            case ".js":
                return 3;
            case ".jsx":
                return 4;
            case ".ts":
                return 3;
            case ".tsx":
                return 4;
            default:
                return 0;
        }
    }
/*let sortAndDeduplicateDiagnostics = ts.sortAndDeduplicateDiagnostics
ts.sortAndDeduplicateDiagnostics = (diagnostics) => {
fs.appendFileSync('C:/temp/logts.txt', 'diagnostics' + JSON.stringify(diagnostics))

  return sortAndDeduplicateDiagnostics(diagnostics.filter(diagnostic => diagnostic.code != 2339))
}*/
ts.Diagnostics.Property_0_does_not_exist_on_type_1.category = 0 //ts.DiagnosticCategory.Message // or .Warning
ts.Diagnostics.Generic_type_0_requires_1_type_argument_s.category = 2
module.exports = ts
