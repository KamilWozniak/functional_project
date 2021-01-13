import curry from 'lodash-es/curry';

export const cThen = curry((fn: (...arg: any) => any, promise: Promise<any>) => promise.then(fn));
export const cCatch = curry((fn: (error: any) => any, promise: Promise<any>) => promise.catch(fn));
export const promiseAll = (promisesArray: Promise<any>[]) => Promise.all(promisesArray);
