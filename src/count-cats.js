const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(!matrix){
    return false;
  }
  let count = 0;
  for(let i = 0; i < matrix.length; i++){
    matrix[i].filter(function(item){
      if(!(('' + item).localeCompare("^^"))){
        return count ++;
      }
    });
  }
  return count;
};
