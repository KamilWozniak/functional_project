import { MutationTree }                 from 'vuex';
import { ApplicationState, Post, User } from '@/root/root.types';

export const mutations: MutationTree<ApplicationState> = {
  setIsHeaderVisible(state, value: boolean) {
    state.isHeaderVisible = value;
  },
  setWallPostsOrder(state, orderArray: number[]): void {
    state.wallPostsOrder = orderArray;
  },
  setWallPosts(state, posts: Post[]): void {
    state.wallPosts = [ ...state.wallPosts, ...posts ];
  },
  setNumberOfLoadedPosts(state, numberOfPosts: number): void {
    state.numberOfLoadedPosts += numberOfPosts;
  },
  setUsers(state, users: User[]): void {
    state.users = users;
  },
};
