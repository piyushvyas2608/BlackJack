let cards = []
let sum = 0
let isalive = false
let hasblackjack = false
let message = ""
let messageEl = document.getElementById('message')
let cardsEl = document.getElementById('cards') 
let cardsumEl = document.getElementById('cardsum')
let userEl = document.getElementById('user')
let userdata = {
    name: "Piyush",
    Rs : "1000 "
}
userEl.textContent = userdata.name + " Rs. :- " + userdata.Rs


function randomcard(){
    let  randomvalues = Math.floor(Math.random() * 13) + 1
    if (randomvalues > 10) {
        return 10
    }
    else if ( randomvalues == 1) {
        return 11
    }
    else {
        return randomvalues
    }
    
}
function startgame(){
    isalive = true
    let firstCard = randomcard()
    let secondCard = randomcard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard 
    rendorGame()   
}


function rendorGame(){
    cardsEl.textContent = "cards : "
    for(let i = 0 ; i < cards.length; i++ ){
        cardsEl.textContent += cards[i] + " "
    }

    
        cardsumEl.textContent = "sum : " + sum
    if ( sum <= 20){
        message = "Do You Want To Withdraw other Card" 
    }
    else if(sum === 21  ){
        message = "YOOHOOO! you have BlackJack"
        hasblackjack = true
        
    }
    else{
        message = "Sorry! You have lost."
        isalive = false
    }
    messageEl.textContent = message
}

function addnew(){
    if(isalive === true && hasblackjack === false){
        let Card = randomcard()
     sum += Card
    cards.push(Card)
    rendorGame()
    }
}