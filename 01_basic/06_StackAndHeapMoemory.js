// Stack -> Primitive
// Heap -> Non-Primitive

let myId = "MafiaSoul";

let anotherId = myId;
anotherId = "BGMI";

console.log(anotherId);
console.log(myId);


let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}
let user2 = user1;

user2.email = "user@gmail.com";
user2.upi = "user@ibl";

console.table([user1.email , user1.upi]);