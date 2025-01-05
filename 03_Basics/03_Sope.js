// let a = 10;
// const b = 20;
// var c = 30;


if(true){
    // let a = 10;
    // const b = 20;
    var c = 30;
}

// console.log(a);    //This doesnot work
// console.log(b);    //This doesnot work
console.log(c);     //This gets printed, which shouldnot happen as it violates the law of scopes


// Due to the violation of scopes var is not used.



function one(){
    const username = "Manas";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);    //website is not valid outside of the function two.

    two();

}
one();



if(true){
    const name = "manas";
    if(name === "manas"){
        const yt = "Youtube";
        console.log(name + yt);
    }
    // console.log(yt);   // yt is not valid outside the nested if.
}


console.log(addOne(6));
function addOne(num){
    return num + 1;
}
addOne(5);

// console.log(addTwo(6));   //This is not possible as the function stored in a variable annot be called before initialization.
const addTwo = function(num){
    return num + 2;
}
addTwo(5);