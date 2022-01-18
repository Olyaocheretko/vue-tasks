<template>
  <div class="app-button">
    <button
        class="app-button__button btn"
        @click="$emit('appButtonClick')"
    >
      Show app button message on click
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
}
</script>

<style scoped lang="scss">
  .app-button {
    margin-bottom: 20px;
    &__button {
      background: #51a0e7;
    }
  }
</style>