// what is a callback function in  javascript

// setTimeout(function(){
//   console.log("Timer")
// },5000);


// function x(y){
//   console.log("x");
//   // y();
// }

// x(function y(){
//   console.log("y")
// })

// Javascript is a synchronous and single-threaded language


// Blocking the main thread

// Power of callbacks?


// Deep about Event listeners

// Closures Demo with Event listeners

// Scope Demo with Event listeners

// Garbage Collections & removeEventListeners



//  a callback is a function passed as an argument to another function.

// const calculate = (a,b, operation) => {
//   return operation(a,b);
// }


// // method 1
// const addition = calculate(3,4, function(num1, num2){
//   return num1 + num2;
// });

// console.log(addition);



// // method 2
// const subtraction = (a,b) => a-b;

// const subResult = calculate(8,3, subtraction)

// console.log(subResult);


// // method 3
// function multiply(a,b){
//   return a*b;
// }

// const mulResult = calculate(3,2, multiply);
// console.log(mulResult);

// array callback functions
const a = [4,1,6, -2, -5, 2, -8, 6,7];

// const firstNeg = (num) => {
//   return num < 0;
// }


// const result = a.findIndex(firstNeg);
// console.log(result);

a.forEach((num, i)=>{
  console.log('array num', num, i);
})