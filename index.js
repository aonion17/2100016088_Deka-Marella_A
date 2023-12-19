const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "2,4"
const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0).toString();
};
/**
 * Write your description here, why the function is not working?
 */

const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
