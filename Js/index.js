/*const prompt = require("prompt-sync")()
const v = prompt("Type something:")
console.log(v)*/

const x ="3345.78"
const y = 3

console.log(parseFloat(x) + y)

const cond = 3 < 3 ? "Okay" : "No"
console.log(cond)

const value = 3

switch(value){
    case 3 : 
      console.log("WOW")
      break
    case 4: 
      console.log("ITS okay")
      break
}

const arr = [1,2,3]
const arr2 = new Array(5)
console.log(arr)

const arr3 = Array.from("Hiiiiiiiiii")
console.log(arr3)

console.log(arr3.indexOf("i"))
console.log(arr2.lastIndexOf("l"))

const arr4 = arr.concat(arr3)
console.log(arr4)

const [a, a2, ...d] = [1,4,6,7,8,9]
console.log(a, a2, ...d)

do{
    console.log("run")
    break
}

while(true)

while(false){
    console.log("hello")
    break
}

const a1 = [1,2,3,4]
for (let [i,value] of a1.entries()){
    console.log(i,value)
}

const obj = {
    name : "Pu",
    age : 23,
    sayHello: function(){
        return "hello"
    }, 
    career : {}
}

const obj2 = {
    haircolor : "black",
    ar1 : [1,88],

}

const obj3 = {...obj, ...obj2}
console.log(obj3)

obj2.ar1.push("tech")
console.log(obj2,obj3)

const mySet = new Set()
mySet.add(88,3)
mySet.delete(3)
mySet.has(2)
mySet.size

console.log(mySet)

const myMap = new Map();
const numberMap = new Map([[1,'one'],[2,'Two']]);

myMap.set(4, 'four')
myMap.delete(2)
myMap.has(1)
myMap.size

console.log(myMap)
console.log(numberMap)

try{
    riskyfunction()
}
catch(error){
    console.log("An error occured: ",error.message)
}finally{
    console.log("Cleanup code can go there")
}

const numbers = [1, 3, 6, 88]
const doubled = numbers.map((num) =>num *2)
console.log(doubled) 

const users = [
    {name : "Punam", age : 108},
    {name : "Mima", age : 302}
]

const names = users.map((user) => user.age)
console.log(names)

const number2 = [4,5,6,8]
const sum = number2.reduce((acc,num) => acc + num, 0)
console.log(sum)

const number3 = [4,5,6,9]
const evenNumber = number3.filter((num) => num % 2 === 0 )
console.log(evenNumber)