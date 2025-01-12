// IIFE - Immediately Invoked Function Expression

//IIFE is used to immediately execute any function and free it from Global scope pollution.

function chai(){
    console.log(`DB Connected`);
}
chai();

//By applying IIFE,
(function iifeProgram(){   // This is known as named IIFE
    console.log(`DB Connected`);
})();

// to execute any function using IIFE, we use ()()
//first () is used to store the progeam and second () is used to execute it.

//Using arrow functions
( () => {
    console.log(`DB Connected two`);
})();

//If we need to pass a variable in the arrown function and execurte it as IIFE
( (username) => {
    console.log(`Hello, ${username}`)
})("Manas");