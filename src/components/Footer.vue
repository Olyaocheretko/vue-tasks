<template>
  <div class="footer-component">
    <div v-html="linkToMyProfile"></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    linkToMyProfile: '<p style="text-align: left;" >Created by <a href="https://github.com/Olyaocheretko" class="link">me</a></p>'
  }),
}
</script>