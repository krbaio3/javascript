/* Head */

export const customHead: (...T) => Array<typeof T> = (...args) => {
    const result: any[] = [];
    args.forEach(([st]) => result.push(st));
    return result;
};

// customHead(myArrayNumbers, myArrayString);

/* Tail */

export const customTail: (...T) => Array<typeof T> = (...args) => {
    const result: any[] = [];
    args.forEach(([, ...rest]) => result.push(rest));
    return result;
};

// customTail(myArrayNumbers, myArrayString);

/* Init */

export const customInit: (...T) => Array<typeof T> = (...args) => {
    const result: any[] = [];
    args.forEach((item) => result.push(item.slice(0, item.length - 1)));
    return result;
};

// customInit(myArrayNumbers, myArrayString);

/* Last */

export const customLast: (...T) => Array<typeof T> = (...args) => {
    const result: any[] = [];
    args.forEach((item) => result.push(item.pop()));
    return result;
};

// customLast(myArrayString, myArrayNumbers);
