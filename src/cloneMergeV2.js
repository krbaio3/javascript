const merge = (...args) => {
    let target = {};
    let mergearObject = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                Object.prototype.toString.call(obj[prop]) === '[object Object]' ?
                    target[prop] = merge(target[prop], obj[prop]) :
                    target[prop] = obj[prop];
            }
        }
    };

    for (let item in args) {
        mergearObject(args[item]);
    }
    return target;
};

/* Clone */

console.log(merge({a: 1, b: 2, hola: 'Mundo'}));

/* Merge */

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

console.log(merge(a, b));

export {merge};
