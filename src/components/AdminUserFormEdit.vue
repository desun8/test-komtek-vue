<script>
import { updateUser } from "@/store/modules/admin/action-types";
import BaseFormInput from "./BaseFormInput.vue";
import { mapActions, mapGetters } from "vuex";
import BaseFormButtons from "./BaseFormButtons.vue";
export default {
  components: { BaseFormInput, BaseFormButtons },

  data() {
    return {
      name: { value: "", isValid: true },
      surname: { value: "", isValid: true },
      patronymic: { value: "", isValid: true },
      email: { value: "", isValid: true },
    };
  },

  computed: {
    ...mapGetters("admin", ["getUserById"]),

    dialog() {
      return this.$store.state.admin.dialogEditInstance;
    },

    userId() {
      return this.$store.state.admin.selectedUserId;
    },

    user() {
      if (this.userId) {
        const user = this.getUserById(this.userId);
        return user;
      }

      return null;
    },

    isValidForm() {
      if (
        this.name.value &&
        this.name.isValid &&
        this.surname.value &&
        this.surname.isValid &&
        this.email.value &&
        this.email.isValid
      ) {
        return true;
      }

      return false;
    },
  },

  methods: {
    ...mapActions("admin", [updateUser]),

    updateData(user) {
      this.name.value = user.name;
      this.name.isValid = true;
      this.surname.value = user.surname;
      this.surname.isValid = true;
      this.patronymic.value = user.patronymic;
      this.patronymic.isValid = true;
      this.email.value = user.email;
      this.email.isValid = true;
    },

    handleSubmit() {
      if (this.isValidForm) {
        const newUserData = {
          id: this.userId,
          name: this.name.value,
          surname: this.surname.value,
          patronymic: this.patronymic.value,
          email: this.email.value,
        };

        this.updateUser(newUserData);
        this.dialog.hide();
      }
    },
  },

  watch: {
    user(newVal) {
      this.updateData(newVal);
    },
  },

  mounted() {
    if (this.user) {
      this.updateData(this.user);
    }
  },
};
</script>

<template>
  <form
    v-if="userId"
    @submit.prevent="handleSubmit"
    class="grid gap-5 md:(grid-cols-2 gap-10)"
    novalidate
  >
    <base-form-input
      id="surname"
      name="surname"
      label="Фамилия"
      v-model="surname"
      :required="true"
    ></base-form-input>
    <base-form-input
      id="name"
      name="name"
      label="Имя"
      v-model="name"
      :required="true"
    ></base-form-input>
    <base-form-input
      id="patronymic"
      name="patronymic"
      label="Отчество"
      v-model="patronymic"
    ></base-form-input>
    <base-form-input
      id="email"
      name="email"
      label="Email"
      type="email"
      v-model="email"
      :required="true"
    ></base-form-input>

    <base-form-buttons
      class="col-span-full"
      :is-valid="isValidForm"
      :on-close="() => dialog.hide()"
    ></base-form-buttons>
  </form>
</template>
