function playerPlay() {
    let player_choice = prompt("Rock, Paper or Scissors?");
    return player_choice;
}

function computerPlay() {
    let rsp_arr = ["Rock", "Paper", "Scissors"];

    let rsp_choice = rsp_arr[Math.floor(Math.random() * rsp_arr.length)];

    return rsp_choice;
}

function playRound (playerSelection, computerSelection) {
    
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();
    
    console.log("Player: " + player);
    console.log("Computer: " + computer);

    if (player == computer) {
        console.log("It's a Tie! No Points Given.");
    } else if (player == "rock") {
       if (computer == "paper") {
            console.log("You Lost! Paper beats Rock");
            return computer;
       } else {
            console.log("You Won! Rock beats Scissors");
            return player;
       }
    } else if (player == "scissors") {
        if (computer == "rock") {
            console.log("You Lost! Rock beats Scissors");
            return computer;
        } else {
            console.log("You Won! Scissors beats Paper");
            return player;
        }
     } else if (player == "paper") {
        if (computer == "Scissors") {
            console.log("You Lost! Scissors beats Paper");
            return computer;
        } else {
            console.log("You Won! Paper beats Rock");
            return player;
        }
     } else {
         console.log("Something Went Wrong. Reload the Page.");
     }
    
}

function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result === player) {
            playerScore++;
           
        } else if (result === computer) {
            computerScore++;
        }
     }

     
     if (playerScore > computerScore) {
         result = "Congratulations! Player Won the Match!" +
        "\nPlayer Score: " + playerScore +
        "\nComputer Score: " + computerScore;
         return result;
     } else if (playerScore < computerScore) {
         result = "Sorry! Computer Won the Match!" +
         "\nPlayer Score: " + playerScore +
         "\nComputer Score: " + computerScore;
         return result;
     } else if (playerScore == computerScore) {
         result = "It's a Tie!" +
         "\nPlayer Score: " + playerScore +
         "\nComputer Score: " + computerScore;
         return result;
     }
} 

console.log(game());

/* console.log("Player: " + player);
    console.log("Computer: " + computer); */