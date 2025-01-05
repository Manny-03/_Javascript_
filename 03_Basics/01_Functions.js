// console.log("M");
// console.log("A");
// console.log("N");
// console.log("A");
// console.log("S");

function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
}
sayMyName();



function adddTwoNumbers(num1 , num2){  //The values passed while writting the function are called "PARAMETERS".
    console.log(num1 + num2);
}
adddTwoNumbers(3,4);  //The values passed while executing the function are called "ARGUMENTS".



function twoNumbers(num1 , num2){
    let result = num1 + num2;
    console.log("MANAS");
    return result;
    console.log("Mishra");  //Anything written after "return" will not be executed, because return is the final line of function.
}
const result = twoNumbers(5,9);
console.log(result);



function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage("Manas"));
console.log(loginUserMessage());  //When an empty arument is passed, it returns undefined.

function loginUserName(username){
    if(username === undefined){     //username === undefined is also equivalent to !username
        return `Invalid, please enter a username...`;
    }else{
        return `Hello ${username}, welcome to the website...`;
    }
}
console.log(loginUserName("Manas"));
console.log(loginUserName());
