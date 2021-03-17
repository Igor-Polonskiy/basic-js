const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repeatTimes = 1
    let separator = '+'
    let addition = ''
    let additionRepeatTimes = 0
    let additionSeparator = '|'
    str = String(str)

    if (options.repeatTimes) {
        repeatTimes = options.repeatTimes
    }
    if (options.separator) {
        separator = options.separator
    }
    if (typeof options.addition !=='undefined') {

        addition = `${options.addition}`
        
    }
    if (options.additionRepeatTimes) {
        additionRepeatTimes = options.additionRepeatTimes
    }
    if (options.additionSeparator) {
        additionSeparator = options.additionSeparator
    }
    if (repeatTimes > 0) {
        let res = `${addition}`
        for (let j = 1; j < additionRepeatTimes; j++) {
            res = `${res}${additionSeparator}${addition}`
        }

        let fullres = `${str}${res}`

        let res1 = `${str}${res}`
        for (let i = 1; i < repeatTimes; i++) {
            fullres = `${fullres}${separator}${res1}`
        }
        return fullres
    } else return

};