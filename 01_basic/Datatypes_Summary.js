// PRIMITIVE(Call by value)

/*
    1. String
    2. Number
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt
*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;

const outsideTemp = null;
let userEmail;

let userId = Symbol("123");
let anotherUserId = Symbol("123");

console.table([userId, anotherUserId]);
console.log(userId === anotherUserId);

const bigNumber = 757651679165179653767483567496n;
console.log(typeof (bigNumber));



// NON-PRIMITIVE(Call by reference)

/*
    1. Objects
    2. Array
    3. Functions
*/

let heroes = ["Ironman" , "Captain America" , "Hulk" , "Spider-Man"];
let myInfo = {
    name: "Manas",
    age: 21,
    profession: "Student"
}
let myFunction = function(){
    console.log("Hello World");
}

//Refernece link: https://262.ecma-international.org/5.1/#sec-11.4.3