<template>
  <section class="tabs__block _tabs-block _active">
    <div class="tabs__block-section sign-in" id="sign-in">
      <form
          action="#"
          class="sign-in__form form"
          method="post"
          enctype="multipart/form-data"
      >
        <div class="form__item">
          <label for="sign-in_user-login" class="form__label text text-gray">Login</label>
          <input
              id="sign-in_user-login"
              type="text"
              class="form__input"
              required name="uname"
          >
        </div>
        <div class="form__item">
          <label for="sign-in_user-password" class="form__label text text-gray">Password</label>
          <input
              id="sign-in_user-password"
              type="password"
              class="form__input"
              required name="psw"
          >
        </div>
        <button
            type="submit"
            class="form__btn btn btn-white"
            id="button-sign-in"
        >
          Sign In
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginSignIn',
}
</script>