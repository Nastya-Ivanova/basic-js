const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];

  try{
    if(!Array.isArray(arr)){
      throw new Error('Error');
    }
  }
  catch (err){
    return e.message;
  }

  for(let i=0; i<arr.length;i++){

    if(typeof arr[i] == 'string' && arr[i].includes('--d')){
      switch(arr[i]){
        case '--discard-next':
        i++;
        break;

        case '--discard-prev':
        if((i-1) >= 0 && arr[i-2] != '--discard-next'){
          newArr.pop();
        }
        break;

        case '--double-next':
        if((i+1) < arr.length){
          newArr.push(arr[i+1]);
        }
        break;

        case '--double-prev':
        if((i-1) >= 0 && arr[i-2] != '--discard-next'){
          newArr.push(arr[i-1]);
        }
        break;
      }
    }
    else{
      newArr.push(arr[i]);
    }
  }

  return newArr;
};
