let playerScore = 0;
let computerScore = 0;
const maxScore = 7;

const playerNameText = document.querySelector(".player-name");
const computerNameText = document.querySelector(".computer-name");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector("computer-score");
const resultsText = document.querySelector(".results");
const computerChoiceText = document.querySelector(".computer-choice");

function roundStart() {
  const playerNameInput = prompt("Enter your name:");
  const computerNameInput = prompt("Enter opponent's name:");

  playerChoice();

  playerNameText.textContent = playerNameInput;
  computerNameText.textContent = computerNameInput;
}

function playerChoice() {
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");

  rock.addEventListener("click", computerText);
  paper.addEventListener("click", computerText);
  scissors.addEventListener("click", computerText);
}

function computerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);

  return choice[random];
}

function computerText() {
  computerChoiceText.textContent = computerChoice();
}
