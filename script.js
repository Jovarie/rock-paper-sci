//begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    const options = ["rock", "paper", "scissors"]

    //our game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    function getComputerChoice(){
        const choice = options[Math.floor(Math.random() * options.length)];
        return choice;
    }

    //checks who wins each round
    function checkWinner(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return "Tie";
        }
        else if (
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")
        ){
            return "Player";
        }
        else {
            return "Computer";
        }
    }
    

    //Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection
    function playRound(playerSelection, computerSelection) {
        const result = checkWinner(playerSelection, computerSelection);
        if (result == "Tie"){
            return "It's a Tie!";
        }
        else if (result == "Player"){
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        else {
            return `You Lost! ${computerSelection} beats ${playerSelection}`
        }
    }

    //function to get Users input.
    function getPlayerChoice(){
        //while this input is false keep looping.
        let validatedInput = false;
        while(validatedInput == false) {
            const choice = prompt("Rock, Paper or Scissors?");
            if (choice == null) {
                continue;
            }
            //converts input to lowercase.
            const choiceInLower = choice.toLowerCase();
            //returns true if an array contains a specified element.
            if (options.includes(choiceInLower)) {
                validatedInput = true;
                return choiceInLower;
                //this will stop the loop.
            }
        }
    }


    //Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
    function game() {
        //keeps score & declares a winner at game completion.
        let scorePlayer = 0;
        let scoreComputer = 0;


        for (let i = 0; i < 5; i++) {
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
            console.log("----------")//creates spaces so we know were in a different round.
            //checks for a winner and updates their score
            if (checkWinner(playerSelection, computerSelection) == "Player") {
                scorePlayer++;
            }
            else if (checkWinner(playerSelection, computerSelection == "Computer")) {
                scoreComputer++;
            }
         }
         console.log("Game Over");
         //checks for and logs the winner
         if (scorePlayer > scoreComputer) {
            console.log("Player was the winner!");
         }
         else if (scorePlayer < scoreComputer) {
            console.log("Computer was the winner!");
         }
         else {
            console.log("We have a tie!");
         }
    }

    game(); //calls 5 round game.