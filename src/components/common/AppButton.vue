<template>
  <div class="app-button">
    <button
        class="app-button__button btn"
        @click="$emit('appButtonClick')"
    >
      {{ appButtonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  props: ['appButtonText'],
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