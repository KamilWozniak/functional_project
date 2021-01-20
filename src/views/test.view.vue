<template>
  <c-main-content>
    <div class="vHome">
      <p> Test </p>

      <router-link to="/">
        Go Home
      </router-link>

    </div>
  </c-main-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import cMainContent        from '@/components/main-content/main-content.component.vue';

export default defineComponent({
  name: 'vTest',
  components: {
    cMainContent,
  },
});
</script>

<style scoped
       lang="scss">

</style>
