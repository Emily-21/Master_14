


// let userGuess = prompt("Enter your guess);
// let randNum = Math.ceil(Math.random() *6)
// console.log(username);

// while(true){
//    if  console.log(`hello`);
//     break;
// }


while 
while(true) {
	let userInput = prompt("Enter your guess");
	let randNum = Math.floor(Math.random() * 6)+1;
	console.log(randNum);
	if (userInput == randNum) {
		alert("you guessed the correct number");
		break;
	} else {
		alert("your guess was incorrect");
	}
}