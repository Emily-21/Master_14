

const wrapper = document.getElementById('wrapper');
let div = document.createElement('div');

// adding an ID to a div below(only 1 so a simple method)
div.id = 'box';

let text = document.createTextNode('JS');
// for writing text in the box
// cant access this without accessing the div, it doesnt havew its own properties. so to update the text, you'd need to call the Div:

div.appendChild(text);

// this is fitting the text into the div
wrapper.appendChild(div);
// this is fitting the div into the wrapper 
// they dont have to be in a specific order

div.textContent = "CSS";


// classes are more tricky..

// adding classes to same element, because many items can be a class, we need a different method - classList... 

// myDiv.classList.add('class1', 'class2');

// can add multiple classes in one go by seperating them with a comma


// myDiv.classList.remove('class2');

// dont need to remove all - just select which one u want

// myDiv.classList.toggle()

// toggle is for when you change from dark to light theme? not 100 sure of this part.

console.log(div.textContent);