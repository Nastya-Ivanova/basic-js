const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let subStr = '';
  
  if(!(options.addition === undefined)){
    subStr += options.addition;

    for(let i=0; i<options.additionRepeatTimes-1; i++){
      if(options.additionSeparator === undefined){
        options.additionSeparator = '|';
      }
      subStr = subStr + options.additionSeparator + options.addition;
    }
  }


  let resultStr = '' + str;

  if(options.separator === undefined){
    options.separator = '+';
  }

  for(let i=0; i<options.repeatTimes-1; i++){
    resultStr = resultStr + subStr + options.separator + str;
  }

  return resultStr + subStr;
};
