function capitalize(string) {
  const firstLetter = string.charAt(0).toUpperCase();
  let slicedString = string.slice(1)
  return firstLetter + slicedString;
}
module.exports = capitalize; 