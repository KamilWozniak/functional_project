import { useStore } from 'vuex';
import { computed, ComputedRef } from 'vue';

interface UseApplicationHeader {
  toggleHeader: () => void;
  isHeaderVisible: ComputedRef<boolean>;
}

export const useApplicationHeader = (): UseApplicationHeader => {
  const { state, commit } = useStore();
  return {
    isHeaderVisible: computed((): boolean => state.isHeaderVisible),
    toggleHeader(): void {
      commit('setIsHeaderVisible', !state.isHeaderVisible);
    },
  };
};
