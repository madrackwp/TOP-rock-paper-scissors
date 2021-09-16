// ROCK -> 1
// PAPER -> 2
// SCISSORS -> 3

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

function getPlayerInput(){
  userInput = prompt("Enter ROCK, PAPER or SCISSORS").toUpperCase();
  switch(userInput){
    case ("ROCK"):
      console.log("Player Chose ROCK");
      return 1;  
    case ("PAPER"):
      console.log("Player Chose PAPER");
      return 2;
    case ("SCISSORS"):
      console.log("Player Chose SCISSORS");
      return 3;
    default:
      return -1; //This means that input was invalid
  }
}

function winLose(playerChoice, computerChoice){
  //0 -> Draw, 1 -> Win, -1 -> Lose
  if (playerChoice == computerChoice){
    return 0;
  }

  switch(playerChoice){
    case 1:
      // if (computerChoice == 2){
      //   return -1;
      // } else {
      //   return 1;
      // }
      return (computerChoice == 2) ? -1 : 1;
    case 2:
      // if (computerChoice == 1){
        // return 1;
      // } else {
        // return -1;
      // }
      return (computerChoice == 1) ? 1 : -1;
    case 3:
      // if (computerChoice == 1){
        // return -1;
      // } else {
        // return 1;
      // }
      return (computerChoice == 1) ? -1 : 1;
  }
}

function round(){
  computerChoice = computerPlay();
  while (true){
    playerChoice = getPlayerInput();
    if (playerChoice != -1){
      break;
    }
  }
  result = winLose(playerChoice, computerChoice);

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

function game(rounds){
  let result = 0;
  while (result < rounds){
    let win = round();
    if (win == 1){
      result++;
    }
  }

}



