#! usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var randomNumber = Math.floor(Math.random() * 6 + 1);
var answer = await inquirer_1.default.prompt([{
        name: "userGuess",
        type: "number",
        message: "Please guess a number between 1-6: "
    }]);
if (randomNumber === answer.userGuess) {
    console.log("You guessed right number");
}
else {
    console.log("You guessed wrong number");
}
