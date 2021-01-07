<template>
  <div :class="{'c-application-header--hidden': !isHeaderVisible}"
       class="c-application-header">

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cApplicationHeader',
  props: {
    isHeaderVisible: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped
       lang="scss">

.c-application-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: var(--application-header-height);
  height: var(--application-header-height);
  box-shadow: 0 -.1rem .5rem var(--grey-800);
  background-color: var(--facebook-blue);

  &--hidden {
    height: 0;
  }
}
</style>
