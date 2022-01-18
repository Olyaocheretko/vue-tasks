<template>
  <div class="login popup">
    <div class="login__body popup__body">
      <div id="tabs" class="tabs _tabs">
        <nav class="tabs__nav">
          <div
              class="tabs__button _tabs-button"
              @click="signIn = true"
              :class = "[signIn ? '_active' : '']"
          >
            Sign In
          </div>
          <div
              class="tabs__button _tabs-button"
              @click="signIn = false"
              :class = "[!signIn ? '_active' : '']"
          >
            Sign Up
          </div>
        </nav>

        <div class="tabs__body">
            <keep-alive>
              <component :is="currentTabComponent" />
            </keep-alive>
        </div>
      </div>

      <button
          class="login__button-close btn-close"
          @click="$emit('closePopUp')"
      >
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPopUp',
  components: {
    LoginSignIn: () => import("./LoginSignIn.vue"),
    LoginSignUp: () => import("./LoginSignUp.vue"),
  },
  data: () => ({
    signIn: true,
  }),
  computed: {
    currentTabComponent() {
      if(this.signIn) {
        return 'LoginSignIn'
      }
      return 'LoginSignUp'
    },
  },
}
</script>

<style scoped lang="scss">
  .login {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    &__body {
      max-width: 600px;
      padding: 50px 10px 0;
      margin: auto;
      width: 100%;
    }
    &__button-close {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .tabs {
    &__nav {
      display: flex;
    }
    &__button {
      margin-right: 1px;
      padding: 10px;
      flex: 0 1 50%;
      font-size: 1.1em;
      background-color: #6c96bd;
      transition: background-color 0.5s ease 0s;
      color: #fff;
      text-align: center;
      border-radius: 10px 10px 0 0;
      position: relative;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &::after {
        content: '';
        position: absolute;
        right: 50%;
        width: 0;
        height: 1px;
        background-color: #fff;
        bottom: 10px;
        transition: all 0.5s ease 0s;
      }
      &:hover::after {
        right: 35%;
        width: 30%;
        @media (max-width: 767px) {
          right: 30%;
          width: 40%;
        }
        @media (max-width: 540px) {
            right: 20%;
            width: 60%;
        }
      }
      &._active {
        background-color: #3574ad;
      }
    }
    &__body {
      padding: 50px;
      box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.3);
      background-color: #ffffff;
      @media (max-width: 540px) {
        padding: 30px 20px;
      }
    }
  }
</style>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 307px;
    @media (max-width: 540px) {
      min-height: 295px;
    }
    &__item {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
      &:last-of-type {
        margin-bottom: 30px;
        flex: 1 1 auto;
      }
    }
    &__label {
      margin-bottom: 2px;
      font-size: 18px;
    }
    &__input {
      display: block;
      width: 100%;
      height: 40px;
      padding: 0 10px;
      border: 1px solid #eeebeb;
      background-color: #d8e2ef;
      font-weight: 500;
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.5px;
      border-radius: 5px;
      &:focus {
        border: 1px solid #3574ad;
      }
    }
  }
  .message-block {
    margin: 30px 0 0;
    border: none;
    color: #fff;
    min-height: 40px;
    font-size: 16px;
    &__error, .message-block__error:hover {
      background-color: #c78585;
    }
    &__welcome, .message-block__welcome:hover {
      background-color: #60b46c;
      min-height: 80px;
      font-size: 18px;
    }
  }
</style>