

let totalScore = 0;
let maxScore = 20;



/*if 1 - console log you fail
else add result to running total up to max of 20
else statement if total is 20+ console log u win
need to define a total score and a max score */

const diceRoll = () => {
 let diceRollResult = (Math.ceil(Math.random()* 6))
console.log(diceRollResult);

if (diceRollResult == 1)
{console.log(`you lost`);}
else {totalScore+=diceRollResult}
    if (totalScore >= 20)
    {console.log(`you Won. Your score is ${totalScore}`)}
    else 
        {console.log(`your score is ${totalScore}`)};  
 return totalScore; 
}

;
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
diceRoll();
