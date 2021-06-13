let playerScore = 0;
let computerScore = 0;

const playerNameText = document.querySelector(".player-name");
const computerNameText = document.querySelector(".computer-name");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const resultsText = document.querySelector(".results");
const playerChoiceText = document.querySelector(".player-choice");
const computerChoiceText = document.querySelector(".computer-choice");
const startButton = document.querySelector(".start-button");

// Start game
startButton.addEventListener("click", roundStart);

// Round start
function roundStart() {
  const playerNameInput = prompt("Enter your name:", randomName());
  const computerNameInput = prompt("Enter opponent's name:", randomName());

  // Score reset
  playerScore = 0;
  computerScore = 0;

  // Displays scores and Player & Computer name
  scores();
  playerNameText.textContent = playerNameInput;
  computerNameText.textContent = computerNameInput;

  // Remove Start button when round starts
  startButton.remove();

  // Create new button and name it Reset
  const versusPanel = document.querySelector(".versus-panel");
  const newButton = document.createElement("button");
  newButton.className = "reset-button";
  newButton.textContent = "Reset";
  versusPanel.appendChild(newButton);

  // Add reset function to new reset button
  document.querySelector(".reset-button").addEventListener("click", reset);

  // Run game logic
  play();
}

// Game logic
function play() {
  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");

  // Click events
  rockButton.addEventListener("click", rock);
  paperButton.addEventListener("click", paper);
  scissorsButton.addEventListener("click", scissors);

  resultsText.textContent = "Best out of 7 Wins!";

  // Player chooses Rock
  function rock() {
    playerRPS("rock");
    if (computerChoice() === "Scissors") {
      computerRPS("scissors");
      playerScore++;
    } else if (computerChoice() === "Paper") {
      computerRPS("paper");
      computerScore++;
    } else {
      computerRPS("rock");
    }
    gameOver();
    scores();
  }

  // Player chooses Paper
  function paper() {
    playerRPS("paper");
    if (computerChoice() === "Rock") {
      computerRPS("rock");
      playerScore++;
    } else if (computerChoice() === "Scissors") {
      computerRPS("scissors");
      computerScore++;
    } else {
      computerRPS("paper");
    }
    gameOver();
    scores();
  }

  // Player chooses Scissors
  function scissors() {
    playerRPS("scissors");
    if (computerChoice() === "Paper") {
      computerRPS("paper");
      playerScore++;
    } else if (computerChoice() === "Rock") {
      computerRPS("rock");
      computerScore++;
    } else {
      computerRPS("scissors");
    }
    gameOver();
    scores();
  }

  // End game if score reached
  function gameOver() {
    if (playerScore === 4) {
      resultsText.textContent = "You Won! 🥳";
      hideButtons();
    } else if (computerScore === 4) {
      resultsText.textContent = "You lost... 😭";
      hideButtons();
    }
  }

  // Hide buttons after game ends
  function hideButtons() {
    rockButton.style.visibility = "hidden";
    paperButton.style.visibility = "hidden";
    scissorsButton.style.visibility = "hidden";
  }
}

// Function for Computer's choice - Rock, Paper or Scissors
function computerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

// Scores display
function scores() {
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

// Display choice for Player and Computer
function playerRPS(choice) {
  playerChoiceText.innerHTML = `<i class="fas fa-hand-${choice} rps text-effect"></i>`;
}

function computerRPS(choice) {
  computerChoiceText.innerHTML = `<i class="fas fa-hand-${choice} rps text-effect"></i>`;
}

// Random name generator for beginning of round
function randomName() {
  const choice = [
    "EatBullets",
    "PR0_GGRAM3D",
    "TheSickness",
    "Accidental Genius",
    "Chip Queen",
    "Desperado",
    "FenderBoyXXX",
    "Green Ghost",
    "PoopFinger",
    "A55 Kicken Chicken",
    "Your Mother",
  ];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

// Reset function
function reset() {
  window.location.reload();
}
