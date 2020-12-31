<template>
  <div class="application">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~@/styles/global.scss';
</style>

<style lang="scss"
       scoped>

.application {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vh;
}

</style>
