<template>
  <div class="header-component">
    <div v-html="logoHtml"></div>
    <button
        class="header-component__button btn"
        @click="$emit('loginButtonClick')"
    >
      Log in
    </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    logoHtml:  '<a href=# style="display: inline-block; margin-right: 5px;"><img style="max-width: 150px;" src = "/img/logo.bcc75c20.png" alt="Logo"></a>',
  }),
}
</script>

<style scoped lang="scss">
  .header-component {
    line-height: 0;
    &__button {
      background: #51a0e7;
      max-height: 50px;
    }
  }
</style>