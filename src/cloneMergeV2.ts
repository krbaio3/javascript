import { isNull } from './auxliar';

const merge = (...args) => {
    const target = {};
    const mergeObject = (obj) => {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                Object.prototype.toString.call(obj[prop]) === '[object Object]'
                    ? (target[prop] = merge(target[prop], obj[prop]))
                    : isNull(target[prop])
                    ? (target[prop] = obj[prop])
                    : 0;
            }
        }
    };

    for (const item in args) {
        mergeObject(args[item]);
    }
    return target;
};

/* Clone */

export { merge as deepMerge };
