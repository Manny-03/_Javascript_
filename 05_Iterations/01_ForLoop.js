for(let i = 0; i < 10; i++){
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}
console.log("          ");



for(let i = 0; i <= 10; i++){
    console.log(`Outer loop value: ${i}`)
    for(let j = 1; j <= 10; j++){
        // console.log(`Inner loop value: ${j} and inner loop; ${i}`);
        console.log(i + " * " + j + " = " + i*j);
    }
}


let myArr = ["Flash", "Batman", "Superman", "Green Lantern"];
for(let i = 0; i < myArr.length; i++){
    const element = myArr[i];
    console.log(element);
}

//BREAK and CONTINUE


for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`5 detected`);
        break;
    }
    console.log(`The value is ${i}`);
}


for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`5 detected`);
        continue;
    }
    console.log(`The value is ${i}`);
}