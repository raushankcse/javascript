// #Primitive Data types



// 7 types : String, Number , boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id===anotherId);


const bigNumber = 35345353454564534535457987987435n
console.log(bigNumber)


// Reference types ( Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]


let myObj = {
    name: "hitesh",
    age: 22,
}

// console.log(typeof myObj);

const myFunction = function (){
    console.log("Hello world");
}

// console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non- Primitive)

let myYoutubename = "raushankcse";
let anothername = myYoutubename

anothername = "upeducative"


console.log(myYoutubename);
console.log(anothername);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)





