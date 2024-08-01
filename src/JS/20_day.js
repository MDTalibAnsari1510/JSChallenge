// Day 20: LocalStorage and SessionStorage

// ACTIVITY - 1 Understanding LocalStorage
// Task:1 Write a script to save a string value to localStorage and retrieve it.Log the retrieved value.
localStorage.setItem('setInitialValue', 'This is my first vaue to store in local storage.');
console.log('Value get from LocalStorage: ', localStorage.getItem('setInitialValue'));

// Task:2 Write a script to save an object to localStorage by converting it to a JSON string.Retrieve and parse the object, then log it.
localStorage.setItem('setObjectValue', JSON.stringify({ name: "MD Talib", description: 'This is my first vaue to store in local storage.' }));
console.log('Objet value get from LocalStorage: ', JSON.parse(localStorage.getItem('setObjectValue')));


// ACTIVITY - 2 Using LocalStorage
// Task:3 Create a simple form that saves user input (e.g, name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });

    console.log('Form Data', formDataObject);
    saveToLocalStorage(formDataObject);
    form.reset();
});

window.onload = loadFromLocalStorage;

function saveToLocalStorage(data) {
    localStorage.setItem('userInput', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const savedName = JSON.parse(localStorage.getItem('userInput'));
    if (savedName) {
        document.getElementById('result').innerHTML = `
            <h2>Saved Data:</h2>
            <p><strong>Name:</strong> ${savedName.name}</p>
            <p><strong>Email:</strong> ${savedName.email}</p>
        `;
    }
}

// Task:4 Write a script to remove an item from localStorage. Log localStorage content before and after removel.
console.log('Before remove: ', localStorage.getItem('setObjectValue'));
localStorage.removeItem('setObjectValue');
console.log('After removal: ', localStorage.getItem('setObjectValue'));


// ACTIVITY - 3 Understanding SessionStorage
// Task:5 Write a script to save a string value to sessionStorage and retrieve it.Log the retrieved value.
sessionStorage.setItem('setInitialValue', 'This is my first vaue to store in session storage.');
console.log('Value get from sessionStorage: ', sessionStorage.getItem('setInitialValue'));

// Task:6 Write a script to save an object to sessionStorage by converting it to a JSON string.Retrieve and parse the object, then log it.
sessionStorage.setItem('setObjectValue', JSON.stringify({ name: "MD Talib", description: 'This is my first vaue to store in session storage.' }));
console.log('Objet value get from sessionStorage: ', JSON.parse(sessionStorage.getItem('setObjectValue')));


// ACTIVITY - 4 Using SessionStorage
// Task:7 Create a simple form that saves user input (e.g, name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
const sessionform = document.getElementById('myForm');
sessionform.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });

    console.log('Form Data', formDataObject);
    saveToSessionStorage(formDataObject);
    form.reset();
});

window.onload = loadFromSessionStorage;

function saveToSessionStorage(data) {
    sessionStorage.setItem('userInput', JSON.stringify(data));
}

function loadFromSessionStorage() {
    const savedName = JSON.parse(sessionStorage.getItem('userInput'));
    if (savedName) {
        document.getElementById('result').innerHTML = `
            <h2>Saved Data:</h2>
            <p><strong>Name:</strong> ${savedName.name}</p>
            <p><strong>Email:</strong> ${savedName.email}</p>
        `;
    }
}

// Task:8 Write a script to remove an item from sessionStorage. Log sessionStorage content before and after removel.
console.log('Before remove: ', sessionStorage.getItem('setObjectValue'));
sessionStorage.removeItem('setObjectValue');
console.log('After removal: ', sessionStorage.getItem('setObjectValue'));


// ACTIVITY - 5 Comparing LocalStorage and SessionStorage
// Task:9 Write a function that accepts key and a value, and save to both localStorage and sessionStorage. Retrive and log the value from both storage mechanisms.
function getAndSetDataInStorage(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log('Local Storage:', localStorage.getItem(key));
    console.log('session Storage:', sessionStorage.getItem(key));
}
getAndSetDataInStorage('abc', "wertyuioiuytrewsdfnm,");

// Task:10 Write a function that clears all data from both localStorage and sessionStorage. Varify that both storages are empty.
function clearStorages() {
    localStorage.clear();
    sessionStorage.clear();
    const localStorageEmpty = localStorage.length === 0;
    const sessionStorageEmpty = sessionStorage.length === 0;
    console.log('localStorage is empty:', localStorageEmpty);
    console.log('sessionStorage is empty:', sessionStorageEmpty);
}
clearStorages();
