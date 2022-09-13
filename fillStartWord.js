const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let stw = startWord
  let w = word

   if(w ===null || w === undefined) {
    return undefined
  }
   else if(w.startsWith(stw)){
    return word
  }else{
    return stw+w
  }
}
module.exports = fillStartWord
