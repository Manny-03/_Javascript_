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

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "c" , 4: "d"};
// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1 , obj2);   // Here {} is the target and the obj1 and obj2 are the sources and this method is best choice                                        for writting such code lines

//object.assign(target,source); This is the complete syntax

const obj3 = {...obj1,...obj2};

console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));  //Object.keys and Object.values return the req info in the form of arrays
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));