const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let newarr = arr.concat()
    let resarr = []
    arr.forEach((item, index) => {
      switch (item) {
        case '--discard-next':
         
            newarr.splice(index, 2, undefined, undefined)
     
          break;
        case '--discard-prev':
          if (index > 0) {
            delete newarr[index-1]
            delete newarr[index]
          } else delete newarr[index]
          break;
        case '--double-next':
        
            newarr.splice(index, 1, newarr[index + 1])
     
          break;
        case '--double-prev':
          if (index > 0) {
            newarr.splice(index, 1, newarr[index - 1])
          } else delete newarr[index]
          break;

        default:
          break;
      }
    })
    resarr=newarr.filter(item=> item!=undefined)
    return resarr
  } else throw Error
};