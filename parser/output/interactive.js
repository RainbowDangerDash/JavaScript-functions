define(function (require, exports, module) {var lang=require('./lang.js');
var expressionFeatures=require('./lang.js')
var regexGrammar=require('./regex-rules.js')
var parse=require('./parser.js')
const { Step, getType, ParseContext } = require("./Step.js");
debugger;
var stepperresult=expressionFeatures["string"](new Step("testing",new ParseContext,0),"testing");
var x=parse(expressionFeatures, {grammar:{type:"repetition",to:5,from:0,quantifier:"greedy",child:"a"}}, "a" )
console.log('parse(expressionFeatures, regexGrammar, "/hell"+ "o/");')
module.exports={parse:parse,expressionFeatures:expressionFeatures}

});
