const chalk = require('chalk');
const readlineSync = require('readline-sync')

var score = 0;
// data of high score
var highScores = [
  {
    name: "Ram",
    score: 4,
  },

  {
    name: "Shyam",
    score: 3,
  },
]
const questions = [
  {
    q: "Who played the role of batman? ",
    options: "a: Clark Kent, b: Christian Bale, c: Morgan Freeman ",
    a: "b",
  },
  {
    q: "Who directed the movie Dark Knight? ",
    options: "a: Darren Aronofsky, b: Steven Spielberg, c: Christopher Nolan ",
    a: "c",
  },
  {
    q: "What is the Joker's slogan? ",
    options: "a: Cheer Up, b: Take them down, c: Why so serious? ",
    a: "c",
  },
  {
    q: "Who refers to Batman as the Dark Knight? ",
    options: "a: Lucius Fox, b: James Gordon, c: Alfred ",
    a: "b",
  },
];

const validOptions = ['a', 'b', 'c'];

function ask(question) {
  console.log(chalk.yellow(question.q));
  const answer = readlineSync.question(chalk.cyan(question.options));
  if (validOptions.includes(answer)) {
    if (answer == question.a) {
      console.log(chalk.green("That is correct!! "));
      score++
    } else {
      console.log(chalk.redBright("Wrong answer :("));
    }
  } else {
    console.log(chalk.red("Please select one of the valid options ", validOptions));
    ask(question);
  }
  console.log("\n")
}

console.log(chalk.green("Welcome to the Dark Knight quiz!!"));

var userName = readlineSync.question("What's Your name? ");

console.log("Hi " + userName + ", Let's get started\n");

for (var i = 0; i < questions.length; i++) {
  ask(questions[i]);
}

console.log("------------------")
console.log("Your score is ", chalk.bold.green(score))
console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))