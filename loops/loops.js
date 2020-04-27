// // for (let i = 0; i < 10 ; i++) // first part will always be a
// // variable, but you can also declare it outside the loop 
// //so long as you include the ; the second part is a condition
// //the final part is the modifier to i
// // console.log(i);


// //let numberArray = [ 0, 1, 2, 3,5,8,7,]

// // let shoppingList = ['milk', 'egg', 'bread']

// // for(let i = 0; i < shoppingList.length; i++) {
// //     shoppingList[i] += "s";
// // }
// // console.table(shoppingList);

// /*“jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh”.

// The word “hi” appears multiple times. Find the first and last occurrence of the word hi and log them to the console.*/


// let jumble = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";


// for (let i = 0; i < jumble.length; i++) {

//     if(jumble[i] == "h" && jumble[i+1]== "i")
      
//     {console.log(`the word hi was found at index ${i}`);
//     break;} 
// }
// for (let i = jumble.length; i > 0; i--){
// if (jumble[i] == "i" && jumble[i-1] == "h") {
//     console.log(`the word hi was found at index ${i}`);
// break;}  
// }

// // if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// // Find the sum of all the multiples of 3 or 5 below 1000.
// // let sum = 0

// // for (i = 0; i <1000; i++) {
// //     if (i % 5 == 0 || i % 3 ==0) {
// // //         sum +=i }; // add up the values
// // // } console.log(sum);


// // for (let i = 0; i < 3; i ++) { //atm we have a for loop, i = 0 is a counter, so to start from 0, 
// //     console.log ("I love Manchester")}


//     //while loops will run as long as the condition is true 
// //so may run infinitely, need to ensure an exit condition
//     // while(true) {
//     //     console.log("hi");
//     //     break; //this stops it looping forever more

//     // }

//     let max= 3 
//     let i = 0
//     while (i < max) {
//         console.log('hello');
//         i++; 
//     }

//     let flag = true
//     while(flag) {
//         let randNum = Math.ceil(Math.random() * 6)

//         let userInput = prompt("guess the rand num between 1-6");
        
//         if (userInput == randNum){
//             flag = false}
//         }
        
        
        
//         console.log(`the random number was: ${randNum}`);
//         break;



        let pinAttempts = 3; 
        let i = 0
        while (pinAttempts > i) {
            console.log(pinAttempts--);
          }