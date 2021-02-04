import { curry } from 'lodash-es';

export const logAndPass = (description: string, value: any): any => {
  console.log(description, value);
  return value;
};
export const cLogAndPass = curry(logAndPass);

export const cNegate = curry((fn: any, value: any) => !fn(value));
