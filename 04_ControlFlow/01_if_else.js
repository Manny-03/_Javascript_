/*
    if(condition){
        task to be performed
    }
*/

const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("User is logged in");
}else{
    console.log("User is not logged in");
}

if(3 != 2){
    console.log("true");
}else{
    console.log("false");
}

const a = 2;
const b = "2";
if(a === b){
    console.log("false");
}else{
    console.log("true");
}

const score = 200;
if(score > 100){
    const power = "fly";
    console.log(`User power: ${power}`);
}

const balance = 1000;
// if(balance > 500) console.log("Sufficient");
if(balance > 0 && balance <= 500){
    console.log("less than or equal to 500")
}else if(balance > 500 && balance <= 750){
    console.log("less than or equal to 750 but greater than 500");
}else if(balance > 750 && balance <= 1000){
    console.log("less than or equal to 1000 but greater than 750");
}else{
    console.log("greater than 1000");
}

const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard){
    console.log("Allowed for shopping");
}else{
    console.log("Not allowed for shopping");
}

const loggedInfromGoogle= false;
const loggedInFromEmail = true;
if(loggedInFromEmail || loggedInfromGoogle){
    console.log("User logged in");
}else{
    console.log("User cannot login");
}