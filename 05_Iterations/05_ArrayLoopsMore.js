const coding = ["js",'ruby',"java","python","cpp"];
const values = coding.forEach((item) => {
    console.log(item);
} );
console.log(values);        //FOR-EACH loops never return anything

const myNums = [1,2,3,4,5,6,7,8,9,10];
const nums = myNums.filter( (num) => num > 4 );
console.log(nums);
const newNums = [];
myNums.forEach( (nums) => {
    if(nums > 4){
        newNums.push(nums);
    }
} );
console.log(newNums);


const books = [
    {title : "Book-1", genre : "Fiction", publish : 1981, edition : 2004},
    {title : "Book-2", genre : "Non-Fiction", publish : 1983, edition : 2006},
    {title : "Book-3", genre : "History", publish : 1985, edition : 2008},
    {title : "Book-4", genre : "Drama", publish : 1987, edition : 2010},
    {title : "Book-5", genre : "Politics", publish : 1989, edition : 2012},
    {title : "Book-5", genre : "Rom-Com", publish : 1991, edition : 2014},
    {title : "Book-7", genre : "History", publish : 1993, edition : 2016},
    {title : "Book-8", genre : "Science", publish : 1995, edition : 2018}
];

let myUserBooks = books.filter( (bk) => bk.genre === "History" );
myUserBooks = books.filter( (bk) => {
    return (bk.publish >= 1990 && bk.genre === "History" ) 
});
console.log(myUserBooks);


//MAPS

//Maps return anything written anything within its scope
const myNumbers = [0,1,2,3,4,5,6,7,8,9,10];
const newNumbers = myNumbers.map( (num) => num + 10 );
console.log(newNumbers);