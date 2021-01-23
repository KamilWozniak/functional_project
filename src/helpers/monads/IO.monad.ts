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

// type Effect<T> = () => T
//
// export class IO<A> {
//   private effect: Effect<A>;
//
//   constructor(effect: Effect<A>) {
//     this.effect = effect;
//   }
//
//   static of<T>(val: T) {
//     return new IO(() => val);
//   }
//
//   map<B>(f: (val: A) => B): IO<B> {
//     return new IO(() => f(this.effect()));
//   }
//
//   flatMap<B>(f: any): IO<B> {
//     return new IO(() => f(this.effect()).effect());
//   }
//
//   eval() {
//     return this.effect();
//   }
// }
