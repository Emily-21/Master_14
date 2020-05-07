let pinAttempts = 3;
let i = 1
let balance = 1000;
let withdrawalMax = 250;
let withdrawalRequest;
let depositMax = 250;

// 4. Deposit funds

const depositFunds = () => {

   let depositAmount = parseInt(prompt(`how much would you like to deposit into your account?`));
   if (depositAmount > depositMax);
   { alert(`Sorry, there is a max deposit of £250 per day. Please enter a smaller amount.`);
   depositFunds();
   } else {
   balance += depositAmount;
   alert(`Your updated balance is £${balance}`);
   depositMax -= depositAmount;
   alert(`You can only deposit £${depositMax} for the rest of the day.`);
   return [balance, depositMax];
   }
}
//3. Withdrawal challenge

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

// 1. and 2. Enter Pin and only 3 attempts at PIN.
//  Issues as such : if enter pin correctly on 2nd attempt, 
//  it loops until loop is finished. If enter pin correctly on 3rd attempt, it just exits, no alert...

const enterPin = (pin = 4321 || "4321") => {
    
let userPin = prompt(`please enter your pin:`);

while (pinAttempts > i)
{if (userPin == pin) {
    alert(`Your pin is correct!`) ; 
    break;
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
depositFunds();


