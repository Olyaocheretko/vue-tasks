<template>
  <div class="login popup">
    <div class="login__body popup__body">

      <div id="tabs" class="tabs _tabs">
        <nav class="tabs__nav">
          <div class="tabs__button _tabs-button _active">Sign In</div>
          <div class="tabs__button _tabs-button">Sign Up</div>
        </nav>
        <div class="tabs__body">
          <section class="tabs__block _tabs-block _active">
            <div class="tabs__block-section sign-in" id="sign-in">
              <form action="#" class="sign-in__form form" method="post" enctype="multipart/form-data">
                <div class="form__item">
                  <label for="sign-in_user-login" class="form__label text">Login</label>
                  <input id="sign-in_user-login" type="text" class="form__input" required name="uname">
                </div>
                <div class="form__item">
                  <label for="sign-in_user-password" class="form__label text">Password</label>
                  <input id="sign-in_user-password" type="password" class="form__input" required name="psw">
                </div>
                <button type="submit" class="form__btn btn" id="button-sign-in">Sign In</button>
              </form>
            </div>
          </section>

          <section class="tabs__block _tabs-block">
            <div class="tabs__block-section sign-up" id="sign-up">
              <form action="#" class="sign-up__form form" method="post" enctype="multipart/form-data">
                <div class="form__item">
                  <label for="sign-up_user-login" class="form__label text">Login</label>
                  <input id="sign-up_user-login" type="text" class="form__input" required name="uname">
                </div>
                <div class="form__item">
                  <label for="sign-up_user-password" class="form__label text">Password</label>
                  <input id="sign-up_user-password" type="password" class="form__input" required name="psw">
                </div>
                <div class="form__item">
                  <label for="sign-up_user-pass-repeated" class="form__label text">Repeated Password</label>
                  <input id="sign-up_user-pass-repeated"  type="password" class="form__input" name="psw">
                </div>
                <button type="submit" class="form__btn btn" id="button-sign-up">Sign Up</button>
              </form>
            </div>
          </section>
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
  data: () => ({
}),
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
  .text {
    color: #545353;
    font-weight: 700;
  }
  /*<TABS-NAVIGATION>===========*/
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
      &__button._active {
        background-color: #3574ad;
      }
    }
    /*<SECTION TABS-BODY>=========*/
    &__body {
      padding: 50px;
      box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.3);
      min-height: 360px;
      background-color: #ffffff;
      @media (max-width: 540px) {
        padding: 30px 20px;
      }
    }
    &__block {
      display: none;
      &._active {
        display: block;
      }
    }
  }
  .form {
    &__item {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
    }
    &__label {
      margin-bottom: 2px;
      font-size: 18px;
    }
    &:last-of-type {
      margin-bottom: 30px;
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
  .btn {
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