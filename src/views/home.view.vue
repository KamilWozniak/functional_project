<template>
  <div class="vHome">
    <p> Home </p>
    <el-button @click="toggleHeader">
      ToggleHeader
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent }      from 'vue';
import elButton                 from 'element-plus/lib/el-button';
import { useApplicationHeader } from '@/hooks/application-header/useApplicationHeader.hook';

export default defineComponent({
  name: 'vHome',
  components: {
    elButton,
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
  min-height: 100vh;
  border: 1px solid black;
}

</style>
