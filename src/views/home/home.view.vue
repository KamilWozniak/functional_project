<template>
  <c-main-content>
    <div class="vHome">
      <p> Home </p>
      <el-button @click="toggleHeader">
        ToggleHeader
      </el-button>
      <c-post :key="id"
              v-for="(post, id) in wallPosts" />
    </div>
  </c-main-content>
</template>

<script lang="ts">
import { defineComponent, onMounted }             from 'vue';
import elButton                                   from 'element-plus/lib/el-button';
import { InitialNumberOfPosts, MaxNumberOfPosts } from '@/helpers/vairables';
import { useApplicationHeader }                   from '@/hooks/application-header/useApplicationHeader.hook';
import { useWallPosts }                           from '@/hooks/wall-posts/useWallPosts.hook';
import cMainContent                               from '@/components/view-wrapper/main-content.component.vue';
import cPost                                      from '@/components/post/post.component.vue';

export default defineComponent({
  name: 'vHome',
  components: {
    elButton,
    cMainContent,
    cPost,
  },
  setup() {
    const { toggleHeader } = useApplicationHeader();
    const { preparePostsToDisplayOnWall, createPostsOrder, wallPosts } = useWallPosts();

    onMounted(async () => {
      createPostsOrder(MaxNumberOfPosts);
      await preparePostsToDisplayOnWall(InitialNumberOfPosts);
    });

    return {
      toggleHeader,
      wallPosts,
    };
  },
});
</script>

<style scoped
       lang="scss">

@import '~element-plus/lib/theme-chalk/el-button.css';

.vHome {
  min-height: 10rem;
  border: 1px solid black;
}

</style>
