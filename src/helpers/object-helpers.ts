import { cloneDeep, curry, property } from 'lodash-es';

export const propOrValue = (value: any, path = ''): any => {
  if (!path || typeof value !== 'object') { // DANGER!! beside object literals, many other instances have "typeof object"
    return value;
  }
  return value[ path ];
};

const prop = (path: string, value: any): any => property(path)(value);
export const cProp = curry(prop);

export const createNewExtendedObject = <T, S>(key: string, value: T, objectToExtend: S): Record<string, S | T> => cloneDeep({ ...objectToExtend, [ key ]: value });
