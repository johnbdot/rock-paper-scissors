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
  const playerNameInput = prompt("Enter your name:", randomName());
  const computerNameInput = prompt("Enter opponent's name:", randomName());

  play();

  playerNameText.textContent = playerNameInput;
  computerNameText.textContent = computerNameInput;
}

function play() {
  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");

  rockButton.addEventListener("click", rock);
  paperButton.addEventListener("click", paper);
  scissorsButton.addEventListener("click", scissors);

  function rock() {
    computerText();
    if (computerChoice() === "Paper") {
      console.log("lose...");
    } else if (computerChoice() === "Scissors") {
      console.log("win!");
    } else {
      console.log("tie");
    }
  }

  function paper() {
    computerText();
    if (computerChoice() === "Scissors") {
      console.log("lose...");
    } else if (computerChoice() === "Rock") {
      console.log("win!");
    } else {
      console.log("tie");
    }
  }

  function scissors() {
    computerText();
    if (computerChoice() === "Rock") {
      console.log("lose...");
    } else if (computerChoice() === "Paper") {
      console.log("win!");
    } else {
      console.log("tie");
    }
  }

  function computerText() {
    computerChoiceText.textContent = computerChoice();
  }

  function computerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);

    return choice[random];
  }
}

function randomName() {
  const choice = ["Joe", "Bob", "Sally"];
  const random = Math.floor(Math.random() * choice.length);

  return choice[random];
}
