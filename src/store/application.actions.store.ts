import { ActionTree }                         from 'vuex';
import flow                                   from 'lodash-es/flow';
import { ApplicationState, RootState }        from '@/root/root.types';
import {
  cMap,
  createArrayWithUniqueRandomNumbersStartedFromOne,
  cGetFirstItemsOfArray,
}                                             from '@/helpers/array-helpers';
import { cCommit }                            from '@/helpers/store-helpers';
import { cGetSinglePostById }                 from '@/views/home/home.service';
import {
  promiseAll,
  cThen,
  cCatch,
}                                             from '@/helpers/promise-helpers';
import { extractDataFromAxiosResponsesArray } from '@/helpers/axios-helpers';

export const actions: ActionTree<ApplicationState, RootState> = {
  createPostsOrder({ commit }, numberOfPosts: number): void {
    commit('setWallPostsOrder', createArrayWithUniqueRandomNumbersStartedFromOne(numberOfPosts));
  },
  async getInitialWallPosts({ state, commit }, numberOfPosts: number): Promise<void> {
    await flow([
      cGetFirstItemsOfArray(numberOfPosts),
      cMap(cGetSinglePostById),
      promiseAll,
      cThen(extractDataFromAxiosResponsesArray),
      cThen(cCommit(commit, 'setWallPosts')),
      cThen(() => commit('setNumberOfLoadedPosts', numberOfPosts)),
      cCatch((e: Error) => console.error(e)),
    ])(state.wallPostsOrder);
  },
};
