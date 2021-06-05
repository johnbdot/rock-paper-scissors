// click play.
// enter player name, opponent's name.
// player chooses. computer randmonly chooses.
// display results. update scores.
// best out of 7 wins.

let playerScore = 0;
let computerScore = 0;

const playerNameText = document.querySelector(".player-name");
const computerNameText = document.querySelector(".computer-name");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector("computer-score");
const resultsText = document.querySelector(".results");
const compChoiceText = document.querySelector(".computer-choice");

function roundStart() {
  const playerNameInput = prompt("Enter your name:");
  const computerNameInput = prompt("Enter opponent's name:");

  playerNameText.textContent = playerNameInput;
  computerNameText.textContent = computerNameInput;
}

function computerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);

  console.log(choice[random]);
}
