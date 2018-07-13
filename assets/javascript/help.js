// create variables and arrays
var correctAnswer = ['asia', 'africa', 'europe', 'northamerica', 'southamerica', 'australia', 'antarctica'];
var randomAnswer;
var choosenAnswer;
// var guessRemaining = choosenAnswer.length;
var lengthOfWord;
var underscores = document.getElementById("underscores");
var wronginput = [];
var win = [0]   // this can just be a number, no array
var lose = [0];// this can just be a number, no array
// create user input capture
// console.log(underscores);
var userGuessarray = [];
// var letterAlreadyGuessed = [];
var isInWord = false;


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

   // a for loop here will run thru the length of word and push a "_" each time 
   // this will be the displayed underline array you see
   for (var i = 0; i < lengthOfWord; i++) {
    userGuessarray.push("_");  // put this code inside the for loop
    

   }
   
   underscores.innerHTML = userGuessarray.join("");
  


   // append the userGuessarray you just made above to the underscores var to display in the dom


   
};

start();
//---------------------------------------------------------------------------



document.onkeyup = function(event){
    // create if statement to check and see if it's in the alreadyguessed array
   var currentLetter = event.key;  //gets the current letter

   console.log(event.key);
//    userGuessarray.push(event.key);
//    var wrongletters = document.getElementById("wrongletters");
   
   // this loop only determines if the letter is in the word-----------
   //  if it is; the var isInWord becomes true, use this to continue the code.
   for (var i = 0; i < choosenAnswer.length; i++) {
       if (   currentLetter    === choosenAnswer[i]) {  // compares the current letter to the answerArray
          isInWord = true;   // turn this true if the letter is in the word
          userGuessarray[i] = currentLetter;
       }
       else{
           // else the  isInWord var stays false;
           
       }
   };
   console.log(userGuessarray);

   if(isInWord === true){
    //   letterAlreadyGuessed.push(currentLetter);
     isInWord === false;
     for (var i = 0; i < choosenAnswer.length; i++) 
        {
         if (   currentLetter   === choosenAnswer[i]) {  
            userGuessarray[i] = currentLetter;
         }
        

        }
   }
   else {
    wronginput.push(currentLetter);
    console.log(wronginput);
   }
   
  
    console.log(currentLetter);
   
   //-------------------------------------------------------------------
   
   
   // we can work on this area after you get it dipsplaying the underscores


   if(isInWord) {

   }
   

   // wrong.push(event.key);
   //         wrong = wrongletters.innerHTML;

   // underscores.innerHTML = userGuessarray;
};

// Message Input

// Message @Brian Smith