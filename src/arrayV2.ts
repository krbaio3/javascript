// const myArrayNumbers = [7, 2, 3, 4, 5];
// const myArrayString = ['hola', 'mundo', 'cruel'];

/* Head */

export const customHead: (...T) => Array<typeof T> = (...args) => {
    let result: any[] = [];
    args.forEach(([st]) => result.push(st));
    return result;
};

// customHead(myArrayNumbers, myArrayString);

/* Tail */

export const customTail: (...T) => Array<typeof T> = (...args) => {
    let result: any[] = [];
    args.forEach(([st, ...rest]) => result.push(rest));
    return result;
};

// customTail(myArrayNumbers, myArrayString);


/* Init */

export const customInit: (...T) => Array<typeof T> = (...args) => {
    let result: any[] = [];
    args.forEach((item) => result.push(item.slice(0, item.length - 1)));
    return result;
};

// customInit(myArrayNumbers, myArrayString);

/* Last */

export const customLast: (...T) => Array<typeof T> = (...args) => {
    let result: any[] = [];
    args.forEach((item) => result.push(item.pop()))
    return result;
};

// customLast(myArrayString, myArrayNumbers);


export const arrayTest = (arr1, arr2) => {
    customHead(arr1, arr2);
    customTail(arr1, arr2);
    customInit(arr1, arr2);
    customLast(arr2, arr1);
};
