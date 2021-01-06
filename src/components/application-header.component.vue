<template>
  <div class="c-application-header"
        :class="{'c-application-header--hidden': !isHeaderVisible}">

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
  width: 100%;
  height: 5rem;
  background-color: red;

  &--hidden {
    height: 0;
  }
}
</style>
