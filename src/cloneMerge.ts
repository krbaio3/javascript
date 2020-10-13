/* Clone */

const clone = (source, ...args) => Object.assign(args[0] == null ? {} : args[0], source);

/* Merge */

const merge = (target, source) => clone(target, source);

export { clone, merge };
