let computerGuess = '';
let computerText = document.querySelector(".cmp-guess-text");
let computerPick = document.querySelector(".cmp-guess-button");
function playGame(){
  if(Math.random() <= 0.1){
    computerGuess = 1;
    console.log(computerGuess);
  } else if(Math.random() > 0.1 && Math.random() <= 0.2){
    computerGuess = 2;
    console.log(computerGuess);
  } else if(Math.random() > 0.2 && Math.random() <=0.3){
    computerGuess = 3;
    console.log(computerGuess);
  } else if(Math.random() > 0.3 && Math.random() <=0.4){
    computerGuess = 4;
    console.log(computerGuess);
  } else if(Math.random() > 0.4 && Math.random() <=0.5){
    computerGuess = 5;
    console.log(computerGuess);
  } else if(Math.random() > 0.5 && Math.random() <=0.6){
    computerGuess = 6;
    console.log(computerGuess);
  } else if(Math.random() > 0.6 && Math.random() <=0.7){
    computerGuess = 7;
    console.log(computerGuess);
  } else if(Math.random() > 0.7 && Math.random() <=0.8){
    computerGuess = 8;
    console.log(computerGuess);
  } else if(Math.random() > 0.8 && Math.random() <=0.9){
    computerGuess = 9;
    console.log(computerGuess);
  } else{
    computerGuess = 10;
    console.log(computerGuess);
  }
};
computerPick.addEventListener('click',function(){
  playGame();
});
computerPick.addEventListener('click',function(){
  computerText.innerHTML = "Computer has Picked a Number";
});
let playerGuess = '';
let turns = 0;
let inputElement = document.querySelector(".player-input");
let turnsTaken = document.querySelector(".turns-text")
let guessButton = document.querySelector(".guess-button");
let guessResult = document.querySelector(".guess-result");
guessButton.addEventListener('click',function(){
   playerGuess = inputElement.value;
  if (playerGuess == computerGuess){
    guessResult.innerHTML = "You have guessed the correct number. Guess this Now!!";
    turns = 0;
    playGame();
  } else if (playerGuess > computerGuess){
    turns++;
    guessResult.innerHTML = `Try guessing a lil lower.`;
    turnsTaken.innerHTML = `Turns taken ${turns}`
  } else {
    turns++;
    guessResult.innerHTML = `Try guessing a lil higher.`;
    turnsTaken.innerHTML = `Turns taken ${turns}`
  }
});