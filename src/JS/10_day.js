// Day 10: Event Handling

// ACTIVITY - 1 Basic Event Handling
// Task:1 Add a click event listener to a button that change the text content of a paragraph.
const saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', (e) => {
    const paragraph = document.getElementById('paragraph');
    paragraph.textContent = 'New text content after clicking the button.';
    e.target.innerText = 'Submit'
});

// Task:2 Add a double-click event listener to image that toggle its visibility.
const img = document.getElementById('img');
img.addEventListener('dblclick', (e) => {
    console.log(img.style)
    image.style.display = 'block'
    e.style.visibility = 'visible'
});


// ACTIVITY - 2 Mouse Events
// Task:3 Add a mouseover event listener to an element that change its background color.
const body = document.getElementById('bdy');
body.addEventListener('mouseover', (e) => {
    e.target.style = 'background-color: #000030; color: white;';
});

// Task:4 Add a mouseout event listener to an element that reset its background color.
body.addEventListener('mouseout', (e) => {
    e.target.style = 'background-color: white; color: black;';
});


// ACTIVITY - 3 Keyboard Events
// Task:5 Add a keydown event listner to an input field that logs the key pressed to the console.
const input = document.getElementById('key');
input.addEventListener('keydown', () => {
    console.log('the key pressed');
});

// Task:6 Add a keyup event listner to an input field that displays the value in a paragraph.
input.addEventListener('keyup', (e) => {
    const para = document.getElementById('paragraph')
    para.innerText = e.target.value;
});


// ACTIVITY - 4 Form Events
// Task:7 Add a submit to a form that prevents the default submission and log the form data to the console.
const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });

    console.log('Form Data', formDataObject);
    form.reset()
});

// Task:8 Add a change event listner to a select dropdown that displays the seleted value in a paragraph.
const select = document.getElementById('cars');
select.addEventListener('change', (e) => {
    const para = document.getElementById('para')
    para.innerText = e.target.value;
});


// ACTIVITY - 5 Event Delegation
// Task:9 Add a click event listner to a list that logs the text content of the clicked list item using event delegation.
const list = document.getElementById('myList');
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('Clicked:', e.target.textContent);
    }
});

// Task:10 Add an event listner to a parent element that listens for eventsfrom dynamically added child elements.
const container = document.getElementById('container');
container.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        console.log('Clicked:', event.target.textContent);
    }
    function addNewButton() {
        var button = document.createElement('button');
        button.textContent = 'New Button';
        container.appendChild(button);
    }
    setTimeout(addNewButton, 3000);
});

