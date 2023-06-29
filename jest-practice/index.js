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

function ceasarCypher(text, keyVal) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let textArray = text.split('')
  let cypheredWord = [];
  textArray.forEach(letter => {
    cypheredWord.push(alphabet[alphabet.indexOf(letter) + keyVal]);
  })
  return cypheredWord.join('');
}

console.log(ceasarCypher('kitten', 1));

module.exports = { capitalize, reverseString, calculator, ceasarCypher } 