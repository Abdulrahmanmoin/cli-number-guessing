#! usr/bin/env node

import inquirer from "inquirer"

let randomNumber: number = Math.floor(Math.random() * 6 + 1);

let answer = await inquirer.prompt([{
    name: "userGuess",
    type: "number",
    message: "Please guess a number between 1-6: "
}])

if (randomNumber === answer.userGuess) {
    console.log("You guessed right number");
} else {
    console.log("You guessed wrong number");
    
}