function reverseInt(num) {
  const reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(num);
}

// function reverseInt2(n) {
//   let strNum = n.toString();
//   let rvsedString = "";
//   for (let i = 0; i < strNum.length; i++) {
//     rvsedString = strNum[i] + rvsedString;
//   }
//   return rvsedString;
// }

// function reverse(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr.toString();
// }

// console.log(reverse(12345)); // Output will be '54321'

let myNum = -2345;

// console.log(reverseInt2(myNum));
console.log(reverseInt(myNum));
// console.log(myNum.toString);
