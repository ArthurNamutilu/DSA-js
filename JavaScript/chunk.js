#!/usr/bin/node

function chunk(array, size) {
  let finalArray = [];
  for (let i = 0; i < array.length; i += size) {
    const arr = array.slice(i, i + size);
    finalArray.push(arr);
  }
  return finalArray;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(chunk(myArray, 4));
