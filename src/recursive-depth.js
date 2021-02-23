const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let maxDepth = 1;

    for(let item of arr){
      if(Array.isArray(item)){
        let depth = this.calculateDepth(item) + 1;

        if(depth > maxDepth){
          maxDepth = depth;
        }
      }
    }

    return maxDepth;
  }
};
