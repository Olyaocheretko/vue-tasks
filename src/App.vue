<template>
  <div id="app" class="app">
<!--    <PostPage />-->
    <SignUp />
  </div>
</template>

<script>
//import PostPage from "./components/PostPage.vue"
import SignUp from "./components/SignUp.vue";

export default {
  name: 'App',
  components: {
    SignUp,
    //PostPage
  },
}
</script>

<style lang="scss">
  *, *:before, *:after {box-sizing: border-box;}
  html,body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    min-width: 320px;
    position: relative;
    color: #221f1f;
  }
  body {
    line-height: 27px;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    background-color: #f4f4f6;
  }
  .app {
    max-width: 1200px;
    padding: 0 20px;
    margin: auto;
    width: 100%;
    text-align: center;
  }
</style>