<script>
import { componentError } from "@/helpers/logError";
import BaseFormInput from "./BaseFormInput.vue";
import { mapGetters } from "vuex";
import BaseFormButtons from "./BaseFormButtons.vue";
export default {
  components: { BaseFormInput, BaseFormButtons },
  data: () => ({
    login: { value: "", isValid: true },
  }),

  computed: {
    ...mapGetters("user", ["getUserById"]),

    isValidForm() {
      return this.login.value !== "" && this.login.isValid;
    },
  },

  methods: {
    userExisted(login) {
      return !!this.getUserById(login);
    },

    handleSubmit() {
      if (this.isValidForm) {
        const hasUser = this.userExisted(this.login.value);

        if (hasUser) {
          this.$router.push({
            name: "user",
            params: { userId: this.login.value },
          });
        } else {
          componentError("Такого пользователя не существует!");
        }
      }
    },
  },
};
</script>

<template>
  <form
    class="max-w-80 grid gap-10"
    @submit.prevent="handleSubmit"
    novalidate
  >
    <base-form-input
      id="login"
      label="Логин"
      name="login"
      type="number"
      :required="true"
      placeholder="id"
      v-model="login"
    ></base-form-input>
    <base-form-buttons
      :is-valid="isValidForm"
      :only-submit="true"
    >
      Вход
    </base-form-buttons>
  </form>
</template>

<style scoped>
form >>> input[type=number]::-webkit-inner-spin-button, 
form >>> input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>
