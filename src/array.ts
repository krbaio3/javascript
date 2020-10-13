const myArray = [133, 2, 3, 4, 5];

/* Head */

// const head = ([a]: number[]) => {
//     const [stElement] = [a];
//     return stElement;
// };

const head = ([a]: number[]) => a;

//console.log(head(myArray));

/* Tail */

const tail = ([st, ...rest]: number[]) => [...rest];

//console.log(tail(myArray));

/* Init */

const init = (customArray) => customArray.slice(0, customArray.length - 1);

//console.log(init(myArray));

/* Last */

const last = (customArray) => customArray.pop();

//console.log(last(myArray));


const arrayTest = (arr) => {
    console.log(head(myArray));
    console.log(tail(arr));
    console.log(init(arr));
    console.log(last(arr));
};
export {head, last, tail, init};
