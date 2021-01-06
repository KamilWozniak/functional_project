import 'vuex';
import { mount } from '@vue/test-utils';
import Root      from '@/root/root.vue';

jest.mock('vuex', () => ({
  // eslint-disable-next-line global-require
  useStore: () => require('@/store/application.state.store'),
}));
describe('Root', () => {
  let wrapper!: any;
  beforeEach(() => {
    wrapper = mount(Root, {
      shallow: true,
      global: {
        stubs: [ 'router-view' ],
      },
    });
  });

  it('should render div with application class', () => {
    expect(wrapper.classes())
      .toContain('application');
  });
});
