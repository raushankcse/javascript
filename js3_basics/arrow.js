const user = {
    username: "hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welocme to website`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "raushan"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }

// chai()


// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()






const chai = () => {
    let username = "hitesh"
    console.log(this);
}

// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2



// const addTwo = (num1, num2) =>  (num1 + num2)


const addTwo = (num1, num2) => ( {username : "hitesh"})


console.log(addTwo(7, 8))

const myArray = [2,5,3,7,8]

