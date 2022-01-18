<template>
  <div class="pop-up popup">
    <div class="pop-up__body popup__body">
     <div class="pop-up__header header">
       <button
           class="header__button-close btn-close"
           @click="$emit('closePopUpEvent')"
       >
         X
       </button>
     </div>

      <div class="pop-up__main main"></div>

      <div class="pop-up__footer footer">
        <button
            class="footer__button footer__button-back btn"
            @click="$emit('backPopUpEvent')"
        >
          Back
        </button>
        <button
            class="footer__button footer__button-continue btn"
            @click="$emit('continuePopUpEvent')"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPopUp',
}
</script>

<style scoped lang="scss">
  body {
    overflow: hidden;
  }
  .pop-up {
    &__body {
      min-width: 310px;
      min-height: 200px;
      background: #fff;
      .header {
        position: relative;
        min-height: 50px;

        &__button-close {
          position: absolute;
          top: -35px;
          right: -15px;
        }
      }

      .main {
        min-height: 50px;
      }

      .footer {
        &__button {
          background-color: #63699f;

          &-back {
            margin-right: 20px;
          }
        }
      }
    }
  }
</style>
