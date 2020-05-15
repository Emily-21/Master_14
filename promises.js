//this is an introduction to theory that we will use later on with back-end dev


/* a promise is a function that promises to return a value at some point in the future. 

we will generally use a function or a method, we wanr 

*/

// const myPromise = () => {
//     return new Promise()   
// }
/*when you make a promise, you can either keep it, or break it, or youve not done either yet - it will take an amount of time. ' i promise ill get you a drink' still in process of doing it, the promise is not broken ,or kept, yet, 
same vibes with promises in js :
- resolve  - its done heres ya drink 
- reject - soz i didnt get ya drink 
- pending - limbo of not got the drink or not not got the drink lolzz

promises take 2 parameters resolve and reject */

const myPromise = ()=> {
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            resolve('step 2');
            }, 2000);
        }
        // resolve is like return 

})


// reject portion - 
const myPromise = (num)=> {
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            if (num < 5) {
            reject('invalid number');
            }
        resolve('step 2');
         2000);
        }

/* the below code will run step 1, step 3 and then step 2, because it's waiting 2 seconds to run the second itemjavascript event loop*/ 

// const main = () => {
//     console.log('step 1');
    
//     setTimeout(() => {
//     console.log('step 2');
//     }, 2000);
    
//     console.log('step 3');
//     }

//     main();


    /*when we want code to run in a certain order, we want to sort the order linearly, 
    await is waiting for a piece of code to execute before we move on
    async is a keyword used in a function (not in a global scope)
*/

    const main = async () => {
    console.log('step 1');
    console.log(await myPromise());
    console.log('step 3');
    }

    main();