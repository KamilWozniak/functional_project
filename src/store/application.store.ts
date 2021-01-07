import { createStore } from 'vuex';
import { state }       from '@/store/application.state.store';
import { mutations }   from '@/store/application.mutations.store';
import { actions }     from '@/store/application.actions.store';

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  },
});
