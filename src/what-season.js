const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // const date = new Date([13, 14, 1967, 5647]);
  
// const date = new Date('foo');
// console.log(date instanceof Date);
// console.log(new Date().toString);
// console.log(date.toString);

  if (date == undefined || date == null) {
    return 'Unable to determine the time of year!';
    // console.log('Unable to determine the time of year!');
  }
  else if (!(date instanceof Date) || date.toString !== new Date().toString) {
    throw new Error ("Invalid date!");
    // console.log("Invalid date!");
  }
  let month = (date.getMonth()+1);
  // console.log(month);
  if(month == 12 || month == 1 || month == 2) {
    return 'winter';
  }

  if(month>=3 && month<=5) {
    return 'spring';
  }
  //
  if(month>=6 && month<=8) {
    return 'summer';
  }

  if(month>=9 && month<=11) {
  return 'autumn';

  };
}

module.exports = {
  getSeason
};
