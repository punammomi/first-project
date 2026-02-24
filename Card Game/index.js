let player = {
         name : "Punam",
         cookies : 120
}
let card = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
console.log(messageEl)
let sumEl = document.querySelector("#sum-el")
console.log(sumEl)
let cardEl = document.getElementById("card-el")
 
let playerEl = document.getElementById("player-el") 
playerEl.textContent = player.name + " : $" + player.cookies

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }

    else if (randomNumber === 1)
    {
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true

    renderGame()
}

function renderGame(){

cardEl.textContent = "Cards: "

for (let i=0; i < card.length; i++)
{
    cardEl.textContent += card[i] + " "
}
sumEl.textContent = "Sum: " + sum
if(sum <= 20)
{
    message ="Do you want to draw a new card? "
    
}
else if(sum === 21){
    message = "You are pro!"
    hasBlackJack = true
}
else{
 message = "Game over "
  isAlive = false
}

messageEl.textContent = message
}

function newCard(){
    
    let cards = getRandomCard()
    sum += cards
    card.push(cards)
    message = "Drawing a new card from the deck!"
    messageEl.textContent = message
    
    renderGame()
    if(isAlive === true && hasBlackJack === false){
        newCard()
    }

}

/*let hasDiscountCode = false

function processOrder(){
    if(hasDiscountCode)
    {
        console.log("Discount applied to food order")
    }
     else{
    console.log("No discount applied")
}
}
processOrder()

let foodDiscount = true

function keepOrder(){
    if(foodDiscount){
        console.log("Discount applied to the food")
        foodDiscount = false
    }

    else{
        console.log("NO discount applied to the food")
    }
}

keepOrder()
keepOrder()*/