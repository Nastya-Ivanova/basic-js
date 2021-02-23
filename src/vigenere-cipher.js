const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(toggle = 'true'){
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if(toggle){
      this.machine = 'direct';
    }
    else{
      this.machine = 'reverse';
    }
  }

  encrypt(message, key) {
    try{
      if(message === undefined || key === undefined){
        throw new Error('Error');
      }
    }
    catch(err){
      return e.message;
    }

    let letters = this.alphabet.split('');
    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let keyword = [];
    let encryptText = [];

//в цикле накладываем символы ключа на символы кодируемого сообщения
    let j=0;
    for(let i=0; i < messageArr.length; i++){
        if(messageArr[i] == ' '){
          keyword.push(' ');
        }
        else{
          keyword.push(keyArr[j]);
          j = (j+1) % keyArr.length;
        }
      }


    for(let i=0; i < messageArr.length; i++){
      if(!this.alphabet.includes(messageArr[i])){
        encryptText.push(messageArr[i]);
      }
      else if(messageArr[i] == ' '){
        encryptText.push(' ');
      }
      else{
        //формула ci = (pi + ki) % 26
        //p - исх текст
        //k - ключ
        let c = (letters.indexOf(messageArr[i]) + letters.indexOf(keyword[i])) % letters.length;
        encryptText.push(letters[c]);
      }
    }
    return this.machine == 'direct' ? encryptText.join('') : encryptText.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    try{
      if(encryptedMessage === undefined || key === undefined){
        throw new Error('Error');
      }
    }
    catch(err){
      return e.message;
    }

    let letters = this.alphabet.split('');
    let encryptedMessageArr = encryptedMessage.split('');
    let keyArr = key.toUpperCase().split('');
    let keyword = [];
    let decryptText = [];

//в цикле накладываем символы ключа на символы кодируемого сообщения
    let j=0;
    for(let i=0; i < encryptedMessage.length; i++){
        if(encryptedMessage[i] == ' '){
          keyword.push(' ');
        }
        else{
          keyword.push(keyArr[j]);
          j = (j+1) % keyArr.length;
        }
      }

    for(let i=0; i < encryptedMessageArr.length; i++){
      if(!this.alphabet.includes(encryptedMessageArr[i])){
        decryptText.push(encryptedMessageArr[i]);
      }
      else if(encryptedMessageArr[i] == ' '){
        decryptText.push(' ');
      }
      else{
        //формула pi = (ci - ki + 26) % 26
        let p = (letters.indexOf(encryptedMessageArr[i]) - letters.indexOf(keyword[i]) + letters.length) % letters.length;
        decryptText.push(letters[p]);
      }
    }
    return this.machine == 'direct' ? decryptText.join('') : decryptText.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
