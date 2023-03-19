/*
the player pick rock paper o scissor
outcomes:
rock destroys scissor
scissor cuts the paper
paper covers the rock

1) user to make a choice, decide how to collect the choice
2) computer to make a choice
3) condition that determines the winner
*/

/* emily's code
let userChoice = window.prompt("Would you like rock, paper or scissors?");
userChoice = userChoice.toLowerCase();

if (
  !(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")
) {
  alert("You can only choose rock, paper or scissors. Try again");
  window.location = "app2.html";
}

//computers choice
let computerChoice = Math.random();
if (computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (computerChoice <= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

if (userChoice == computerChoice) {
  alert("The result is a tie!");
} else if (userChoice == "rock") {
  if (computerChoice == "scissors") {
    alert("The computer got scissors so you win!");
  } else {
    alert("The computer got paper, you lose!");
  }
} else if (userChoice == "paper") {
  if (computerChoice == "rock") {
    alert("The computer picked rock, you win!");
  } else {
    alert("Computer got scissors, you lose!");
  }
} else if (userChoice == "scissors") {
  if (computerChoice == "paper") {
    alert("The computer got paper, you win!");
  } else {
    alert("the computer got rock, you lose!");
  }
} */
/*
the player pick rock paper o scissor
outcomes:
rock destroys scissor
scissor cuts the paper
paper covers the rock

1) user to make a choice, decide how to collect the choice
2) computer to make a choice
3) condition that determines the winner
*/

function playGame() {
  // get user's choice
  let userChoice = document.querySelector('input[name="choice"]:checked').value;

  if (
    !(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")
  ) {
    result = "You can only choose rock, paper or scissors. Try again";
    window.location = "gameRPS.html";
  }

  // computer's choice
  let computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // compare choices and determine the winner
  let result;
  if (userChoice == computerChoice) {
    result = "It's a tie!";
  } else if (userChoice == "rock") {
    if (computerChoice == "scissors") {
      result = "You win!";
    } else {
      result = "You lose!";
    }
  } else if (userChoice == "paper") {
    if (computerChoice == "rock") {
      result = "You win!";
    } else {
      result = "You lose!";
    }
  } else if (userChoice == "scissors") {
    if (computerChoice == "paper") {
      result = "You win!";
    } else {
      result = "You lose!.";
    }
  }

  // display the result
  document.getElementById("result").innerHTML =
    "You chose " +
    userChoice +
    ". The computer chose " +
    computerChoice +
    ". " +
    result;
}
