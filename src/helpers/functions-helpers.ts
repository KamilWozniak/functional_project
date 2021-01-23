export const liftFunctionCallToFunction = (fn: any, args: any[] = []) => () => fn(...args);
