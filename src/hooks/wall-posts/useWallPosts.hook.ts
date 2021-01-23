import { useStore }              from 'vuex';
import { computed, ComputedRef } from 'vue';
import { Post }                  from '@/root/root.types';
import { curry }                 from 'lodash-es';
import { CurriedFunction1 }      from '@/types';

interface UseWallPosts {
  wallPosts: ComputedRef<Post[]>;
  cCreatePostsOrder: CurriedFunction1<number, void>;
  cGetInitialWallPosts: CurriedFunction1<number, Promise<void>>;
}

export const useWallPosts = (): UseWallPosts => {
  const { dispatch, state } = useStore();

  const wallPosts: ComputedRef<Post[]> = computed(() => state.wallPosts);

  const createPostsOrder = (numberOfPosts: number): void => {
    dispatch('createPostsOrder', numberOfPosts);
  };
  const cCreatePostsOrder: CurriedFunction1<number, void> = curry(createPostsOrder);

  const getInitialWallPosts = async (numberOfPosts: number): Promise<void> => {
    await dispatch('getInitialWallPosts', numberOfPosts);
  };
  const cGetInitialWallPosts: CurriedFunction1<number, Promise<void>> = curry(getInitialWallPosts);

  return {
    wallPosts,
    cCreatePostsOrder,
    cGetInitialWallPosts,
  };
};
