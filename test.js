// have to install 'promt-sync' to use the prompt function to work on node.js
const prompt = require('prompt-sync')({sigint: true});

let playGame = true;
//makes a random number between 1-10 to make it a little easier to guess. +1 to include 10 and remove the chance of 0.
let randomNum = Math.floor((Math.random() * 10) + 1);
// while loop to keep the game running.
while(playGame){
    // takes the input of the user and stores in guess.
    let guess = prompt('Guess the random number: ')
    //turns the input string to a number
    guess = parseInt(guess)
    //checks if the guess devided by 1 leaves 0 otherwise it is not a whole number.
    if(guess % 1 !== 0) {
        console.log(`You answered ${guess}. The correct answer is a whole number`)
    }
    //checks of the guess is the same as the random number
    if(guess === randomNum) {
        console.log(`You answered ${guess}. This is the correct answer!`);
        //playGame is set to false to exit the while loop.
        playGame = false;
        //checks if the guess is greater than the random number.
    } else if(guess > randomNum) {
        console.log(`You answered ${guess}. The correct answer is lower.`)
    } else {
        console.log(`You answered ${guess}. The correct answer is Higher.`)
    }

}
  
