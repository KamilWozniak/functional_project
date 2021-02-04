import { Commit, Dispatch }               from 'vuex';
import { curry }                          from 'lodash-es';
import { CurriedCommit, CurriedDispatch } from '@/types';

export const curryableDispatch = async (dispatch: Dispatch, type: string, payload: any): Promise<void> => {
  await dispatch(type, payload);
};
export const cDispatch: CurriedDispatch<any, void | Promise<void>> = curry(curryableDispatch);

export const curryableCommit = (commit: Commit, type: string, payload: any): void => {
  commit(type, payload);
};
export const cCommit: CurriedCommit<any> = curry(curryableDispatch);
