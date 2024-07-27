import { greet } from './file1.js';
import { square } from './file2.js';
import * as axios from 'axios';

async function getDataFromNerwrok() {
    try {
        const res = await axios.get(url);
        const result = res.json();
        console.log('result', result);
    } catch (error) {
        console.log('Error', error);
    }
}
console.log(greet('Alice')); // Output: Hello, Alice!
console.log('Square of 5:', square(5)); // Output: Square of 5: 25
