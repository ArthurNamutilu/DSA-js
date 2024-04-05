function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1; // shortening if-else
  }
  let maxVal = -Infinity;
  let maxProp = null;

  for (let prop in charMap) {
    if (charMap.hasOwnProperty(prop)) {
      if (charMap[prop] > maxVal) {
        maxVal = charMap[prop];
        maxProp = prop;
      }
    }
  }
  return `character ${maxProp} appers most with ${charMap[maxProp]} appearances`;
}

console.log(maxChar("cucumubueru"));
