function capitalize(string) {
  const firstLetter = string.charAt(0).toUpperCase();
  let slicedString = string.slice(1)
  return firstLetter + slicedString;
}

function reverseString(string) {
  let stringArr = string.split('');
  let reverseArr = stringArr.reverse();
  return reverseArr.join('');
}

let calculator = {
  add: (x,y) => x + y,
  subtract: (x,y) => x - y,
  multiply: (x,y) => x * y,
  divide: (x,y) => x / y
}

module.exports = { capitalize, reverseString, calculator } 