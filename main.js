let playerScore = 0;
let computerScore = 0;

const playerNameText = document.querySelector(".player-name");
const computerNameText = document.querySelector(".computer-name");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const resultsText = document.querySelector(".versus-results");
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

  rockButton.addEventListener("click", rock);
  paperButton.addEventListener("click", paper);
  scissorsButton.addEventListener("click", scissors);

  // Keydown function
  document.addEventListener("keydown", key);

  function key(e) {
    if (e.code === "KeyR") {
      playerRock();
      rock();
    }
    if (e.code === "KeyP") {
      playerPaper();
      paper();
    }
    if (e.code === "KeyS") {
      playerScissors();
      scissors();
    }
  }

  // Player chooses Rock
  function rock() {
    playerRock();
    if (computerChoice() === "Scissors") {
      computerScissors();
      win();
    } else if (computerChoice() === "Paper") {
      computerScissors();
      lose();
    } else {
      computerRock();
      tie();
    }
    scores();
  }

  // Player choose Paper
  function paper() {
    playerPaper();
    if (computerChoice() === "Rock") {
      computerRock();
      win();
    } else if (computerChoice() === "Scissors") {
      computerScissors();
      lose();
    } else {
      computerPaper();
      tie();
    }
    scores();
  }

  // Player chooses Scissors
  function scissors() {
    playerScissors();
    if (computerChoice() === "Paper") {
      computerPaper();
      win();
    } else if (computerChoice() === "Rock") {
      computerRock();
      lose();
    } else {
      computerScissors();
      tie();
    }
    scores();
  }
}

// Function for Computer's choice - Rock, Paper or Scissors
function computerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

// Win
function win() {
  resultsText.textContent = "You WIN! 🥳";
  playerScore++;
}

// Lose
function lose() {
  resultsText.textContent = "You lose... 😭";
  computerScore++;
}

// Tie
function tie() {
  resultsText.textContent = "It's a tie! 😅";
}

// Scores display
function scores() {
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

// Player choice display
function playerRock() {
  playerChoiceText.innerHTML = '<i class="fas fa-hand-rock rps"></i>';
}

function playerPaper() {
  playerChoiceText.innerHTML = '<i class="fas fa-hand-paper rps"></i>';
}

function playerScissors() {
  playerChoiceText.innerHTML = '<i class="fas fa-hand-scissors rps"></i>';
}

// Computer choice display
function computerRock() {
  computerChoiceText.innerHTML = '<i class="fas fa-hand-rock rps"></i>';
}

function computerPaper() {
  computerChoiceText.innerHTML = '<i class="fas fa-hand-paper rps"></i>';
}

function computerScissors() {
  computerChoiceText.innerHTML = '<i class="fas fa-hand-scissors rps"></i>';
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

// reset function
function reset() {
  window.location.reload();
}
