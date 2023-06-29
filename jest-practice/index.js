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

module.exports = { capitalize, reverseString } 