// Day 9: DOM Manipulation

// ACTIVITY - 1 Selecting and Maipulation Elements
// Task:1 Select an HTML element by its ID and change its text content.
const title = document.getElementById('title');
title.style = `text-align: center`;
title.innerText = `Hello Everyone, I am my 30 days js challenge.`;

// Task:2 Select an HTML element by its class and change its background color.
const body = document.getElementsByClassName('body');
body[0].style = `background-color: rgb(132, 124, 124)`;


// ACTIVITY - 2 Creating and Appending Elements
// Task:3 Create a new 'div' element with some text content and append it to the body.
const div = document.createElement('div');
div.append(`Appended Text is now we are learning.`);

// Task:4 Create a new 'li' element and add it to an existing 'ul' list.
const ul = document.getElementById('ul');
ul.innerHTML = `<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>`;


// ACTIVITY - 3 Removing Elements
// Task:5 Select an HTML element and remove it from the DOM.
// ul.remove();

// Task:6 Remove the last child of a specific HTML element.
ul.removeChild(ul.lastChild);


// ACTIVITY - 4 Modifying Attributes and Classes
// Task:7 Select an HTML element and change one of its attributes (e.g. 'src' of an 'img' tag)
const img = document.getElementById('img');
img.src = `/home/swanbay04/Pictures/Screenshots/Screenshot from 2023-11-21 13-08-30.png`;

// Task:8 ADD and remove a CSS class to/from an HTML element.
body[0].classList.add('bodys');
body[0].classList.remove('body');


// ACTIVITY - 5 Event Handling
// Task:9 Add a click event listner to button that change the text content of a paragraph.
const saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', (e) => {
    const paragraph = document.getElementById('paragraph');
    paragraph.textContent = 'New text content after clicking the button.';
    e.target.innerText = 'Submit'
});

// Task:10 Add a mouseover  event listner to an element that change the text content of a paragraph.
saveBtn.addEventListener('mouseover', (e) => {
    e.target.style = 'border-radius: 11px;border-color: darkred;'
});
