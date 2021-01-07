<template>
  <c-main-content>
    <div class="vHome">
      <p> Home </p>
      <el-button @click="toggleHeader">
        ToggleHeader
      </el-button>
    </div>
  </c-main-content>
</template>

<script lang="ts">
import { defineComponent }      from 'vue';
import elButton                 from 'element-plus/lib/el-button';
import cMainContent             from '@/components/view-wrapper/main-content.component.vue';
import { useApplicationHeader } from '@/hooks/application-header/useApplicationHeader.hook';

export default defineComponent({
  name: 'vHome',
  components: {
    elButton,
    cMainContent,
  },
  setup() {
    const { toggleHeader } = useApplicationHeader();

    return {
      toggleHeader,
    };
  },
});
</script>

<style scoped
       lang="scss">

@import '~element-plus/lib/theme-chalk/el-button.css';

.vHome {
  height: 220vh;
  border: 1px solid black;
}

</style>
