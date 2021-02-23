const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],

  getLength() {//возвращает текущую длину цепочки в виде числа
    return this.arr.length;
  },
  addLink(value = '') {//добавляет в цепочку ссылку, содержащую string представление объекта value
    if(value === null){
      value = `${value}`;
    }
    this.arr.push(value);
    return this;
  },
  removeLink(position) {//убирает звено цепи в указанном положении
    if(typeof position === 'number' &&
       Number.isInteger(position) &&
       isFinite(position) &&
       position > 0 &&
       position <= this.arr.length){

        this.arr.splice(position-1,1);
    }
    else{
      this.arr.length = 0;

      try{
        throw new Error('Error');
      }
      catch(err){
        return e.message;
      }
    }
    return this;
  },
  reverseChain() {//переворачивает цепь
    this.arr.reverse();
    return this;
  },
  finishChain() {//заканчивается цепочка
    let str = this.arr.join(' )~~( ');
    str = '( ' + str + ' )';
    this.arr.length = 0;
    return str;
  }
};

module.exports = chainMaker;
