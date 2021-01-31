import { isFunction } from 'lodash-es';

export class IO {
  private effect!: Function;

  constructor(effect: Function) {
    if (!isFunction(effect)) {
      throw new Error('IO Usage: Function required');
    }
    this.effect = effect;
  }

  static of(value: any) {
    return new IO(() => value);
  }

  static from(fn: Function) {
    return new IO(fn);
  }

  injectValue(value: any) {
    return new IO(() => {
      this.effect();
      return value;
    });
  }

  map(fn: Function) {
    return new IO(() => fn(this.effect()));
  }

  flatMap(fn: Function) {
    return fn(this.effect());
  }

  run() {
    return this.effect();
  }
}
