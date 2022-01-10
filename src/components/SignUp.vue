<template>
  <div class="sign-up-page">
    <h3 class="sign-up-page__title">Sign Up</h3>
    <form class="sign-up-page__form">
      <div
          :class="[isActive === 'name' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-name">User name: </label>
        <input
            id="user-name"
            v-model.lazy="userInfo.name"
            type="text"
            @focus="setActiveItem('name')"
        >
      </div>

      <div
          :class="[isActive === 'surname' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-surname">User surname: </label>
        <input
            id="user-surname"
            v-model.lazy="userInfo.surname"
            type="text"
            @focus="setActiveItem('surname')"
        >
      </div>

      <div
          :class="[isActive === 'email' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-email">User email: </label>
        <input
            id="user-email"
            v-model.trim="userInfo.email"
            type="text"
            @focus="setActiveItem('email')"
        >
      </div>

      <div
          :class="[isActive === 'phone' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-phone">User phone: </label>
        <input
            id="user-phone"
            v-model.number="userInfo.phone"
            type="number"
            @focus="setActiveItem('phone')"
        >
      </div>

      <div
          :class="[isActive === 'birthYear' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-birth">User birth year: </label>
        <input
            id="user-birth"
            v-model.number="userInfo.birthYear"
            type="number"
            @focus="setActiveItem('birthYear')"
        >
      </div>

      <div>
        <div
            :class="[isActive === 'gender' ? 'active' : '']"
            class="sign-up-page__form-item"
        >
          <label for="user-gender-f">Female </label>
          <input
              id="user-gender-f"
              v-model="userInfo.gender"
              value="female"
              type="radio"
              @focus="setActiveItem('gender')"
          >
        </div>
        <div
            :class="[isActive === 'gender' ? 'active' : '']"
            class="sign-up-page__form-item"
        >
          <label for="user-gender-m">Male </label>
          <input
              id="user-gender-m"
              v-model="userInfo.gender"
              value="male"
              type="radio"
              @focus="setActiveItem('gender')"
          >
        </div>
      </div>

      <div
          :class="[isActive === 'logIn' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-log">User logIn: </label>
        <input
            id="user-log"
            v-model.trim="userInfo.logIn"
            type="text"
            @focus="setActiveItem('logIn')"
        >
      </div>

      <div
          :class="[isActive === 'password' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-pass">User password: </label>
        <input
            id="user-pass"
            v-model.trim="userInfo.password"
            type="text"
            @focus="setActiveItem('password')"
        >
      </div>

      <div
          :class="[isActive === 'repeatedPassword' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-pass-repeated">User password (repeated): </label>
        <input
            id="user-pass-repeated"
            v-model.trim="userInfo.repeatedPassword"
            type="text"
            @focus="setActiveItem('repeatedPassword')"
        >
      </div>

      <div
          :class="[isActive === 'repeatedPassword' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="commercial-experience">Yes, I have commercial experience </label>
        <input
            id="commercial-experience"
            true-value= "Yes, I have"
            false-value="No, I haven't"
            v-model="userInfo.commercialExperience"
            type="checkbox"
            @focus="setActiveItem('commercialExperience')"
        >
      </div>

      <div
          :class="[isActive === 'yearsOfExperience' ? 'active' : '']"
          class="sign-up-page__form-item"
          v-show="userInfo.commercialExperience === 'Yes, I have'"
      >
        <label for="user-experience-years">How many years do you have? </label>
        <input
            id="user-experience-years"
            v-model.number="userInfo.yearsOfExperience"
            type="number"
            @focus="setActiveItem('yearsOfExperience')"
        >
      </div>

      <div
          :class="[isActive === 'country' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-country">User country: </label>
        <input
            id="user-country"
            v-model.lazy="userInfo.country"
            type="text"
            @focus="setActiveItem('country')"
        >
      </div>

      <div
          :class="[isActive === 'city' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-city">User city: </label>
        <input
            id="user-city"
            v-if="userInfo.country !== 'Ukraine'"
            v-model="userInfo.city"
            type="text"
            @focus="setActiveItem('city')"
        >
        <select
            id="user-city"
            v-else
            v-model="userInfo.city"
            @focus="setActiveItem('city')"
        >
          <option disabled value="">Choose your city</option>
          <option v-for="(city, index) in ukrainianCities" :key="index">
              {{ city }}
          </option>
        </select>
      </div>

      <div
          :class="[isActive === 'address' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label for="user-address">User address: </label>
        <input
            id="user-address"
            v-model="userInfo.address"
            type="text"
            @focus="setActiveItem('address')"
        >
      </div>

      <div
          :class="[isActive === 'englishLevel' ? 'active' : '']"
          class="sign-up-page__form-item"
      >
        <label>User english level: </label>
        <select
            id="user-english-level"
            v-model="userInfo.englishLevel"
            @focus="setActiveItem('englishLevel')"
        >
          <option disabled value="">Choose your english level</option>
          <option
              v-for="(level, index) in englishLevelsValues"
              :key="index + level.value"
              :value="level.value"
              :label="level.label"
          >
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data: () => ({
    userInfo: {
      name: '',
      surname: '',
      email: '',
      phone: null,
      birthYear: null,
      gender: null,
      logIn: '',
      password: '',
      repeatedPassword: '',
      commercialExperience: null,
      yearsOfExperience: null,
      country: '',
      city: '',
      address: '',
      englishLevel: ''
    },
    ukrainianCities: [
      'Vinnytsia',
      'Kropyvnytskyi',
      'Poltava',
      'Kharkiv',
      'Dnipro',
      'Luhansk',
      'Kherson',
      'Donetsk',
      'Lutsk',
      'Simferopol',
      'Khmelnitsky',
      'Zhitomir',
      'Lvov',
      'Sumy',
      'Cherkasy',
      'Zaporozhye',
      'Nikolaev',
      'Ternopil',
      'Chernigov',
      'Ivano-Frankivsk',
      'Odessa',
      'Uzhgorod',
      'Chernivtsi',
      'Kiev'
    ],
    englishLevelsValues: [
      {
        value: 'A1',
        label: 'Beginner'
      },
      {
        value: 'A2',
        label: 'Elementary'
      },
      {
        value: 'B1',
        label: 'Intermediate'
      },
      {
        value: 'B2',
        label: 'Upper Intermediate'
      },
      {
        value: 'C1',
        label: 'Advanced'
      },
      {
        value: 'C2',
        label: 'Proficiency'
      }
    ],
    isActive: '',
  }),
  computed: {
  },
  methods: {
    setActiveItem(inputName) {
      this.isActive = inputName
    }
  },
}
</script>

<style scoped lang="scss">
  .sign-up-page {
    padding: 30px 0;
    text-align: left;
    &__title {
      text-align: center;
    }
    &__form-item {
      margin-bottom: 10px;
      display: flex;
      label {
        padding-right: 5px;
        flex: 0 0 20%;
      }
      input {
        border: 1px solid #0c0c0c;
        padding: 0 5px;
        flex: 0 0 80%;
        line-height: 27px;
        &#commercial-experience, &#user-gender-f, &#user-gender-m {
          flex: 0 0 0;
        }
      }
      &.active {
        input {
          border: 1px solid #bad2e8;
          box-shadow: 0 0 15px #bad2e8;
        }
      }
      @media (max-width:767px) {
        flex-direction: column;
      }
    }
  }
</style>