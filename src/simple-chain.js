const CustomError = require("../extensions/custom-error");


const chainMaker = {
  chainarr: [],

  getLength() {
    return this.chainarr.length
  },
  addLink(value) {

    value = String(value)
    this.chainarr.push(`( ${value} )`)

    return this
  },
  removeLink(position) {
    if (this.chainarr.length > position || position < 1) {
      this.chainarr.splice(position - 1, 1)
    } else {
      this.chainarr = []
      throw Error
    }
    return this
  },
  reverseChain() {
    this.chainarr.reverse()
    return this
  },
  finishChain() {
    let chain = this.chainarr.join('~~')
    this.chainarr = []
    return chain

  }
};

module.exports = chainMaker;