let playerScore = 0;
let computerScore = 0;

const playerNameText = document.querySelector(".player-name");
const computerNameText = document.querySelector(".computer-name");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const resultsText = document.querySelector(".versus-results");
const computerChoiceText = document.querySelector(".computer-choice");

// Round start
function roundStart() {
  const playerNameInput = prompt("Enter your name:", randomName());
  const computerNameInput = prompt("Enter opponent's name:", randomName());

  play();

  playerNameText.textContent = playerNameInput;
  computerNameText.textContent = computerNameInput;
}

// Play
function play() {
  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");

  rockButton.addEventListener("click", rock);
  paperButton.addEventListener("click", paper);
  scissorsButton.addEventListener("click", scissors);

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
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
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
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
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
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
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
}

// Random name generator for beginning of round
function randomName() {
  const choice = ["Joe", "Bob", "Sally"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

// Function for Computer's choice - Rock, Paper or Scissors
function computerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}
