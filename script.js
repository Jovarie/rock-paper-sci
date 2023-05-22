let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')

//computer choices
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
//this function disables the buttons and will run after a winner if declared i.e first to 5.
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

//his function is called every time a button is clicked. It takes in the playerSelection as an argument 
function playRound(playerSelection) {
//Generates a random computerSelection using the computerPlay() function.
    let computerSelection = computerPlay()
    let result = ""
    //game logic
    //compares the player selection and computer selection and compares each outcome to determine a winner
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        //if player wins add 1 to their score and display a message
        //updates the score of each computer and player
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        //if player gets to 5 display this message if either player reaches a score of 5, displays a message declaring the winner and disables all buttons on the page using the disableButtons() function.
        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }//if computer wins display this message
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        //if computer wins the game display this message
        if (computerScore == 5) {
            result += '<br><br>You Lost the game! Reload the page to play again'
            disableButtons()
        }
    }
//Updates the HTML content of the result element on the page with the message generated and returns the result.
    document.getElementById('result').innerHTML = result
    return
}
//Event listener: The forEach method is used to add a click event listener to each button on the page. When a button is clicked, the playRound(playerSelection) function is called with the value attribute of the button as its argument.
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
