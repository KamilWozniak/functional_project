<template>
  <div class="vHome">
    <p> Home </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vHome',
  props: {
    msg: String,
  },
});
</script>

<style scoped
       lang="scss">

.vHome {

}

</style>
