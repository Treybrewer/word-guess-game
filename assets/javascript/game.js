// create right answer words
var correctAnswer = ['asia', 'africa', 'europe', 'northamerica', 'southamerica', 'australia', 'antarctica'];
// choose one of the answer words randomly
var randomAnswer = (Math.floor(Math.random() * correctAnswer.length));
var choosenAnswer = correctAnswer[randomAnswer];
var guessRemaining = choosenAnswer.length;
var underscores = [];
var input = [];
var wronginput = [];
console.log(guessRemaining);
console.log(choosenAnswer);
// show correct number of underscores
// collect user guess
 document.onkeypress = function(event){
     input = event.key;
     if (choosenAnswer.indexOf(input) > -1) 
     {
        for(var i = 0; i < choosenAnswer.length; i++) {
            if(choosenAnswer[i] === input) {
                underscores[i] = input;
                console.log(underscores);
            }
        }
     }

     else {

     }
     
 };


console.log(input);
// check if guess is right or wrong
// if right win++ guess remaining--// if wrong loses++ guess remaining--

  