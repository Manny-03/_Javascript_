const arr = [0, 1, 2, 3, 4, 5];
console.log(arr[2]);

// Shallow Copy => A shallow copy of a an element is a copy whose properties share the same properties as of source object from which the copy is made.

// Deep Copy => A deep copy of an element is a copy whose properties do not share the same propeerties as of source object from hich the copy is made.

const heroes = ["Ironman", "Hulk", "Spider-man", "Dr.Strange", "hawkeye", "Captain America"];
console.log(heroes[2]);

const myArr = new Array(1, 2, 3, 4);

// Arrray Methods

arr.push(6);  // Adds element in the last of the array
console.log(arr);
arr.pop();  // Removes element from the last of the array
console.log(arr);

arr.unshift(10);  // Adds element in the beginning of the array
console.log(arr);
arr.shift();  /// Removes element from the beginning of the array
console.log(arr);

console.log(arr.includes(10));
console.log(arr.indexOf(19));

const newArr = arr.join();  // Converts the array into "String".
console.log(arr);
console.log(newArr);
console.log(typeof (newArr));

//Slice and Splice

console.log("A ", arr);
const myn1 = arr.slice(1,3);  // It only incluides the first and second last range but doesnot manipulate the original array
console.log(myn1);
console.log("B ", arr);
const myn2 = arr.splice(1,3);  // It includes all the mentioned range and also manipulates the original array.
console.log("C ", arr);
console.log(myn2);