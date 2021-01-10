<template>
 <div class="c-post">
   <c-user-details />
   <p>post content</p>
   <p>commentSection</p>
 </div>
</template>

<script>
import { defineComponent } from 'vue';
import cUserDetails from '@/components/user-details/user-details.component.vue';

export default defineComponent({
  name: 'cPost',
  components: {
    cUserDetails,
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
