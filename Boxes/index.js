
const wrapper = document.getElementById("wrapper");
const button = document.getElementById("button");
const input = document.getElementById("input");
const paragraphs = document.getElementsByTagName("p");
// const body = document.getElementsByTagName("body")[0];
// const form = document.getElementById("form");

// body.appendChild(form);
// body.appendChild(wrapper);

const makeBox = () => {
    let div = document.createElement("div")
    div.classList.add("box");
    wrapper.appendChild(div); 
}



//  part 1 defining the number of boxes:
//  let boxNum = 3;

//  for (let i = 0; i < boxNum; i++) {
//    makeBox();
// }

// part 2 letting user define number of boxes :

 button.addEventListener("click", () => { 
   let boxNum = input.value;
   for (let i = 0; i < boxNum; i++){
      makeBox();
   }
 })

   //  button example with paragraph colour on click below:

//     button.addEventListener("click", () => {
//       for (let i = 0; i < paragraphs.length; i++) {
//           paragraphs[i].style.color = input.value;
//   }}
//   )
    

    //  create button in html
    //  create input box in html
    //  declare the input as a variable
    //  declare the button as a variable
    //  onclick event listener on btn ??
    //  set boxnum as input.value

