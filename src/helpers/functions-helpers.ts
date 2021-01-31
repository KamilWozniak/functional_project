export const liftFunctionCallToFunction = (fn: Function, args: any[] = []) => () => fn(...args);

// important: do not curry this function. curry doesn't work with spread
export const reverseArgs = (fn: Function): Function => (...args: any[]): any => fn(...args.reverse());
