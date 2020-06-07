/* Clone */

const clone = (source, ...args) => Object.assign(args[0] == null ? {} : args[0], source);

// const clone = (source) => JSON.parse(JSON.stringify(source));

console.log(clone({a: 1, b: 2, hola: 'Mundo'}));

/* Merge */

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

const merge = (target, source) => clone(target, source);

console.log(merge(a,b));
