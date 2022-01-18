<template>
  <section class="tabs__block _tabs-block">
    <div class="tabs__block-section sign-up" id="sign-up">
      <form
          action="#"
          class="sign-up__form form"
          method="post"
          enctype="multipart/form-data"
      >
        <div class="form__item">
          <label for="sign-up_user-login" class="form__label text text-gray">Login</label>
          <input
              id="sign-up_user-login"
              type="text"
              class="form__input"
              required name="uname"
          >
        </div>
        <div class="form__item">
          <label for="sign-up_user-password" class="form__label text text-gray">Password</label>
          <input
              id="sign-up_user-password"
              type="password"
              class="form__input"
              required name="psw"
          >
        </div>
        <div class="form__item">
          <label for="sign-up_user-pass-repeated" class="form__label text text-gray">Repeated Password</label>
          <input
              id="sign-up_user-pass-repeated"
              type="password"
              class="form__input"
              name="psw"
          >
        </div>
        <button
            type="submit"
            class="form__btn btn btn-white"
            id="button-sign-up"
        >
          Sign Up
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginSignUp',
}
</script>
