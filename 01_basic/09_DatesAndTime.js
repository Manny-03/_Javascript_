// In JS, the dates are calculated from 1st January, 1970.
// Dates are calculated in milli-seconds.

let myDate = new Date();
console.log(typeof (myDate));
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString);
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());


let myCreatedDate = new Date(2025, 0, 1);
console.log(myCreatedDate.toLocaleString());

// In JS, months start from 0(January) and goes upto 11(December).

let myCreatedDate1 = new Date(2024,0,31,5,0,45);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2024-11-13");
console.log(myCreatedDate2.toDateString());

// In JS, months start from 1(January) and goes upto 12(December) when written in "YYYY-MM-DD" format.

let myCreatedDate3 = new Date("02-22-2003");
console.log(myCreatedDate3.toLocaleString());

//  In India, MM-DD-YYYY format is preffered.



let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(myTimeStamp/1000)); //In order to get this in second

let newDate = new Date();
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long"
});