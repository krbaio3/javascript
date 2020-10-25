// String checking if is empty, null or undefined
export const isEmpty: (str: string) => boolean = (str: string) =>
    !str || str.length === 0;

// String checking if is blank, or contains only white-space, null or undefined
export const isBlank: (str: string) => boolean = (str: string) =>
    !str.trim() || /^\s*$/.test(str.trim()) || str.trim().length === 0;

// String contains blank
export const containBlank: (str: string) => boolean = (str: string) =>
    !(isEmpty(str) && str.length === str.trim().length);
