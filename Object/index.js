
let person = {
    name : "Punam",
    age : 25,
    country : "Bangladesh"
}

function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country + ".")
}
logData()

let age = 70

if(age <= 6){
    console.log("Free")
}

else if(17 >= age && age <= 6){
    console.log("Child discount")
}

else if(26 >= age && age <= 18){
    console.log("Student discount")
}

else if(66 >= age && age <= 27){
    console.log("Full price")
}

else{
    console.log("Senior citizen discount")
}

let largeCountries = ["China", "India", "USA", "Bangladesh", "Korea"]

for(let i=0; i<largeCountries.length; i++){
    console.log("- ", largeCountries[i])
}

let largerCountries = ["Tuvalu", "India", "Bangladesh", "Monaco"]

largerCountries.pop()
largerCountries.push("Pakistan")
largerCountries.shift()
largerCountries.unshift("Korea")
console.log(largerCountries)

let dayOfMonth = 31
let weekDay = "Friday"

if(weekDay === "Friday" && dayOfMonth === 31){
    console.log("🥳")
}

let hands = ["rock", "paper", "scissor"]

function randomItem(){
    let randoMIndex = Math.floor(Math.random() * 3) + 1
    return randoMIndex
}

console.log(randomItem())