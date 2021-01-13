<template>
  <div class="c-post">
    <c-user-details />
    <p>{{post.body}}</p>
    <p>commentSection</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import cUserDetails        from '@/components/user-details/user-details.component.vue';
import { Post }            from '@/root/root.types';

export default defineComponent({
  name: 'cPost',
  components: {
    cUserDetails,
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped
       lang="scss">

.c-post {
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  max-width: 100rem;
  min-height: 20rem;
  border: 1px solid red;
}
</style>
