/* eslint-disable @typescript-eslint/no-unused-vars */

// last argument in CarriedFunction is always type of returned value
import { Commit, Dispatch } from 'vuex';

export interface CurriedFunction1<T1, R> {
  (): CurriedFunction1<T1, R>;
  (t1: T1): R;
}

export interface CurriedFunction2<T1, T2, R> {
  (t1: T1): (t2: T2) => R;
  (t1: T1, t2: T2): R;
}

export interface CurriedFunction3<T1, T2, T3, R> {
  (t1: T1): CurriedFunction2<T2, T3, R>;
  (t1: T1, t2: T2): (t3: T3) => R;
  (t1: T1, t2: T2, t3: T3): R;
}

export type CurriedDispatch<PayloadType, ReturnType> = CurriedFunction3<Dispatch, string, PayloadType, ReturnType>;
export type CurriedCommit<PayloadType> = CurriedFunction3<Commit, string, PayloadType, void>;
