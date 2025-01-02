// When objects are declared as literals, then it is not a SINGLETON
// Object.create -> in this method, singletons are formed and it is known as constructor method

// OBJECT LITERALS

const mySym = Symbol("key1");

const jsUser = {
    name: "Manas",
    "full name": "Manas Kumar Mishra",
    [mySym]: "My Key-1",
    age: 21,
    location: "Bhubaneswar",
    email: "manas@google.com",
    isloggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);  //Here we cannot access the full name using dot operator
console.log(jsUser[mySym]);
console.log(typeof([mySym]));

jsUser.email = "manas@yahoo.com";
console.log(jsUser["email"]);
// Object.freeze(jsUser);   // This command freezes the object and don't allow further changes to occur
jsUser.email = "manas@chatgpt.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello ${jsUser["name"]} to JavaScript`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());


jsUser.greeting2 = function(){
    console.log(`Hello, ${this["full name"]}, Welcome to JavaScript`);
}
console.log(jsUser.greeting2());