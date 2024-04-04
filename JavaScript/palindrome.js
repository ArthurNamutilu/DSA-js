function palindrome(str) {
  let reversedString = str.split("").reverse().join("");
  return reversedString === str;
  //   return reversedString === str ? true : false;
}

console.log(palindrome("kayaak"));

// solve using 2-point technique and/or every
