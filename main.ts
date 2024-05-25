#! /usr/bin/env node
import inquirer from "inquirer";

let quiz: {
    Q1: string;
    Q2: string;
    Q3: string;
    Q4: string;
    Q5: string;
} = await inquirer.prompt([{
    name: "Q1",
    type: "list",
    message: "Q1. What is the correct way to check if two values are not equal in TYpeScript?",
    choices: ["a == b", "a === b", "a = b", "a !== b"]
}, 
{
    name: "Q2",
    type: "list",
    message: "Q2. Which of the following characteristics is commmonly allowed in variable names in TypeScript?",
    choices: ["$", "@", "%", "&"]
},
{
    name: "Q3",
    type: "list",
    message: "Q3. Which operator is commmonly used for string concatenation in TypeScript?",
    choices: ["+", "-", "*","/"]
},
{
    name: "Q4",
    type: "list",
    message: "Q4. In TypeScript, Which symbol is commonly used to terminate a statement? ",
    choices: [".", ";", ":", ","]
},
{
    name: "Q5",
    type: "list",
    message: "Q5. Which method of inquirer.js is used to start the prompt interface and receive user input",
    choices: ["start()", "prompt()", "init()", "run()"]
}]);

let score: number = 0;

switch(quiz.Q1){
    case "a !== b":
        console.log("1. Correct");
        ++score;
    break;
    default:
        console.log("1. Incorrect");
}

switch(quiz.Q2){
    case "$":
        console.log("2. Correct");
        ++score;
    break;
    default:
        console.log("2. Incorrect");
}
 
switch(quiz.Q3){
    case "+":
        console.log("3. Correct");
        ++score;
    break;
    default:
        console.log("3. Incorrect");
}

switch(quiz.Q4){
    case ";":
        console.log("4. Correct");
        ++score;
    break;
    default:
        console.log("4. Incorrect");
}

switch(quiz.Q5){
    case "prompt()":
        console.log("5. Correct");
        ++score;
    break;
    default:
        console.log("5. Incorrect");
}

console.log(`Score: ${score}`);

