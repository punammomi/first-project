let emojis = ["🥳","😶‍🌫️", "🤪", "🥺", "🤷"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function(){
    let randomOneIndex = Math.floor(Math.random() * emojis.length)
    let randomTwoIndex = Math.floor(Math.random() * emojis.length)

    stageEl.textContent = emojis[randomOneIndex] +" Vs "+ emojis[randomTwoIndex]
})