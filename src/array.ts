/* Head */

// const head = ([a]: number[]) => {
//     const [stElement] = [a];
//     return stElement;
// };

const head = ([a]: any[]): any => a;

// console.log(head(myArray));

/* Tail */

const tail = ([, ...rest]: number[]) => [...rest];

// console.log(tail(myArray));

/* Init */

const init = (customArray) => customArray.slice(0, customArray.length - 1);

// console.log(init(myArray));

/* Last */

const last = (customArray) => customArray.pop();

// console.log(last(myArray));

export { head, last, tail, init };
