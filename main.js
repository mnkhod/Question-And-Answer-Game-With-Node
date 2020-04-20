const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What is your name? ",
  "What would you rather be doing? ",
  "What is your preferred programming language? "
];

let collectAnswers = (questions, done) => {

  const answers = [];

  const questionAnswered = answer => {
    answers.push(answer);

    if(answers.length < questions.length){
      interface.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  interface.question(questions[0], questionAnswered);

};

collectAnswers(questions, answers => {

  // Handling the return with a callback function ;-;
  //
  console.log("Thank You For Answers");
  console.log(answers);
  process.exit();

});

