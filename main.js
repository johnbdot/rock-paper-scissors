// prompt player name
// prompt computer name
// player chooses
// computer random choice
// score = 0
// if win, score +1
// if lose, score -1
// tie if else
// display results
// first to score 10 points, wins. game ends. ask to restart.

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
