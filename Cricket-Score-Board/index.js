let scoreEl = document.getElementById("score-el")
let scorecount = 0

function addscore(){
    scorecount += 1
    scoreEl.textContent = scorecount

}

let wicketEl = document.getElementById("wicket-el")
let wicketCount = 0

function setWicket(){
    if(wicketCount <= 9)
    {
    wicketCount++
    wicketEl.textContent = wicketCount
    }
    
}


let overEl = document.getElementById("overs-el")
let over = 0

function overcount(){
    over += 1
    overEl.textContent = over
}

let targetEl = document.getElementById("target-el")
let targetCount = 0

function target(){
    targetCount += 1
    targetEl.textContent = targetCount
}