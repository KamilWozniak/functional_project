import { useStore } from 'vuex';

interface UseApplicationHeader {
  toggleHeader: () => void;
}

export const useApplicationHeader = (): UseApplicationHeader => {
  const { state, commit } = useStore();
  return {
    toggleHeader(): void {
      commit('setIsHeaderVisible', !state.isHeaderVisible);
    },
  };
};
