import { MutationTree }     from 'vuex';
import { ApplicationState } from '@/root/root.types';

export const mutations: MutationTree<ApplicationState> = {
  setIsHeaderVisible(state, value: boolean) {
    state.isHeaderVisible = value;
  },
};
