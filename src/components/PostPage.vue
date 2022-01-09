<template>
  <div class="post-page">
    <div class="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <span>{{ formatedPostDate }}</span>
      <hr/>
    </div>

    <div class="comments">
      <div
          v-for="commentList in commentsList"
          :id="`comment-${commentList.id}`"
          :key="commentList.id"
          class="comments__item"
      >
        <h3>{{ commentList.name }}</h3>
        <span>{{ commentList.email }}</span>
        <p>{{ formatedCommentText(commentList.body) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  data: () => ({
    post: {
     Id: 1,
     title: 'Eum et est occaecati',
     body: `Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
     Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
     Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velitullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
     Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
     Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velitullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
     Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
     Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velitullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
     `,
     postDate: new Date(),
    },
    commentsList: [
      {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
        "postId": 1,
        "id": 4,
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        "postId": 1,
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      }
    ],
  }),
  computed: {
    formatedPostDate() {
      let monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
      ]
      let date = this.post.postDate
      let day = date.getDate()
      let monthIndex = date.getMonth()
      let year = date.getFullYear()

      return `${day} ${monthNames[monthIndex]}, ${year}`
    }
  },
  methods: {
    formatedCommentText(baseString) {
      let cutNumber = 20
      let changedString = baseString[0].toUpperCase() + baseString.slice(1)
      if(changedString.length > cutNumber) {
        let shortString = changedString.slice(0, cutNumber - 1)
        shortString = shortString + '...'

        return shortString
      }
      return changedString
    },
  },
}
</script>

<style scoped lang="scss">
  .post-page {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    .comments {
      text-align: left;
      color: #7663cb;
    }
  }
</style>