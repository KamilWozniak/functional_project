import { cloneDeep } from 'lodash-es';

export const prop = (value: any, path = '') => {
  if (!path || typeof value !== 'object') { // DANGER!! beside object literals, many other instances have "typeof object"
    return value;
  }
  return value[ path ];
};

export const createNewExtendedObject = <T, S>(key: string, value: T, objectToExtend: S) => cloneDeep({ ...objectToExtend, [ key ]: value }) as any;
