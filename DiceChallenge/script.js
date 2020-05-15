let totalScore = 0;
/*if 1 - console log you fail
if 20 - you win

else add result to running total up to max of 20
else statement if total is 20+ console log u win
need to define a total score*/

const diceRoll = () => {
 let diceRollResult = (Math.ceil(Math.random()* 6))
console.log(diceRollResult); //check the result
totalScore+=diceRollResult; //adds the roll to your total
if (diceRollResult == 1) //if its 1, logs u lose, and resets the total.
    {
    console.log(`you lost`);
    totalScore = 0;//reset total score
    return totalScore;
    }  

else if (totalScore >= 20) //checks if your total is more or equal to 20
    {console.log(`you win, your score is ${totalScore}`); //says u win
    totalScore = 0;
    return totalScore; //reset the score and can restart the game
}

else { //the total is less than 20
    console.log(`your score is ${totalScore}`); //show what the score is
    return totalScore; //return the score for next roll
}
}





diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
