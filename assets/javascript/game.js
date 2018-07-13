// create variables and arrays
var correctAnswer = ['asia', 'africa', 'europe', 'northamerica', 'southamerica', 'australia', 'antarctica'];
var randomAnswer = (Math.floor(Math.random() * correctAnswer.length));
var choosenAnswer = correctAnswer[randomAnswer];
var guessRemaining = [5];
var underscores = document.getElementById("underscores");
var wronginput = [];
var win = [0];
var lose = [0];
// create user input capture
console.log(choosenAnswer);
var inputArray = [];
 for (var i = 0; i < choosenAnswer.length; i++) {
 inputArray[i] = "_";
 }
 var remainingLetters = choosenAnswer.length;

// create a way to check the user input against the right answer


  