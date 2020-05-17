


/*if 1 - console log you fail
if 20 - you win

else add result to running total up to max of 20
else statement if total is 20+ console log u win
need to define a total score*/

 /*ok so now we need to transfer this into the DOM, 
 rather than displaying the running score in the console, we want it to display on the page, via the dom.
 will need some sort of empty tag? which is filled with a value. - done this part! 

 secondly, we want the dice to roll when the button is clicked- sorted this part!

 thirdly, we want the appropriate score to bring up the specific dice image

fourthly, when we win or lose we want the button text to change to 
play again? - done

fifthly, we want it to reset all the values when we click play again- so it's 2 clicks, play again and then lets roll baby

 finally, we want it to look pretty.

*/

const button = document.getElementById("button");
const playerScore = document.getElementById("playerScore");
const roll = document.getElementById("roll");
const message = document.getElementById("message");
const img = document.getElementById("img");
let totalScore = 0;




const diceRoll = () => {
let diceRollResult = (Math.ceil(Math.random()* 6));
roll.textContent= diceRollResult; //shows your roll on screen (replace with images)
totalScore+=diceRollResult; //adds the roll to your total
playerScore.textContent= totalScore; //displays your total on screen
if (diceRollResult == 1) //if its 1, logs u lose, and resets the total.
    {
    message.textContent = `you lost`;
    totalScore = 0;//reset total score
    playerScore.textContent= totalScore; //displays your total on screen
    button.textContent = `Play again?`;
    return totalScore, diceRollResult;
    }  

else if (totalScore >= 20) //checks if your total is more or equal to 20
    {message.textContent = `You won!`; //says u win on screen
    playerScore.textContent= totalScore; //displays your total on screen
    totalScore = 0;//reset the score and can restart the game
    button.textContent = `Play again?`;
    return totalScore, diceRollResult;
    
}

else { //the total is less than 20
    message.textContent = `keep rolling pal`; //says this on screen
    playerScore.textContent= totalScore; //displays your total on screen
    button.textContent = `Let's roll baby!`;
    return totalScore, diceRollResult; //return the score for next roll
}

}

const diceImg = () => {
    if (diceRollResult == 1)
{img.src = "img/dice1.png";
} else if(diceRollResult == 2)
{img.src = "img/dice2.png";
}else if(diceRollResult == 3)
{img.src = "img/dice3.png";
}else if(diceRollResult == 4)
{img.src = "img/dice4.png";
}else if(diceRollResult == 5)
{img.src = "img/dice5.png";
}else {img.src= "img/dice6.png";
}
}




button.addEventListener("click", () =>{
    diceRoll();
    diceImg();
})

