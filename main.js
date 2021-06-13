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
    playerRock();
    if (computerChoice() === "Scissors") {
      computerScissors();
      playerScore++;
    } else if (computerChoice() === "Paper") {
      computerScissors();
      computerScore++;
    } else {
      computerRock();
    }
    gameOver();
    scores();
  }

  // Player chooses Paper
  function paper() {
    playerPaper();
    if (computerChoice() === "Rock") {
      computerRock();
      playerScore++;
    } else if (computerChoice() === "Scissors") {
      computerScissors();
      computerScore++;
    } else {
      computerPaper();
    }
    gameOver();
    scores();
  }

  // Player chooses Scissors
  function scissors() {
    playerScissors();
    if (computerChoice() === "Paper") {
      computerPaper();
      playerScore++;
    } else if (computerChoice() === "Rock") {
      computerRock();
      computerScore++;
    } else {
      computerScissors();
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

// Player choice display
function playerRock() {
  playerChoiceText.innerHTML =
    '<i class="fas fa-hand-rock rps text-effect"></i>';
}

function playerPaper() {
  playerChoiceText.innerHTML =
    '<i class="fas fa-hand-paper rps text-effect"></i>';
}

function playerScissors() {
  playerChoiceText.innerHTML =
    '<i class="fas fa-hand-scissors rps text-effect"></i>';
}

// Computer choice display
function computerRock() {
  computerChoiceText.innerHTML =
    '<i class="fas fa-hand-rock rps text-effect"></i>';
}

function computerPaper() {
  computerChoiceText.innerHTML =
    '<i class="fas fa-hand-paper rps text-effect"></i>';
}

function computerScissors() {
  computerChoiceText.innerHTML =
    '<i class="fas fa-hand-scissors rps text-effect"></i>';
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
