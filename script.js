// Core Game Declarations & Functions
let playerScore = 0;
let computerScore = 0;
let round = 0;
let compChoices = ["Rock", "Paper", "Scissors"];

/* function playerPlay() {
    let player_choice = prompt("Rock, Paper or Scissors?");
    return player_choice;
} */

function computerPlay() {
    let compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    return compChoice;
}

function playRound (playerSelection, computerSelection) {
    
 //   player = playerSelection.toLowerCase();
 //   computer = computerSelection.toLowerCase();
    
 //   console.log("Player: " + playerSelection)
 //   console.log("Computer: " + computerSelection)

    if (playerSelection === computerSelection) {
        roundWinner = "tie"
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++
        roundWinner = "player"
    } else if (
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")
    ) {
        computerScore++
        roundWinner = "computer"
    } else {
         console.log("Something Went Wrong. Reload the Page.");
     }

    round++
    displayScoreStatus(roundWinner, playerSelection, computerSelection)
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}


// UI Declarations & Functions

const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const playAgainBtn = document.querySelector(".modal-btn")
const roundDetails = document.querySelector("#roundDetails")
const scoreStatus = document.querySelector("#scoreStatus")
const playerSymbol = document.querySelector("#playerSymbol")
const computerSymbol = document.querySelector("#computerSymbol")
const playerScorePara = document.querySelector("#playerScore")
const computerScorePara = document.querySelector("#computerScore")
const resultModal = document.querySelector(".modal")
const gameResult = document.querySelector(".game-result")
const overlay = document.querySelector(".overlay")

rockBtn.addEventListener('click', () => handleClick("Rock"))
paperBtn.addEventListener('click', () => handleClick("Paper"))
scissorsBtn.addEventListener('click', () => handleClick("Scissors"))
playAgainBtn.addEventListener('click', playAgain)
overlay.addEventListener('click', removeModal)
       
function handleClick(playerSelection) {
    if (isGameOver()) { /* Re-opens modal if closed but haven't pressed Play Again*/
        //console.clear()
        //console.log(`GG EZ \n Final Scores \n P: ${playerScore} \n C: ${computerScore}`)
        displayModal()
        return
    }

    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    updateSymbol(playerSelection, computerSelection)
    displayRoundDetails()
    
    if (isGameOver()) {
        //console.clear()
        //console.log(`GG EZ \n Final Scores \n P: ${playerScore} \n C: ${computerScore}`)
        displayModal()
        displayGameResult()
    }
}

function displayRoundDetails() {
    if (roundWinner === "tie") {
        roundDetails.textContent = `Round ${round} Winner/s: Tie`
        //console.log("Round Winner: Tie")
    } else if (roundWinner === "player") {
        roundDetails.textContent = `Round ${round} Winner: Player`
        //console.log("Round Winner: Player")
    } else if (roundWinner === "computer") {
        roundDetails.textContent = `Round ${round} Winner: Computer`
        //console.log("Round Winner: Computer")
    }
    
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
    //console.log(`Player: ${playerScore}`)
    //console.log(`Computer: ${computerScore}`)
}

function updateSymbol(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            playerSymbol.innerHTML = '<img src="./images/rock.png"/>'
            break
        case 'Paper':
            playerSymbol.innerHTML = '<img src="./images/paper.png" />'
            break
        case 'Scissors':
            playerSymbol.innerHTML = '<img src="./images/scissors.png"/>'
            break    
    }

    switch (computerSelection) {
        case 'Rock':
            computerSymbol.innerHTML = '<img src="./images/rock.png" />'
            break
        case 'Paper':
            computerSymbol.innerHTML = '<img src="./images/paper.png" />'
            break
        case 'Scissors':
            computerSymbol.innerHTML = '<img src="./images/scissors.png" />'
            break    
    }
}

function displayScoreStatus (winner, playerSelection, computerSelection) {
    if (winner === "player") {
        scoreStatus.textContent = `${playerSelection} beats ${computerSelection}`
        return
    } else if (winner === "computer") {
        scoreStatus.textContent = ` ${computerSelection} beats ${playerSelection} `
        return
    } else {
        scoreStatus.textContent = `${playerSelection} ties with ${computerSelection}`
    }
}

function displayModal() {
    resultModal.classList.add('active')
    overlay.classList.add('active')
}

function removeModal() {
    resultModal.classList.remove('active')
    overlay.classList.remove('active')
}

function displayGameResult() {
    return playerScore > computerScore
        ? (gameResult.textContent = `You win. \n Player: ${playerScore} \n Computer: ${computerScore}`)
        : (gameResult.textContent = `You lose.\n Player: ${playerScore} \n Computer: ${computerScore}`)
}

function playAgain() {
    playerScore = 0
    computerScore = 0
    round = 0
    roundDetails.textContent = "First to 5 Points Wins"
    scoreStatus.textContent = "Pick to Begin: "
    playerSymbol.textContent = "❔"
    computerSymbol.textContent = "❔"
    playerScorePara.textContent = "Player: 0"
    computerScorePara.textContent = "Computer: 0"
    resultModal.classList.remove('active')
    overlay.classList.remove('active')
}