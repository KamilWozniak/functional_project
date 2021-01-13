import { useStore }              from 'vuex';
import { computed, ComputedRef } from 'vue';
import { Post }                  from '@/root/root.types';

interface UseWallPosts {
  wallPosts: ComputedRef<Post[]>;
  createPostsOrder: (numberOfPosts: number) => void;
  getInitialWallPosts: (numberOfPosts: number) => Promise<void>;
}

export const useWallPosts = (): UseWallPosts => {
  const { dispatch, state } = useStore();
  return {
    wallPosts: computed(() => state.wallPosts),
    async createPostsOrder(numberOfPosts: number) {
      await dispatch('createPostsOrder', numberOfPosts);
    },
    async getInitialWallPosts(numberOfPosts: number): Promise<void> {
      await dispatch('getInitialWallPosts', numberOfPosts);
    },
  };
};
