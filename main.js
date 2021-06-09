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
  // Keydown function
  document.addEventListener("keydown", key);

  function key(e) {
    if (e.code === "KeyR") {
      playerChoiceText.textContent = "Rock";
      rock();
    }
    if (e.code === "KeyP") {
      playerChoiceText.textContent = "Paper";
      paper();
    }
    if (e.code === "KeyS") {
      playerChoiceText.textContent = "Scissors";
      scissors();
    }
  }

  // Player chooses Rock
  function rock() {
    if (computerChoice() === "Scissors") {
      computerChoiceText.textContent = "Scissors";
      win();
    } else if (computerChoice() === "Paper") {
      computerChoiceText.textContent = "Paper";
      lose();
    } else {
      computerChoiceText.textContent = "Rock";
      tie();
    }
    scores();
  }

  // Player choose Paper
  function paper() {
    computerChoiceText.textContent = computerChoice();
    if (computerChoice() === "Rock") {
      computerChoiceText.textContent = "Rock";
      win();
    } else if (computerChoice() === "Scissors") {
      computerChoiceText.textContent = "Scissors";
      lose();
    } else {
      computerChoiceText.textContent = "Paper";
      tie();
    }
    scores();
  }

  // Player chooses Scissors
  function scissors() {
    computerChoiceText.textContent = computerChoice();
    if (computerChoice() === "Paper") {
      computerChoiceText.textContent = "Paper";
      win();
    } else if (computerChoice() === "Rock") {
      computerChoiceText.textContent = "Rock";
      lose();
    } else {
      computerChoiceText.textContent = "Scissors";
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
