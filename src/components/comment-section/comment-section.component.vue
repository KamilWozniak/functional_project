<template>
  <div class="c-comment-section">
    <c-single-comment :key="index"
                      :comment="comment"
                      v-for="(comment, index) in comments" />

    <p> write a comment input</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
}                      from 'vue';
import { PostComment } from '@/root/root.types';
import cSingleComment  from '@/components/single-comment/single-comment.component.vue';

export default defineComponent({
  name: 'cCommentSection',
  components: {
    cSingleComment,
  },
  props: {
    comments: {
      type: Array as PropType<PostComment[]>,
      required: true,
    },
  },
  setup() {
    // todo: diversify number of comments in each post in db.json
    return {};
  },
});
</script>

<style scoped
       lang="scss">

</style>
