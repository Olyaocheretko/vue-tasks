<template>
  <div class="post-сard">
    <h2 class="post-сard__title title">{{ post.title }}</h2>
    <p class="post-сard__body">{{ formattedText(post.body) }}</p>
    <a href="#" class="post-сard__button link">Read more</a>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  data: () => ({
    post: {
      userId: 1,
      id: 2,
      title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!'
    },
  }),
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