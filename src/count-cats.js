const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countCats = 0;
  let arrCats = [].concat(...matrix) //  объеденили массивы через спред-оператор

  for (let i = 0; i <  arrCats.length; i++) {

    if (arrCars[i] == '^^') {
      countCats +=1;
    }
  }

  return countCats;
}

module.exports = {
  countCats
};
