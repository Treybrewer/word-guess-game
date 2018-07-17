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
var isInWord = false;
var isNotinword = true;
var letterGuessedArea = document.getElementById("wrongletters");
var guessRemaining = document.getElementById("guessRemaining");
var wordlength = document.getElementById("wordlength");
var counter = [];
var currentLetter = []
var answer = [];

// make a function to pick the word, put it in an array, make the display array

function start() {
    // trying to clear out variables
    // underscores = "";
    // choosenAnswer = "";
    // wronginput = [];

    randomAnswer = (Math.floor(Math.random() * correctAnswer.length));
    choosenAnswer = correctAnswer[randomAnswer];
    answer = choosenAnswer;
    console.log(choosenAnswer);
    // need the length of the chosen word to display the number of blanks too
    lengthOfWord = choosenAnswer.length;
    guessRemaining.innerHTML = lengthOfWord + 2; // need to add a  couple more guess to guess remaining
    wordlength.innerHTML = choosenAnswer.length + " letters"; // let the user know how many letters are in the word
    counter = choosenAnswer.length + 2;


    underscores.innerHTML = userGuessarray.join("");  // append the userGuessarray you just made above to the underscores var to display in the dom
    letterGuessedArea.innerHTML = wronginput.join("");  //apend the wronginput array so it can be seen in the dom





};

start();
//---------------------------------------------------------------------------



document.onkeyup = function () {
    // create if statement to check and see if it's in the alreadyguessed array
    currentLetter = event.key;  //gets the current letter
    guessRemaining.innerHTML--; //need to subtract the guesses remaining after every event.key
    counter--;




    // this loop only determines if the letter is in the word-----------
    for (var i = 0; i < choosenAnswer.length; i++) {
        if (currentLetter === choosenAnswer[i]) {  // compares the current letter to the answerArray
            isInWord = true;   // turn this true if the letter is in the word
            userGuessarray[i] = currentLetter;

        }
        else {
            isInWord = false;  //this will stop the current letter from going into the userguessarray if it is wrong letter
        }
    };
    userGuessarray = userGuessarray.filter(function (entry) { return entry.trim() != ""; });

    if (currentLetter !== choosenAnswer[i]) {
        isNotinword = true;

    };

    if (isNotinword = true) { //this will put the wrong guess in the wrong input array
        wronginput.push(event.key);

    };
    //write an if state for when the guess remaining hits 0

    if (counter < 1) {
        alert("you lose!");
        guessRemaining.innerHTML = 0;
        letterGuessedArea.innerHTML = 0;
    }
    //     if (currentLetter !== choosenAnswer[i]) {
    //         isNotinword = true;

    //     };

    //     if (isNotinword = true) { //this will put the wrong guess in the wrong input array
    //         wronginput.push(event.key);

    //     };
    //write an if state for when the guess remaining hits 0

    if (counter === 0) {
        alert("you lose!");
        lose++
    };
    //write if statement for user winning
    if (userGuessarray.length === choosenAnswer.length) {
        alert("you win!");
        win++
    };

    console.log(userGuessarray);
    console.log(wronginput);

    underscores.innerHTML = userGuessarray;
    letterGuessedArea.innerHTML = wronginput;
    winArea.innerHTML = win;
    loseArea.innerHTML = lose;




};


