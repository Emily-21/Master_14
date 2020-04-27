
// let kettleBoiled = true;

// const makeDrinkOfVimto = () => {
   
//    if (kettleBoiled) {
//     console.log("pour the drink");
//     kettleBoiled = false;}
//    else {console.log("boil the kettle then");
// kettleBoiled = true;
// }
   
//     console.log("here is vimto.");
// }:

// let num;
// let sum;
// const threeOrFive = (num, sum) => {
// for (i = 0; i < num; i++) {
// if (i % 3 == 0 || i % 5 == 0) {
// sum += i; // sum = sum + i
// }
// }
// console.log(sum);
// }

// threeOrFive( 20, 30);
// threeOrFive(5, 10);

// const withdrawal = (accNum, withdrawAmount) => {
//     console.log(`Withdrawing ${withdrawAmount} from ${accNum}`);
// }
// withdrawal(123456, 50)

// let numberOne; // need to declare these (js lets us off but other langs dont!)
// let numberTwo;

// const totalOrMultiply = (numberOne, numberTwo) => {
// let total = numberOne + numberTwo
// let multiply = numberOne * numberTwo
// if (total % 2 == 0) {console.log(total);
// }
// else {console.log(multiply);
// }

// }

// totalOrMultiply( 30, 10)
// totalOrMultiply( 30, 17)
// totalOrMultiply( 3, 9)
// totalOrMultiply(14, 51)


const myFunc = (x) => {
    console.log(x);
}
    myFunc(3);



const myCash = (currency='GBP', lang='en') => {
    // if (typeof currency == 'undefined') {
    // currency = 'GBP';
    // }
    // if (typeof lang == 'undefined') {
    // currency = 'en';
    // }
    console.log(currency);
    console.log(lang);
    }
    myCash(undefined,  'fr');// if you want to replace only the second parameter you can put undefined in the first space to skip over it. 

    const options = (darkMode=true, fontSize='18pt', highContrast=false, fontWeight='standard') => {

console.log(darkMode);
console.log(fontSize);
console.log(highContrast);
console.log(fontWeight);

    }  
    options(undefined, '22pt', undefined, 'bold'); //saying show default for darkmode and skip highcontrast

