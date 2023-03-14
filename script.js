//begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    function getComputerChoice() {
        let compChoices = ["rock", "paper", "scissors"] 
        let randomChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
        return randomChoice;

    }

    // console.log(getComputerChoice()); // views computers choice

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection.
//return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

    //The game logic
    function playRound (playerChoice, computerSelection) {
        if (playerChoice == "rock" && computerSelection == "paper") {
            return "You lose! Paper beats Rock!";

        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return "You win! Paper beats Rock!";

        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            return "You win! Rock beats Scissors";

        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            return "You lose! Rock beats Scissors";

        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            return "You lose! Scissors beats Paper";

        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return "You win! Scissors beats Paper";

        } else if (playerChoice == computerSelection) {
            return "Draw!";
        }
    }



//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).



//important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

   
  const playerSelection = "rock";
  console.log(computerSelection = getComputerChoice()) ;
  console.log(playRound(playerSelection, computerSelection));

