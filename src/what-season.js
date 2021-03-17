const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  let season
  if (date) {
    if (Object.prototype.toString.call(date) != '[object Date]') {
      throw Error
    } else {
      switch (date.getMonth()) {
        case 0:
          season = 'winter'
          break;
        case 1:
          season = 'winter'
          break;
        case 2:
          season = 'spring'
          break;
        case 3:
          season = 'spring'
          break;
        case 4:
          season = 'spring'
          break;
        case 5:
          season = 'summer'
          break;
        case 6:
          season = 'summer'
          break;
        case 7:
          season = 'summer'
          break;
        case 8:
          season = 'autumn'
          break;
        case 9:
          season = 'autumn'
          break;
        case 10:
          season = 'autumn'
          break;
        case 11:
          season = 'winter'
          break;

        default:

          break;
      }
    }
  } else season = 'Unable to determine the time of year!'


  return season

};