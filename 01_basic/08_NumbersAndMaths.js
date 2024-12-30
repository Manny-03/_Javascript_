const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const num1 = 29.8654336;
console.log(num1.toPrecision(4));

let num2 = 100000000;
console.log(num2.toLocaleString());
console.log(num2.toLocaleString('en-IN'));

console.log("    ");


// ++++++++++++++++++++++++++. MATHS.  ++++++++++++++++++++++++++++++++++++++++

console.log("<<<<MATHS SECTION>>>>");

console.log("    ");

console.log(Math.abs(-4));

console.log(Math.round(4.333));  //Round off he number to the possible integer
console.log(Math.ceil(4.2));  //Always take the bigger number tan the absolute number
console.log(Math.floor(4.9));  //Always takes the absolute part of the number only

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));