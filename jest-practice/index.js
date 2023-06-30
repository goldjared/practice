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

function preProcessCeasarCipher(string) {
  string = string.toLowerCase();
  return string;

}

function ceasarCipher(text, keyVal) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  text = preProcessCeasarCipher(text)
  console.log(text, 'here');
  let textArray = text.split('')
  let cypheredWord = [];
  textArray.forEach(letter => {
    if(letter === 'z') return cypheredWord.push('a')
    cypheredWord.push(alphabet[alphabet.indexOf(letter) + keyVal]);
  })
  return cypheredWord.join('');
}

function analyzeArray(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let averageVal = sum / array.length;

  return {
    average: averageVal
  }
}
console.log(analyzeArray([1,2,3,4]));
module.exports = { capitalize, reverseString, calculator, ceasarCipher, analyzeArray } 