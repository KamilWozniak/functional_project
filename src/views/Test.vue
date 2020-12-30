<template>
  <div class="about">
    <h1>This is a test2 page</h1>
    <c-hello-world :msg="testMsg"
                   test="yyyy" />
    messageFromStore: {{ testMsgStore }}

  </div>
</template>
<script lang="ts">
import cHelloWorld         from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';
import { useStore }        from 'vuex';

interface TestMsg {
  value: string;
}

export default defineComponent({
  name: 'Test',
  components: {
    cHelloWorld,
  },
  setup() {
    const store = useStore();
    const testMsg: TestMsg = {
      value: 'testMsg',
    };

    return {
      testMsg: testMsg.value,
      testMsgStore: store.state.testState,
    };
  },

});
</script>

<style lang="scss"
       scoped>

</style>
