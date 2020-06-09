import {arrayTest} from './array';
import {arrayV2Test} from './arrayV2';
import {clone, merge} from './cloneMerge';
import {merge as merge2} from './cloneMergeV2';
import {concat} from './concat';

import './readBooksQuestion';
import './slotMachineQuestion';


const myArray1: number[] = [1, 2, 3, 4, 5];
const myArray2: string[] = ['hola', 'mundo', 'cruel'];

/* Array */
arrayTest(myArray1);

/////////////
/* ArrayV2 */

arrayV2Test(myArray1, myArray2);

/////////////
/* Clone and Merge */

const a:{name: String, surname: String, country: String } = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b: {name: String, age: number, married: boolean } = {name: "Luisa", age: 31, married: true};

console.log(clone({a: 1, b: 2, hola: 'Mundo'}));

console.log(merge(a, b));

///////////////
/* Clone and MergeV2 */

// Clonado
console.log(merge2({a: 1, b: 2, hola: 'Mundo'}));

// Deep Merge
console.log(merge(a, b));

/////////////////
/* Concat */

console.log(concat(myArray1, myArray2));



