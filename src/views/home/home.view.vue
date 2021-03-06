<template>
  <c-main-content>
    <div class="v-home">
      <div class="v-home__posts-container">

        <c-post :key="id"
                :post="post"
                v-for="(post, id) in wallPosts" />
      </div>
    </div>
  </c-main-content>
</template>

<script lang="ts">
import { defineComponent, onMounted }             from 'vue';
import { InitialNumberOfPosts, MaxNumberOfPosts } from '@/helpers/vairables';
import { useApplicationHeader }                   from '@/hooks/application-header/useApplicationHeader.hook';
import { useWallPosts }                           from '@/hooks/wall-posts/useWallPosts.hook';
import cMainContent                               from '@/components/main-content/main-content.component.vue';
import cPost                                      from '@/components/post/post.component.vue';
import { useUsers }                               from '@/hooks/users/useUsers.hook';
import { IO }                                     from '@/helpers/monads/IO.monad';
import { cThen }                                  from '@/helpers/promise-helpers';

export default defineComponent({
  name: 'vHome',
  components: {
    cMainContent,
    cPost,
  },
  setup() {
    const { toggleHeader } = useApplicationHeader();
    const { wallPosts, cCreatePostsOrder, cGetInitialWallPosts } = useWallPosts();
    const { getInitialUsers } = useUsers();

    onMounted(() => {
      if (!wallPosts.value.length) {
        IO.of(MaxNumberOfPosts)
          .map(cCreatePostsOrder)
          .injectValue(InitialNumberOfPosts)
          .map(cGetInitialWallPosts)
          .map(cThen(getInitialUsers))
          .run();
      }
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

.v-home {
  min-height: 10rem;
  display: flex;
  justify-content: center;

  &__posts-container {
    display: flex;
    flex-direction: column;
  }

}

</style>
