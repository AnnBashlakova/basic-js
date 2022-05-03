const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // let   res = [];
  // if (!Array.isArray(arr)) throw  new Error('\'arr\' parameter must be an instance of the Array!');
  //   else if (arr[0] == undefined) return arr;
  // for (let i = 0; i < arr.length; i++) {

  // }


    
}

module.exports = {
  transform
};
