const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice 
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
yourChoiceDisplay.innerHTML = userChoice
genterateComputerChoice()
getResult()
}))

function genterateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //returns 3 
    
    if (randomNumber === 1){
        computerChoice = 'Rock'
    }
    if (randomNumber === 2){
        computerChoice = 'Scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult (){
    if (computerChoice === userChoice){
        result = "It's a Draw!!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You Won!!'
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'You Lose!!'
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'You Win!!'
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'You Lose!!'
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'You Lose!!'
    }
    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You Win!!'
    }
    resultDisplay.innerHTML = result


}
