const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let teamName = '';
  for(let item of members){
    if((typeof item) == 'string'){
      teamName += item.trim()[0].toUpperCase();
    }
  }  
  return teamName.split('').sort().join('');
};
