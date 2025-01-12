const user = {
    username: "Manas",
    price: 199,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website..`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username = "Manny";
user.welcomeMessage();

console.log(this);

//WINDOW is the global object in the browser.

function chai(){
    let username = "manas";
    console.log(this);
    console.log(this.username);   // "this" is not valid inside a function. it is valid only inside an object.
}
chai();

const func = () => {
    let username = "Manas";
    console.log(this.username);   
}
func();

const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(2,3));

const addNum = (num1,num2) => num1 + num2;   //This type of declaring arrow function is known as "IMPLICIT RETURN".
console.log(addNum(3,4));   

/*
    While declaring the arrow functions, if {} are used, then "return" must be written and if not used, then "return should not be used". 
*/

const retObj = () => ({username : "Manas"});
console.log(retObj());