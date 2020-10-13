import { Book, isBookRead } from './readBooks';
import { clone, merge } from './cloneMerge';
import { customHead, customInit, customLast, customTail } from './arrayV2';
import { head, init, last, tail } from './array';

import { SlothMachine } from './slotMachine';
import { concat } from './concat';
import { deepMerge } from './cloneMergeV2';

/// /////////////////////////////////////////////////
// Array
/// ////////////////////////////////////////////////
const myArray1: number[] = [7, 2, 3, 4, 5];
const myArray2: string[] = ['hola', 'mundo', 'cruel'];

setTimeout(() => {
    console.log('Array');
    /* Array */
    console.log(head(myArray1));
    console.log(tail(myArray1));
    console.log(init(myArray1));
    console.log(last(myArray1));
    /* ArrayV2 */
    console.log(customHead(myArray1, myArray2));
    console.log(customTail(myArray1, myArray2));
    console.log(customInit(myArray1, myArray2));
    console.log(customLast(myArray2, myArray1));
}, 1000);

/// /////////////////////////////////////////////////
// Clone and Merge
/// ////////////////////////////////////////////////

const a: { name: string; surname: string; country: string } = {
    name: 'Maria',
    surname: 'Ibañez',
    country: 'SPA',
};
const b: { name: string; age: number; married: boolean } = {
    name: 'Luisa',
    age: 31,
    married: true,
};

setTimeout(() => {
    console.log('Clone and Merge');
    console.log(clone({ a: 1, b: 2, hola: 'Mundo' }));
    console.log(merge(a, b));
}, 2000);

/// /////////////////////////////////////////////////
// Clone and Merge 2
/// ////////////////////////////////////////////////

setTimeout(() => {
    console.log('Clone and MergeV2');
    // Clonado
    console.log(deepMerge({ a: 1, b: 2, hola: 'Mundo' }));
    // Deep Merge
    console.log(deepMerge(a, b));
}, 3000);

/// /////////////////////////////////////////////////
// Concat
/// ////////////////////////////////////////////////

setTimeout(() => {
    console.log('Concat');
    console.log(concat(myArray1, myArray2));
}, 4000);

/// /////////////////////////////////////////////////////////
// Read book questions
/// ////////////////////////////////////////////////
const books: Book[] = [
    { title: 'Harry Potter y la piedra filosofal', isRead: true },
    { title: 'Canción de hielo y fuego', isRead: false },
    { title: 'Devastación', isRead: true },
];

setTimeout(() => {
    console.log('Read book questions');
    console.log(isBookRead(books, 'Devastación')); // true
    console.log(isBookRead(books, 'Canción de hielo y fuego')); // false
    console.log(isBookRead(books, 'Los Pilares de la Tierra')); // false
}, 5000);

/// ////////////////////////////////////////////////////
// Slot Machine
/// ////////////////////////////////////////////////
const machine1 = new SlothMachine();

setTimeout(() => {
    console.log('Slot Machine');
    console.log(machine1.play()); // "Good luck next time!!"
    console.log(machine1.play()); // "Good luck next time!!"
    console.log(machine1.play()); // "Congratulations!!!. You won 3 coins!!"
    console.log(machine1.play()); // "Good luck next time!!"
    console.log(machine1.play()); // "Congratulations!!!. You won 2 coins!!"
}, 6000);
