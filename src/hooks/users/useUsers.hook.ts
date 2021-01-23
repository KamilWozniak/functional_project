import { useStore }              from 'vuex';
import { computed, ComputedRef } from 'vue';
import { User }                  from '@/root/root.types';
import { isEqual }               from 'lodash-es';

interface UseUsers {
  users: ComputedRef<User[]>;
  getInitialUsers: () => Promise<void>;
  getUserById: (id: number) => User | undefined;
}

export const useUsers = (): UseUsers => {
  const { dispatch, state } = useStore();
  return {
    users: computed(() => state.users),
    async getInitialUsers(): Promise<void> {
      await dispatch('getInitialUsers');
    },
    getUserById(id: number): User | undefined {
      return state.users.find((user: User) => isEqual(user.id, id));
    },
  };
};
