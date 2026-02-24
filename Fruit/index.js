let fruit = ["🍊","🍎","🍎","🍊","🍊","🍎","🍊","🍎","🍊","🍎","🍊"]

let orangeEl = document.getElementById("orange-el")
let appleEl = document .getElementById("apple-el")

function setFruit(){
    for(let i = 0; i < fruit.length; i++)
    {
        if(fruit[i] === "🍊")
        {
            orangeEl.textContent += "🍊"
        }

        else if(fruit[i] === "🍎" )
        {
            appleEl.textContent += "🍎"
        }

    }
}

setFruit()