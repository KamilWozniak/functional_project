import { ActionTree }                                                      from 'vuex';
import flow                                                                from 'lodash-es/flow';
import {
  ApplicationState,
  Post,
  RootState,
  User,
  UserServerResponse,
}                                                                          from '@/root/root.types';
import { cCommit, cDispatch }                                              from '@/helpers/store-helpers';
import { getUsers, getPosts }                                              from '@/views/home/home.service';
import {
  cThen,
  cCatch, handleBasicError,
}                                                                          from '@/helpers/promise-helpers';
import { extractDataFromSingleAxiosResponse }                              from '@/helpers/axios-helpers';
import { cNegate }                                                         from '@/helpers/general-helpers';
import { createArrayWithUniqueRandomNumbersStartedFromOne }                from '@/helpers/array/creating-array-helpers';
import {
  cGetFirstItemsOfArray,
  getUniqueArrayValues,
}                                                                          from '@/helpers/array/getting-values-array-helpers';
import {
  cConcat,
  cFilter,
  cMap,
  cReduce,
  cSort,
}                                                                          from '@/helpers/array/basic-array-helpers';
import { cCheckIfSameValueInOtherArray }                                   from '@/helpers/array/checking-values-array-helpers';
import { sortNumbersArrayAscending }                                       from '@/helpers/array/order-array-helpers';
import { cInjectGenderToUser, getAllUserIdsUsedInPost, injectPhotoToUser } from '@/helpers/user/user-helpers';
import { getUserGenders }                                                  from '@/helpers/genderize/genderize-helpers';

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
  async getUsers({ state, dispatch }, ids: number[]): Promise<void> {
    await flow([
      getUniqueArrayValues,
      cFilter(cNegate(cCheckIfSameValueInOtherArray({ array: state.users, arrayItemOptionalPath: 'id' }))),
      cSort(sortNumbersArrayAscending),
      getUsers,
      cThen(extractDataFromSingleAxiosResponse),
      cThen(cDispatch(dispatch, 'setUsersFromServer')),
      cCatch(handleBasicError),
    ])(ids);
  },
  async getInitialUsers({ state, dispatch }): Promise<void> {
    await flow([
      cReduce([], (acc: number[], curr: Post) => [ ...acc, ...getAllUserIdsUsedInPost(curr) ]),
      cDispatch(dispatch, 'getUsers'),
    ])(state.wallPosts);
  },
  addUsersToUsersList({ state, commit }, users: User[]): void {
    flow([
      cFilter(cNegate(cCheckIfSameValueInOtherArray({ array: state.users, arrayItemOptionalPath: 'id', valueOptionalPath: 'id' }))),
      cConcat(state.users),
      cCommit(commit, 'setUsers'),
    ])(users);
  },
  async setUsersFromServer({ dispatch }, users: UserServerResponse[]): Promise<void> {
    await flow([
      getUserGenders,
      cThen(cMap(cInjectGenderToUser(users))),
      cThen(cMap(injectPhotoToUser)),
      cThen(cDispatch(dispatch, 'addUsersToUsersList')),
      cCatch(handleBasicError),
    ])(users);
  },
};
