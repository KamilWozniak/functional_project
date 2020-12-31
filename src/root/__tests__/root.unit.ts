import { mount, VueWrapper } from '@vue/test-utils';
import Root                  from '@/root/root.vue';

describe('Root', () => {
  const wrapper: VueWrapper<any> = mount(Root, {
    shallow: true,
    global: {
      stubs: [ 'router-view' ],
    },
  });

  it('should render div with application class', () => {
    expect(wrapper.classes())
      .toContain('application');
  });
});
