const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Manny";
tinderUser.isLoggedIn = true;
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    userName: {
        fullName: {
            firstName: "Manas Kumar",
            secondName: "Mishra"
        }
    }
}
console.log(regularUser.userName.fullName.firstName);