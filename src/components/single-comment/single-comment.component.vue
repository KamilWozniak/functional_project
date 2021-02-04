<template>
  <div class="c-single-comment">
    <c-user-details :user="user"/>
    <p>{{comment.name}}</p>
  </div>
</template>

<script lang="ts">
import {
  computed, ComputedRef,
  defineComponent,
  PropType,
}                            from 'vue';
import { PostComment, User } from '@/root/root.types';
import cUserDetails          from '@/components/user-details/user-details.component.vue';
import { useUsers }          from '@/hooks/users/useUsers.hook';

export default defineComponent({
  name: 'cSingleComment',
  components: {
    cUserDetails,
  },
  props: {
    comment: {
      type: Object as PropType<PostComment>,
      required: true,
    },
  },
  setup(props) {
    const { getUserById } = useUsers();
    const user: ComputedRef<User | undefined> = computed(() => getUserById(props.comment.userId));
    return {
      user,
    };
  },
});
</script>

<style scoped
       lang="scss">

</style>
