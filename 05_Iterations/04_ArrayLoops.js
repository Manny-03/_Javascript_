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