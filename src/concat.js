const myArray1 = [1,2,3,4,5];
const myArray2 = ['hola', 'mundo', 'cruel'];

/* Concat */

const concat = (arrayA, arrayB) => [...arrayA,...arrayB];

console.log(concat(myArray1, myArray2));

