<template>
  <div class="c-post">
    <c-user-details :user="user">
      yesterday at 8am
    </c-user-details>
    <p class="c-post__content">{{ post.body }}</p>
    <div class="c-post__action-buttons">
      <span>Like</span>
      <span>Comment</span>
    </div>
    <p class="c-post__comment-section">commentSection</p>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  PropType,
}                     from 'vue';
import cUserDetails   from '@/components/user-details/user-details.component.vue';
import { Post, User } from '@/root/root.types';
import { useUsers }   from '@/hooks/users/useUsers.hook';

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
  setup(props) {
    const { getUserById } = useUsers();
    const user: ComputedRef<User | undefined> = computed(() => getUserById(props.post.userId));

    return {
      user,
    };
  },
});
</script>

<style scoped
       lang="scss">

$post-content-padding-left: 5rem;

.c-post {
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  max-width: 100rem;
  min-height: 20rem;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: white;

  &__content {
    padding-left: $post-content-padding-left;
  }

  &__comment-section {
    padding-left: $post-content-padding-left;
  }

  &__action-buttons {
    height: 3rem;
    border-top: 1px solid var(--grey-500);
    border-bottom: 1px solid var(--grey-500);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>
