const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members ) {
  if(Array.isArray(members)){
    return  members.filter(i=> typeof i == 'string').map(item=> item = item.toUpperCase()).map(item=>item = item.split(' ').filter(i=> i != ' ').join('')).sort().map(item => item = item[0]).join('')
  }else return false
  
};
