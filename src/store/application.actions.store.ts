import { ActionTree }                                                             from 'vuex';
import flow                                                                       from 'lodash-es/flow';
import {
  ApplicationState,
  RootState,
  UserServerResponse,
}                                                                                 from '@/root/root.types';
import { cCommit, cDispatch }                                                     from '@/helpers/store-helpers';
import { getUsers, getPosts }                                                     from '@/views/home/home.service';
import {
  promiseAll,
  cThen,
  cCatch, handleBasicError,
}                                                                                 from '@/helpers/promise-helpers';
import { extractDataFromAxiosResponsesArray, extractDataFromSingleAxiosResponse } from '@/helpers/axios-helpers';
import { cNegate }                                                                from '@/helpers/general-helpers';
import { createArrayWithUniqueRandomNumbersStartedFromOne }                       from '@/helpers/array/creating-array-helpers';
import {
  cGetFirstItemsOfArray,
  getArrayOfObjectPropsReducerFunction,
  getUniqueArrayValues,
}                                                                                 from '@/helpers/array/getting-values-array-helpers';
import {
  cFilter,
  cMap,
  cReduce,
  cSort,
}                                                                                 from '@/helpers/array/basic-array-helpers';
import { cCheckIfSameValueInOtherArray }                                          from '@/helpers/array/checking-values-array-helpers';
import { sortNumbersArrayAscending }                                              from '@/helpers/array/order-array-helpers';
import { cInjectGenderToUser, injectPhotoToUser }                                 from '@/helpers/user/user-helpers';
import { getGenderPromise }                                                       from '@/helpers/genderize/genderize-helpers';

export const actions: ActionTree<ApplicationState, RootState> = {
  createPostsOrder({ commit }, numberOfPosts: number): void {
    commit('setWallPostsOrder', createArrayWithUniqueRandomNumbersStartedFromOne(numberOfPosts));
  },
  async getInitialWallPosts({ state, commit }, numberOfPosts: number): Promise<void> {
    await flow([
      cGetFirstItemsOfArray(numberOfPosts),
      getPosts,
      cThen(extractDataFromSingleAxiosResponse),
      cThen(cCommit(commit, 'setWallPosts')),
      cThen(cCommit(commit, 'setNumberOfLoadedPosts', numberOfPosts)),
      cCatch(handleBasicError),
    ])(state.wallPostsOrder);
  },
  async getInitialUsers({ state, dispatch }): Promise<void> {
    await flow([
      cReduce([], getArrayOfObjectPropsReducerFunction('userId')),
      getUniqueArrayValues,
      cFilter(cNegate(cCheckIfSameValueInOtherArray({ array: state.users, arrayItemOptionalPath: 'id' }))),
      cSort(sortNumbersArrayAscending),
      getUsers,
      cThen(extractDataFromSingleAxiosResponse),
      cThen(cDispatch(dispatch, 'setUsersFromServer')),
      cCatch(handleBasicError),
    ])(state.wallPosts);
  },
  async setUsersFromServer({ commit }, users: UserServerResponse[]) {
    await flow([
      cMap(getGenderPromise),
      promiseAll,
      cThen(extractDataFromAxiosResponsesArray),
      cThen(cMap(cInjectGenderToUser(users))),
      cThen(cMap(injectPhotoToUser)),
      cThen(cCommit(commit, 'setUsers')),
      cCatch(handleBasicError),
    ])(users);
  },
};
