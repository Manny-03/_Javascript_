function userCartItem(...num1){   // '...' is also known as rest operator when used in functions.
    return num1;
}
console.log(userCartItem(200,300,400));

function userCartItem1(val1 , val2 , ...num1){
    return num1;
}
console.log(userCartItem1(200,300,400,500,1000,2000));




const user = {
    username : "Manas",
    price : 199
}

function handleObjects(anyObject){
    return `The name of the user is ${anyObject.username} and the price of the item is ${anyObject.price}`;
}
console.log(handleObjects(user));
console.log(handleObjects({
    username: "Sam",
    price: 399
}));



const arr = [200,300,400,500,600];
function getSecondvaluefromArray(getArray){
    return getArray[3];
}
console.log(getSecondvaluefromArray(arr));
console.log(getSecondvaluefromArray([1000,2000,3000,4000,5000,6000]));