'use strict';
 /*console.log( document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!'
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 13; */
 
const secretnumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess= document.querySelector('.guess').value;
    let scoredvalue = 0;

    if (!guess){
     document.querySelector('.message').textContent = 'No Number!'; 
    }
    else if(Number(guess) === secretnumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        scoredvalue ++;
        document.querySelector('.score').textContent = scoredvalue;
    } 
    else if(Number(guess) > secretnumber){
        document.querySelector('.message').textContent = 'your guessed number is higher than the real one!';
    }
    else if(Number(guess) < secretnumber){
        document.querySelector('.message').textContent = 'your guessed number is lower than the real one!';
    }

} );