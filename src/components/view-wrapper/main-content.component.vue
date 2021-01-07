<template>
  <main :class="{'c-main-content--hidden-header': !isHeaderVisible}"
        class="c-main-content">

    <slot />
  </main>
</template>

<script>
import { defineComponent }      from 'vue';
import { useApplicationHeader } from '@/hooks/application-header/useApplicationHeader.hook';

export default defineComponent({
  name: 'cMainContent',
  setup() {
    const { isHeaderVisible } = useApplicationHeader();
    return {
      isHeaderVisible,
    };
  },
});
</script>

<style scoped
       lang="scss">

.c-main-content {
  display: flex;
  flex-direction: column;
  flex: auto;
  padding: var(--view-padding-vertical) var(--view-padding-horizontal);
  margin-top: var(--application-header-height);
  min-height: calc(100vh - var(--application-header-height));

  &--hidden-header {
    min-height: 100vh;
    margin-top: 0;
  }
}
</style>
