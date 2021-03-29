const CustomError = require("../extensions/custom-error");
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

class VigenereCipheringMachine {


  encrypt(str, code) {
    let lang = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let arrstr = str.toUpperCase().split('')
    let arrcode = code.toUpperCase().split('')
    let arrcodeLength = arrcode.length

    for (let i = arrcodeLength; i < arrstr.length; i++) {
      arrcode[i] = arrcode[i - arrcodeLength]
    }

    let arrnum = []
    let arrcodenum = []
    arrstr.forEach((item, index) => {
      if (lang.includes(item)) {
        for (let i = 0; i < lang.length; i++) {
          if (item == lang[i]) {
            arrnum.push(i+1)
          }
        }
      } else arrnum.push(item)
    })
    arrcode.forEach((item, index) => {
      for (let i = 0; i < lang.length; i++) {
        if (item == lang[i]) {
          arrcodenum.push(i+1)
        }
      }
    })
    let resstr = []
    for (let i = 0; i < arrnum.length;i++) {
      if (typeof arrnum[i] == 'number') {
        if (arrnum[i] + arrcodenum[i] < 27) {
          resstr.push(arrnum[i] + arrcodenum[i]-1)
        } else resstr.push(arrnum[i] + arrcodenum[i] - 27)
      }else resstr.push(arrnum[i])
    }
  let result=[]
   resstr.forEach(item=>{
     if( item > 0 && item <= 26){
      lang.forEach((el,i)=>{
        if(item-1 == i){
          result.push(el)
        }
      })
     }else result.push(item)
   })
    return arrcodenum.join('.')

  }
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }

}

module.exports = VigenereCipheringMachine;