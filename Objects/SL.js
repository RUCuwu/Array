const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

let guess;

let running = true;

while(running){

    guess = window.prompt ('Guess a number between ${minNum}');
    guess = Number(guess);
    
    if(isNaN(guess)){
        win
    } 
    running = false;
}