// create variables and arrays
var correctAnswer = ["asia", "africa", "europe", "northamerica", "southamerica", "australia", "antarctica"];
var randomAnswer;
var choosenAnswer;
// var guessRemaining = choosenAnswer.length;
var lengthOfWord;
var underscores = document.getElementById("underscores");
var wronginput = [];
var win = [0]   // this can just be a number, no array
var lose = [0];// this can just be a number, no array
var winArea = document.getElementById("win");
var loseArea = document.getElementById("lose");
var userGuessarray = [];
var letterAlreadyGuessed = [];
var isInWord = true;
var isNotinword = true;
var letterGuessedArea = document.getElementById("wrongletters");
var guessRemaining = document.getElementById("guessRemaining");

// make a function to pick the word, put it in an array, make the display array

function start() {
    // trying to clear out variables
    // underscores = "";
    // choosenAnswer = "";
    // wronginput = [];

    randomAnswer = (Math.floor(Math.random() * correctAnswer.length));
    choosenAnswer = correctAnswer[randomAnswer];
    console.log(choosenAnswer);
    // need the length of the chosen word to display the number of blanks too
    lengthOfWord = choosenAnswer.length;
    guessRemaining.innerHTML = 5;
    
    // a for loop here will run thru the length of word and push a "_" each time 
    // this will be the displayed underline array you see
    //    for (var i = 0; i < lengthOfWord; i++) {
    //     userGuessarray.push(" ");  // put this code inside the for loop



    //    }
    underscores.innerHTML = userGuessarray.join("");
    letterGuessedArea.innerHTML = wronginput.join("");


    // append the userGuessarray you just made above to the underscores var to display in the dom



};

start();
//---------------------------------------------------------------------------



document.onkeyup = function (event) {
    // create if statement to check and see if it's in the alreadyguessed array
    var currentLetter = event.key;  //gets the current letter
    
        
    //    console.log(event.key);
    

    // this loop only determines if the letter is in the word-----------
    for (var i = 0; i < choosenAnswer.length; i++) {
        if (currentLetter === choosenAnswer[i]) {  // compares the current letter to the answerArray
            isInWord = true;   // turn this true if the letter is in the word
            userGuessarray[i] = currentLetter;
            
        };
    };
        if (currentLetter != choosenAnswer[i]) {
            isNotinword = true;
            
        };
    
    if (isNotinword = true) {
        wronginput.push(event.key);
        
        
    };
    
    if (userGuessarray === choosenAnswer) {
        win++;
    }
    else {
        lose++;
    };
    console.log(userGuessarray);
    console.log(wronginput);
    
    underscores.innerHTML = userGuessarray;
    letterGuessedArea.innerHTML = wronginput;
    winArea.innerHTML = win;
    loseArea.innerHTML = lose;

};

