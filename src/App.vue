<template>
  <div id="app" class="app">
    <div class="app__top">
      <Header
          @loginButtonClick = "loginButtonClick"
      />
      <LoginPopUp
          v-if="showLoginPopUp"
          @closePopUp ="closePopUp"
      />
    </div>

    <div class="app__body">
      <PostPage />
      <SignUp />
      <PostList />
      <AppPopUp v-if="showPopUpEvent"
                @closePopUpEvent = "closePopUpEvent"
                @backPopUpEvent = "showMessage(backMessage)"
                @continuePopUpEvent = "showMessage(continueMessage)"
      />
      <AppButton
          appButtonText = "Save"
          @appButtonClick = "showMessage('appButtonText')"
      />
    </div>

    <div class="app__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import PostPage from "./components/PostPage.vue"
import SignUp from "./components/SignUp.vue";
import PostList from "./components/PostList.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    PostPage,
    SignUp,
    PostList,
    Header,
    Footer,
  },
  data: () => ({
    continueMessage: 'continuePopUpEvent',
    backMessage: 'backPopUpEvent',
    showPopUpEvent: true,
    showLoginPopUp: false,
  }),
  methods: {
    closePopUpEvent() {
      this.showPopUpEvent = false
      console.log('closePopUpEvent')
    },
    showMessage(message) {
      console.log(message)
    },
    loginButtonClick() {
      this.showLoginPopUp = true
    },
    closePopUp() {
      this.showLoginPopUp = false
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Lato&display=swap');
  *, *:before, *:after {box-sizing: border-box;}
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }
  * {
    border: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size:inherit;
    font-weight: inherit;
  }
  a, a:visited, a:hover {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  button::-moz-focus-inner {
    padding:0;
    border:0;
  }
  select {
    text-align: right;
    font-size: 14px;
    color: inherit;
  }
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
    min-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    padding: 20px;
    margin: auto;
    width: 100%;
    text-align: center;
    &__top .header-component{
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    &__body {
      flex: 1 1 auto;
      padding: 20px;
      margin-bottom: 20px;
      background: #fff;
      border-radius: 10px;
    }
  }
  .btn {
    display:inline-block;
    color: #fff;
    line-height: 40px;
    font-size: 17px;
    padding: 5px 20px;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    transition: all 0.6s ease 0s;
    border-radius: 5px;
    &:hover {
      opacity: 0.7;
    }
    &-close {
      padding: 0;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #e1e5e7;
      line-height: 0;
      color: #565454;
      z-index: 7;
    }
    &-white {
      background-color: #ffffff;
      color: #6c96bd;
      border: 2px solid #6c96bd;
      width: 100%;
      &:hover {
        background-color: #6c96bd;
        color:#ffffff;
        opacity: 1;
      }
    }
    @media (max-width:767px) {
      line-height: 25px;
    }
  }
  .link {
    display:inline-block;
    color: #757ed7;
    line-height: 40px;
    font-size: 17px;
    letter-spacing: 0.7px;
    transition: all 0.6s ease 0s;
    border-radius: 5px;
    &:hover {
      opacity: 0.5;
    }
  }
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0006;
    z-index: 5;
    &__body {
      position: absolute;
      padding: 40px 20px;
      min-width: 310px;
      min-height: 200px;
      top: 50%;
      left: 50%;
      z-index: 6;
      overflow: auto;
      border-radius: 5px;
      transform: translate(-50%, -50%);
    }
  }
  .title {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }
  .subtitle {
    font-weight: 600;
  }
  .text-gray {
    color: #545353;
    font-weight: 700;
    text-align: left;
  }
</style>