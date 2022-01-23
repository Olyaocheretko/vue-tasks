<template>
  <div class="post-сard" v-if="post">
    <h2 class="post-сard__title title">{{ post.title }}</h2>
    <p class="post-сard__body">{{ formattedText(post.body) }}</p>
    <a href="#" class="post-сard__button link">Read more</a>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true,
      default: function () {
        return {
          userId:1,
          id:1,
          title: 'Some default title',
          body: 'Some default text'
        }
      },
      validator: function(value) {
        return Boolean(value.title.length && value.body.length)
      }
    },
  },
  methods: {
    formattedText(baseString) {
      let cutNumber = 120
      if(baseString.length > cutNumber) {
        let shortString = baseString.slice(0, cutNumber)
        shortString = shortString + '...'

        return shortString
      }

      return baseString
    },
  },
}
</script>

<style scoped lang="scss">
  .post-сard {
    text-align: left;
    &__title {
      margin-bottom: 10px;
    }
  }
</style>