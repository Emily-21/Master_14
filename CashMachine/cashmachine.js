let pinAttempts = 3;
let i = 1
let balance = 100;
let withdrawalMax = 250
let withdrawalRequest;

const withdraw = () => {
   let withdrawalRequest = prompt(`please enter withdrawal amount`);
   Number(withdrawalRequest);
   if (balance == 0) {
      alert(`Sorry, you don't have the funds for that withdrawal.`)
     }
   else if (withdrawalRequest > balance) {
        alert(`Sorry, you don't have the funds for that withdrawal. Please enter a 
        smaller amount.`)
     withdraw();
     
   } else if (withdrawalRequest > withdrawalMax){
      alert(`Sorry you can only withdraw £250 per day. You have ${withdrawalMax} 
      left to withdraw today.`)
      withdraw();
   } else { 
        alert(`you have withdrawn £${withdrawalRequest}.`);
        balance -= withdrawalRequest;
        withdrawalMax -= withdrawalRequest;
        alert(`your updated balance is £${balance}`);
        return [withdrawalMax, balance];
      
   }
   }



const enterPin = (pin = 4321 || "4321") => {
    
let userPin = prompt(`please enter your pin:`);

while (pinAttempts > i)
{if (userPin == pin) {
    alert(`Your pin is correct!`) ; 
    withdraw();
} else { 
    
    pinAttempts--;

    alert(`your pin is incorrect. Please re-enter your pin, you have ${pinAttempts} attempts remaining.`)

    enterPin()
      };
}
return pinAttempts;
 }


enterPin();
withdraw();


