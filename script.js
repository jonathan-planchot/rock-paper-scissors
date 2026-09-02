let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getHumanChoice() {
    return humanChoice = prompt("Quel est votre choix: ");
}

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
        console.log("You lose the round..");
        return computerScore += 1;
    }
}

let humanSelection;
let computerSelection;

for(i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playGame();
}

function playGame() {
    playRound(humanSelection, computerSelection);
    console.log(`Your score is: ${humanScore}\nLe computer's score is: ${computerScore}`);
}

if( humanScore > computerScore) {
    console.log("Well done you've won the game!");
} else if( humanScore === computerScore) {
    console.log("It's a tie!");
} else {
    console.log("You lose the game..");
}
