//stack and heap 
let myname = "yogita"
let anothername = myname
anothername = "nikita"

console.log(myname)
console.log(anothername)

let userOne = {
    email : "yogita@gmail.com",
    upi : "user@xyz"
}

let userTwo = userOne
userTwo.email = "xyz@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)