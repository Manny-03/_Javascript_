const userEmail = "manas@google.ai";
if(userEmail){
    console.log("Got the user mail id");
}else{
    console.log()
}

const userName = "";
if(userName){
    console.log("Got user name");
}else{
    console.log("Don't have user name")
}

/*
    Falsy Values -> false, 0 , -0, BigInt 0n, "", null, undefined, Nan
*/

/*
    Truthy Values -> "0", 'fasle', " ", [], {}, function(){}
*/

const emptyArr = [];
if(emptyArr.length === 0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}else{
    console.log("Object is not empty");
}



//Nullosh coalescing opereator (??) : Null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);
let val2;
val2 = null ?? 10;
console.log(val2);
let val3;
val3 = undefined ?? 15;
console.log(val3);
let val4;
val4 = null ?? 10 ?? 20;
console.log(val4);



//Ternary Operator -> consition ? true : false
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Price is more than 80") : console.log("Price is less than 80");

