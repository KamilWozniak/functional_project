<template>
  <div v-if="user"
       class="c-user-details">

    <div class="c-user-details__image"
         :style="`background-image: url(${user.photoUrl})`"></div>

    <div class="c-user-details__description-wrapper">
      <span class="c-user-details__description-wrapper__name">
        {{ user.name }}
      </span>
      <div class="c-user-details__description-wrapper__additional-details">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { User }                      from '@/root/root.types';

export default defineComponent({
  name: 'cUserDetails',
  props: {
    user: {
      type: Object as PropType<User>,
      required: false,
    },
  },
});
</script>

<style scoped
       lang="scss">

$user-image-width: 5rem;
$user-image-height: 5rem;

.c-user-details {
  display: flex;

  &__image {
    width: $user-image-width;
    height: $user-image-height;
    background-color: var(--grey-500);
    background-repeat: no-repeat;
    background-size: $user-image-height $user-image-width;
    cursor: pointer;
  }

  &__description-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-top: 1rem;

    &__name {
      font-weight: bold;
      cursor: pointer;
      margin-bottom: .4rem;

      &:hover {
        text-decoration: underline;
      }
    }

    &__additional-details {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--grey-800)
    }
  }
}
</style>
