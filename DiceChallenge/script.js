


/*if 1 - console log you fail
if 20 - you win

else add result to running total up to max of 20
else statement if total is 20+ console log u win
need to define a total score*/

 /*ok so now we need to transfer this into the DOM, 
 rather than displaying the running score in the console, we want it to display on the page, via the dom.
 will need some sort of empty tag? which is filled with a value. - done this part! 

 secondly, we want the dice to roll when the button is clicked- sorted this part!

 thirdly, we want the appropriate score to bring up the specific dice image - done

fourthly, when we win or lose we want the button text to change to 
play again? - done

 finally, we want it to look pretty - done

*/

const button = document.getElementById("button");
const playerScore = document.getElementById("playerScore");
const roll = document.getElementById("roll");
const message = document.getElementById("message");
const img = document.getElementById("img");
let totalScore = 0;



const roller = () =>
{ let diceRollResult = Math.ceil(Math.random()* 6);
return diceRollResult;
}


const diceRoll = () => {
    let diceRollRes = roller();
    totalScore+=diceRollRes; //adds the roll to your total
    playerScore.textContent= totalScore; //displays your total on screen
if (diceRollRes == 1) //if its 1, logs u lose, and resets the total.
    {
    message.textContent = `You lost!`;
    totalScore = 0;//reset total score
    playerScore.textContent= totalScore; //displays your total on screen
    button.textContent = `Play again?`;
    return totalScore, diceRollRes;
    }  

else if (totalScore >= 20) //checks if your total is more or equal to 20
    {message.textContent = `You won!`; //says u win on screen
    playerScore.textContent= totalScore; //displays your total on screen
    totalScore = 0;//reset the score and can restart the game
    button.textContent = `Play again?`;
    return totalScore, diceRollRes;
    
}

else { //the total is less than 20
    message.textContent = `Keep rolling!`; //says this on screen
    playerScore.textContent= totalScore; //displays your total on screen
    button.textContent = `Let's roll baby!`;
    return totalScore, diceRollRes; //return the score for next roll
}

}

const diceImg = () => {
let diceRollR = diceRoll();
if (diceRollR == 1)
{img.src = "img/dice1.png";
} else if(diceRollR == 2)
{img.src = "img/dice2.png";
}else if(diceRollR == 3)
{img.src = "img/dice3.png";
}else if(diceRollR == 4)
{img.src = "img/dice4.png";
}else if(diceRollR == 5)
{img.src = "img/dice5.png";
}else if (diceRollR==6)
{img.src= "img/dice6.png";
} else 
(img.src="/")
}


button.addEventListener("click", () =>{
        diceImg();
})





/* cant get the random number generator to work in BOTH functions, works in one or the other, 
if i declare it as a global variable, the number doesn't update on the button click, it just 
generates the ran number once. If I declare it within the button event function, its value isn't read
and i get NAN.

have also tried creating it as a lil function itself, but doesnt run then.
tried calling the img function within the diceroll func but didnt work, 

SOLUTION : 
I wasn't calling the value from the function correctly, it should have been calling the roller func, not the returned value from the func.
*/