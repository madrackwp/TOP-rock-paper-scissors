// ROCK -> 1
// PAPER -> 2
// SCISSORS -> 3
const buttonContainer = document.querySelector('.button-container')

const buttons = document.querySelectorAll("button")
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const startGameBtn = document.querySelector(".start-game > button")
const infoText = document.querySelector(".infoText");


startGameBtn.addEventListener('click', ()=>{
  const playerScore = document.querySelector(".playerScore");
  playerScore.textContent = "0";
  const computerScore = document.querySelector(".computerScore");
  computerScore.textContent = "0";
  buttonContainer.classList.remove('no-display');
  startGameBtn.classList.add('no-display');
  infoText.textContent = "Game Begins! First to 5 wins! Chose ROCK, PAPER or SCISSORS"
})

var userInput = false;
let userChoice;
let toWin = 5;
// const playerScore = document.querySelector(".playerScore");
// const computerScore = document.querySelector(".computerScore");

buttons.forEach((button) =>{
  button.addEventListener('click', buttonPress);
})

function checkWinCondition(toWin){
  const playerScore = document.querySelector(".playerScore");
  const computerScore = document.querySelector(".computerScore");
  if (playerScore.textContent == toWin){
    console.log("Player wins")
    infoText.textContent="PLAYER WINS";
    buttonContainer.classList.add('no-display');
    startGameBtn.classList.remove('no-display');
    return "PLAYER WINS";
  } else if (computerScore.textContent == toWin){
    console.log("Computer wins")
    infoText.textContent="COMPUTER WINS";
    buttonContainer.classList.add('no-display');
    startGameBtn.classList.remove('no-display');
    return "COMPUTER WINS";
  } 
}

function buttonPress(event){
  const playerScore = document.querySelector(".playerScore");
  const computerScore = document.querySelector(".computerScore");
  let playerChoiceString = event.target.textContent
  let playerChoice = wordToInt(playerChoiceString);
  let computerChoiceString = computerPlay()
  let computerChoice = wordToInt(computerChoiceString);
  let result = round(playerChoice, computerChoice);

  console.log(result)
  switch (result){
    case 1:
      playerScore.textContent++;
      // console.log(playerScore);
      infoText.textContent = `Computer Chose ${computerChoiceString}. ${playerChoiceString} beats ${computerChoiceString}! Player wins this round!`;
      checkWinCondition(5);
      break;
    case -1:
      computerScore.textContent++;
      // console.log(computerScore);
      infoText.textContent = `Computer Chose ${computerChoiceString}. ${playerChoiceString} loses to ${computerChoiceString}! Computer wins this round!`;
      checkWinCondition(5);
      break;
    case 0: 
      infoText.textContent= `Computer also chose ${playerChoiceString}. Draw!`;
      break;
  }

}

function wordToInt(string){
  switch(string){
    case "ROCK":
      return 1;
    case "PAPER":
      return 2;
    case "SCISSORS":
      return 3;
  }
}

function computerPlay(){
  let computerChoice = Math.floor(Math.random()* 3) + 1;
  // console.log(randomNum)
  switch (computerChoice){
    case 1: 
      console.log("Computer chose ROCK");
      return "ROCK"
    case 2:
      console.log("Computer chose PAPER");
      return "PAPER"
    case 3:
      console.log("Computer chose SCISSORS");
      return "SCISSORS"
  }
}


function winLose(playerChoice, computerChoice){
  //0 -> Draw, 1 -> Win, -1 -> Lose
  if (playerChoice == computerChoice){
    return 0;
  }

  switch(playerChoice){
    case 1:
      return (computerChoice == 2) ? -1 : 1;
    case 2:
      
      return (computerChoice == 1) ? 1 : -1;
    case 3:
      return (computerChoice == 1) ? -1 : 1;
  }
}

function round(playerChoice, computerChoice){
  
  while (true){
    if (playerChoice != -1){
      break;
    }
  }
  let result = winLose(playerChoice, computerChoice);

  switch(result){
    case 0:
      console.log("DRAW");
      break;
    case 1: 
      console.log("YOU WIN");
      break;
    case -1:
      console.log("YOU LOSE. TRY AGAIN");
      break;
  }

  return result;

}





