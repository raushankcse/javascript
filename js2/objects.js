// singleton

// Object.create


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full name" : "Raushan Kumar",
    [mySym]: "mykey1",
    age: 21,
    location: "Jaipur",
    email: "raushan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log( jsUser[mySym])


jsUser.email = "hitesh@chatgpt.com"

// Object.freeze(jsUser)

jsUser.email = "hitesh@microsoft.com"

// console.log(jsUser)



jsUser.greeting = function(){
    console.log("Hello JS user");
}


jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

