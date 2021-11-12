let prompt = require("prompt-sync")({ sigint: true });

let user_wins = 0;

let computer_wins = 0;

let options = ["rock", "paper", "scissors"];

while(true) {

  let user_input = prompt("Type rock/paper/scissors or q to quit: ")

  if(user_input == "q") {
    break;
  }

  let randomNumber = Math.floor(Math.random() * 3);

  let computer_choice = options[randomNumber];

  console.log("Computer picked", computer_choice + ".");

  if(user_input == "rock" && computer_choice == "scissors") {
    console.log("You won");
    user_wins++;
  } else if(user_input == "paper" && computer_choice == "rock") {
    console.log("You won");
    user_wins++;
  } else if(user_input == "scissors" && computer_choice == "paper") {
    console.log("You won");
    user_wins++;
 } else if(user_input == computer_choice) {
   console.log("Tie!")
   user_wins++;
   computer_wins++;
 }
 
 else {
    console.log("You lost");
    computer_wins++;
 }
}

console.log("You won", user_wins, "times.");
console.log("Computer won", computer_wins, "times.");
console.log("Goodbye");