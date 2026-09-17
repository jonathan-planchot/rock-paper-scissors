let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let humanSelection;
let computerSelection;

let rockChoice = document.querySelector("#rock");
let paperChoice = document.querySelector("#paper");
let scissorsChoice = document.querySelector("#scissors");



/*
function getHumanChoice() {
    return humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
}
*/

function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber <= 33) {
        return computerChoice = "Rock";
    } else if (randomNumber > 33 && randomNumber <= 66) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceUpper = humanChoice.toUpperCase();
    const computerChoiceUpper = computerChoice.toUpperCase();
    console.log(humanChoiceUpper);
    console.log(computerChoiceUpper);
    
    if (humanChoiceUpper === computerChoiceUpper) {
        console.log("It's a draw!");
        return;

    } else if(humanChoiceUpper === "PAPER" && computerChoiceUpper === "ROCK" 
        || humanChoiceUpper === "SCISSORS" && computerChoiceUpper === "PAPER"
        || humanChoiceUpper === "ROCK" && computerChoiceUpper === "SCISSORS"
        ) {
            console.log("You've won the round!");
            return humanScore += 1;
        } else {
        console.log("You lost the round..");
        return computerScore += 1;
    }
}

function selectChoiceEvent(event) {
    let humanChoice = event.target.textContent;
    let computerChoice = getComputerChoice();
    return playRound(humanChoice, computerChoice);
}

rockChoice.addEventListener("click", selectChoiceEvent);
paperChoice.addEventListener("click", selectChoiceEvent);
scissorsChoice.addEventListener("click", selectChoiceEvent);

/*
function playGame() {
    for(i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Your score is: ${humanScore}\nLe computer's score is: ${computerScore}`);
    }
    if( humanScore > computerScore) {
        console.log("Well done you've won the game!");
    } else if( humanScore === computerScore) {
            console.log("It's a tie!");
    } else {
            console.log("You lost the game..");
    }
}

playGame();
*/