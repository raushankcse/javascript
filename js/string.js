const name = "hitesh"

const repoCount = 50

console.log(name + repoCount + " Value ");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);







const gameName = new String('raushankcse')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.charAt(5));
console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,4)
console.log(newString)


const anotherString = gameName.slice(-8, 4)
console.log(anotherString)



const newStringOne = "    hitesh       "
console.log(newStringOne)
console.log(newStringOne.trim())




const url = "https://raushankcse.com/raushan -kuamr"


console.log(url.replace(' ','-'))

console.log(url.includes('cse'))


const str = "raushan kumar"
const words = str.split('');
console.log(words);