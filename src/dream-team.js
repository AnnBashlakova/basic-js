const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return false;

  }


let newArr = [];
for (let i = 0;i < members.length; i++){
  if(typeof members[i] == 'string'){
    newArr.push(members[i]);
  }
}
let doubleArr = newArr.map(item => item.trim());
let newName = doubleArr.map(function(item, index, array) {
return item[0].toUpperCase();
})
// let newString = newName.join('');
// return newName.join().toUpperCase().sort();
return newName.sort().join('');
}

module.exports = {
  createDreamTeam
};
