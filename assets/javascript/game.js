// create variables and arrays
var correctAnswer = ['asia', 'africa', 'europe', 'northamerica', 'southamerica', 'australia', 'antarctica'];
var randomAnswer = (Math.floor(Math.random() * correctAnswer.length));
var choosenAnswer = correctAnswer[randomAnswer];
var guessRemaining = [choosenAnswer.length];
var underscores = document.getElementById("underscores");
var wronginput = [];
var win = [0];
var lose = [0];
// create user input capture
console.log(choosenAnswer);
console.log(underscores);
var userGuessarray = [];
var wrong = [];
document.onkeyup = function(event){
    var keypressed = [];
    console.log(event.key);
    keypressed.push(event.key);
    console.log(userGuessarray);
    var wrongletters = document.getElementById("wrongletters");
    userGuessarray.push(keypressed);

    for (var i = 0; i < choosenAnswer.length; i++) 
        else{
           
        }
    }
       


};



 
// create a way to check the user input against the right answer


  