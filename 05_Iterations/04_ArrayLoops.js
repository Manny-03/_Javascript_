// FOR-OFF LOOP

const arr = [1,2,3,4,5];
for(const index of arr){
    console.log(index);
}

const greeting = "Hello World!";
for(const greet of greeting){
    if(greet == " "){
        console.log("This is blank space")
    }else{
        console.log(`This character is ${greet}`);
    }
}


//MAPS
const map = new Map();  //All the entries in a map will be unique and no duplicate values will be there
map.set("In","India");
map.set("USA","United States of America");
map.set("Fr","France");
console.log(map);
for(const [key , value] of map){
    console.log(key,":-",value);
}

// const myObject = {   //FOR-OFF loop does not work on objects as objects are not iterable  
//     'game1' : 'NFS',
//     'game2' : 'Spiderman',
//     'game3' : 'GTA V'
// }
// for(const [key,values] of myObject){
//     console.log(key,":-",values);
// }


//FOR-IN LOOP

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
};
for(const key in myObject){
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} is used to represent ${myObject[key]}`);
}

const programingLanguages = ['js','cpp','rb','swift'];
for(const keys in programingLanguages){
    // console.log(keys);    //This will print the index number of the array
    console.log(programingLanguages[keys]);
}

// const newMap = new Map();       //Maps are not iterabe using FOR-IN LOOPS
// newMap.set('js',"JavaScript");
// newMap.set('cpp',"C++");
// newMap.set('rb',"Ruby");
// newMap.set('swift',"Swift");
// newMap.set('py',"Python"); 
// for(const key in newMap){
//     console.log(key);
// }




//FOR-EACH LOOP

const codingLanguage = ["Javascript","Ruby","Python","Java",'C++'];
codingLanguage.forEach( function (item) {
    console.log(item);
} );


const coding = ["Javascript","Ruby","Python","Java","C++"];
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})


const myCodingLanguages = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]
myCodingLanguages.forEach( (item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
} )
