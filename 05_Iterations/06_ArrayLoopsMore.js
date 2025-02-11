const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )   //This is known as chaining
                .filter( (num) => num >= 50 );
console.log(newNums);


//REDUCE

const myNums = [1,2,3];
const myTotal = myNums.reduce(function(acc,currVal) {
    console.log(`acc : ${acc} and currVal : ${currVal}`);
    return acc + currVal;
},0);
console.log(myTotal);

const myNewNums = [1,2,3,4,5];
const myNewTotal = myNewNums.reduce( (acc,currVal) => acc + currVal , 0 );
console.log(myNewTotal);

const shoppingCart = [
    {
        courseName : "Js Course",
        coursePrice : 2999
    },
    {
        courseName : "Java Course",
        coursePrice : 3999
    },
    {
        courseName : "React Course",
        coursePrice : 4999
    },
    {
        courseName : "Flutter Course",
        coursePrice : 6999
    }
];

const totalPrice = shoppingCart.reduce( (acc,item) => acc+item.coursePrice,0 );
console.log(totalPrice);