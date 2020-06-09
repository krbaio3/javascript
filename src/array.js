const myArray = [1, 2, 3, 4, 5];

/* Head */

const head = ([a]) => [a];

console.log(head(myArray));

/* Tail */

const tail = ([st, ...rest]) => [...rest];

console.log(tail(myArray));

/* Init */

const init = (customArray) => customArray.slice(0, customArray.length - 1);

console.log(init(myArray));

/* Last */

const last = (customArray) => customArray.pop();

console.log(last(myArray));


export const arrayTest = (myArray) => {
    console.log(head(myArray));
    console.log(tail(myArray));
    console.log(init(myArray));
    console.log(last(myArray));
};
export {head, last, tail, init};
