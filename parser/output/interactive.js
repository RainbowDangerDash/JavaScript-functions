define(function (require, exports, module) {var lang=require('./lang.js');
var expressionFeatures=require('./lang.js')
var regexGrammar=require('./regex-rules.js')
var parse=require('./parser.js')

console.log('parse(expressionFeatures, regexGrammar, "/hell"+ "o/");')
module.exports={parse:parse,expressionFeatures:expressionFeatures}

});
