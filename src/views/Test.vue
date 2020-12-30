<template>
  <div class="about">
    <h1>This is a test2 page</h1>
    <c-hello-world :msg="testMsg"
                   test="yyyy"/>

  </div>
</template>
<script lang="ts">
import cHelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';

interface TestMsg {
  value: string;
}

export default defineComponent({
  name: 'Test',
  components: {
    cHelloWorld,
  },
  setup() {
    const testMsg: TestMsg = {
      value: 'testMsg',
    };

    return {
      testMsg: testMsg.value,
    };
  },

});
</script>
