let score = "33abc";
let num = null;
let value = undefined;
let bool = true;

console.log(typeof (score));
console.log(typeof (null));
console.log(typeof (value));
console.log(typeof (bool));

let valueInNumber = Number(score);
let valueInnumber1 = Number(num);
let valueInNumber2 = Number(value);
let valueInNumber3 = Number(bool);


console.log(typeof (valueInNumber));
console.log(valueInNumber);

console.log(typeof (valueInnumber1));
console.log(valueInnumber1);

console.log(typeof (valueInNumber2));
console.log(valueInNumber2);

console.log(typeof (valueInNumber3));
console.log(valueInNumber3);

//IMPORTANT NOTES

/*
    (FOR CONVERSION INTO NUMBERS)
    1. "33" => 33
    2. "33abc" => NaN(not a number)
    3. null => 0
    4. undefined => NaN
    5. true => 1 / false => 0
*/


let isLoggedIn = 1;
console.log(typeof (isLoggedIn));

let valueInBoolean = Boolean(isLoggedIn);
console.log(valueInBoolean);
console.log(typeof (valueInBoolean));

/*
    (FOR CONVERSION INTO BOOLEAN)
    1. 1 => true / 0 => false
    2. "" => false
    3. "value" => true
*/

let someNumber = 33;
console.log(typeof (someNumber));

let numberInString = String(someNumber);
console.log(numberInString);
console.log(typeof (numberInString));

