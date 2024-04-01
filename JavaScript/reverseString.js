// reverse('Tina') === 'aniT'

function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// method 2
function reverse2(str) {
  const strToArray = str.split("");
  strToArray.reverse();
  return strToArray.join("");
}

// method 2 in one line (chaining)
function reverse3(str) {
  return str.split("").reverse().join("");
}

let myName = "Arthur";
console.log(reverse(myName));
console.log(reverse2(myName));
console.log(reverse3(myName));
