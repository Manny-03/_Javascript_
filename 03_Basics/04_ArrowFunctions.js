const user = {
    username: "Manas",
    price: 199,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website..`);
    }
}
user.welcomeMessage();
user.username = "Manny";
user.welcomeMessage();