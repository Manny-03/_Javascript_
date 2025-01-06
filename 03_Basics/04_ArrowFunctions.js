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