<template>
  <div class="application">
    <c-application-header :is-header-visible="isHeaderVisible" />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue';
import { useStore }                               from 'vuex';
import cApplicationHeader                         from '@/components/application-header/application-header.component.vue';

export default defineComponent({
  name: 'root',
  components: {
    cApplicationHeader,
  },
  setup() {
    const { state } = useStore();
    const isHeaderVisible: ComputedRef<boolean> = computed(() => state.isHeaderVisible);

    return {
      isHeaderVisible,
    };
  },
});
</script>

<style lang="scss">
@import '~@/styles/global.scss';
</style>

<style lang="scss"
       scoped>

.application {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vh;
}

</style>
