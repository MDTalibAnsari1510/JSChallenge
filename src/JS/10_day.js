// Day 9: Event Handling

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
