<template>
  <div class="c-user-details">
    <div class="c-user-details__image"></div>
    <div class="c-user-details__description-wrapper">
      <span class="c-user-details__description-wrapper__name">userName</span>
      <div class="c-user-details__description-wrapper__additional-details">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cUserDetails',
});
</script>

<style scoped
       lang="scss">

.c-user-details {
  display: flex;

  &__image {
    width: 5rem;
    height: 5rem;
    background-color: #606266;
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
