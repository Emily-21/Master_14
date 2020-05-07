

// document.getElementById("heading").style.color="purple";
// document.getElementById("heading").style.backgroundColor="pink";


const myFirstHeading = document.getElementById("heading");
const button = document.getElementById("button");
const input = document.getElementById("input");
const paragraphs = document.getElementsByTagName("p"); //array
const smallerHeading = document.getElementsByClassName("smallerHeading");
const list = document.querySelectorAll("li");

// list.style.color="red";

for(let i = 0; i < list.length; i++){
    list[i].style.color = "yellow";
}
// paragraphs[0].style.color = "red";
// use a for loop to make it go through all the paragraphs.


//paragraph as well as smallerHeading both contain multiple values where as ID tags are only for ONE element. However, you can be led by the syntax (elementS) shows you there are more than one element within that class name, so it acts like an array, multiple values within that class. SOOO you cant target just paragraph in general because theres multiple, so you need to treat like an array, and select that individual paragraph element using [0] etc. to target ALL the items within the class, you need to use a FOR LOOP...

// query selector ALL - treats the element LIKE an array, whereas query selector only picks the first element.


// for(let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.color = "red";}

    // here its saying start at 0 (first para) and loop through each one to make it red. 

    // smallerHeading[0].style.color = "green";

    //this is saying only make green the first item.

// for(let i = 0; i < smallerHeading.length; i++){
// smallerHeading[i].style.color = "green";
// }

// myFirstHeading.addEventListener("click", () =>{
//     myFirstHeading.style.color = "green";

// })

// button.addEventListener("click", () =>{
//     smallerHeading[0].style.color = input.value;
// }) 

// smallerHeading.addEventListener('click', () =>{
    
// })


// for(let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.color = "red";}

button.addEventListener("click", () => {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = input.value;
}}
)
// the code above is compiling the result of the button click and applying it to the paragraph elements, because there is more than one in the p class, it has to contain the for loop as well. 
