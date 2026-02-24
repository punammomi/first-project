/*let sentence = ["Hello", "my", "name", "is", "Punam"]
let greetingEl = document.getElementById("greeting-el")
for (let i=0; i < sentence.length; i++)
{
    greetingEl.textContent += sentence[i] + " "

}*/

let player1Time = 109
let player2Time = 107

function getRaceTime(){
    if(player1Time < player2Time)
    {
        return player1Time
    }

    else {
        return player2Time
    }

}

function RaceTotalTime(){
    return player1Time + player2Time
}

let totalTime = RaceTotalTime()
console.log (totalTime)

let randomNumber = Math.random()
console.log(randomNumber)

let Randomnumber = Math.random() * 8
console.log(Randomnumber)

let flooredNumber = Math.floor(3.5678)
console.log(flooredNumber)

let ranDomnUmber = Math.floor(Math.random() * 6) + 1
console.log(ranDomnUmber)

function rollDice(){
    let rAndomnumber = Math.floor(Math.random() * 6) + 1
    return rAndomnumber 
}

console.log(rollDice())

let hasCompletedCourse = true
let givesCertificate = true

if(hasCompletedCourse === true && generateCertificate == true)
{
   generateCertificate()
}
function generateCertificate(){
    console.log("Generating certificate.......")
}

generateCertificate()

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge == false && hasHintsLeft == false){
    showSolution()
}

function showSolution(){
    console.log("Showing the solution....")
}

let likesDocumentaries = false
let likeStartups = true 

if (likesDocumentaries === true || likeStartups === true)
{
    recommendMovie()
}
function recommendMovie(){
console.log("Hey, check out this new flim we think you will like!")
}

let course = {
     title : "Learn CSS Grid for free",
     lessons : 16,
     legth : 63,
     creator : "Punam",
     level : 2,
     isFree : true,
     tags : ["html" ,"css"]
}

console.log(course.legth)

let castle = {
    title : "Live like a king in my castle",
    price : 190,
    isSuperhost : true,
    images : ["images/castle1.png", "images/castle2.png"]
}

console.log(castle.images)
console.log(castle.title)
