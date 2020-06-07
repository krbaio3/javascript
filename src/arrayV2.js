const myArrayNumbers = [1, 2, 3, 4, 5];
const myArrayString = ['hola', 'mundo', 'cruel'];

/* Head */

const head = (...args) => args.forEach((item) => {
        let [a] = item;
        console.log([a]);
    });

head(myArrayNumbers, myArrayString);


/* Tail */

const tail = (...args) => args.forEach(([st, ...rest]) => console.log([...rest]));

tail(myArrayNumbers, myArrayString);

/* Init */

const init = (...args) => args.forEach((item) => console.log(item.slice(0, item.length - 1)) );

init(myArrayNumbers, myArrayString);

/* Last */

const last = (...args) => args.forEach((item) => console.log(item.pop()));

last(myArrayString, myArrayNumbers);


export { head, last, tail, init };
