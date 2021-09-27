// ROCK -> 1
// PAPER -> 2
// SCISSORS -> 3
const buttonContainer = document.querySelector('.button-container')

const buttons = document.querySelectorAll("button")
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const startGameBtn = document.querySelector(".start-game > button")
startGameBtn.addEventListener('click', ()=>{
  const playerScore = document.querySelector(".playerScore");
  playerScore.textContent = "0";
  const computerScore = document.querySelector(".computerScore");
  computerScore.textContent = "0";
  buttonContainer.classList.remove('no-display');
  startGameBtn.classList.add('no-display');
})
const infoText = document.querySelector('.infoText');
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
  let playerChoice;
  switch(event.target.textContent){
    case ("ROCK"):
      playerChoice=1;
      break;
    case ("PAPER"):
      playerChoice = 2;
      break;
    case ("SCISSORS"):
      playerChoice = 3;
      break;

  }
  let result = round(playerChoice);

  console.log(result)
  switch (result){
    case 1:
      playerScore.textContent++;
      console.log(playerScore);
      checkWinCondition(5);
      break;
    case -1:
      computerScore.textContent++;
      console.log(computerScore);
      checkWinCondition(5);
      break;
    case 0: 
      break;
  }

}


function computerPlay(){
  computerChoice = Math.floor(Math.random()* 3) + 1;
  // console.log(randomNum)
  switch (computerChoice){
    case 1: 
      console.log("Computer chose ROCK");
      break;
    case 2:
      console.log("Computer chose PAPER");
      break;
    case 3:
      console.log("Computer chose SCISSORS");
      break;
  }
  return computerChoice;
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

function round(playerChoice){
  computerChoice = computerPlay();
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

// function game(){
//   let toWin = 5;
//   let result = 0;
//   while (result < toWin){
//     let win = round();
//     if (win == 1){
//       result++;
//     }
//   }

// }




