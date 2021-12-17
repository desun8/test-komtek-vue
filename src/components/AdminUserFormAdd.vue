<script>
import { addUser } from "@/store/modules/admin/action-types";
import BaseFormInput from "./BaseFormInput.vue";
import BaseFormButtons from "./BaseFormButtons.vue";
import { mapActions, mapGetters } from "vuex";
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
    ...mapGetters('admin', ['getLastUserId']),
    
    dialog() {
      return this.$store.state.admin.dialogAddInstance;
    },

    lastUserId() {
      return this.getLastUserId;
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
    ...mapActions("admin", [addUser]),

    resetData() {
      this.name = { value: "", isValid: true };
      this.surname = { value: "", isValid: true };
      this.patronymic = { value: "", isValid: true };
      this.email = { value: "", isValid: true };
    },

    handleSubmit() {
      if (this.isValidForm) {
        const newUser = {
          id: this.lastUserId + 1,
          name: this.name.value,
          surname: this.surname.value,
          patronymic: this.patronymic.value,
          email: this.email.value,
        };

        this.addUser(newUser);
        this.dialog.hide();
        this.resetData();
      }
    },
  },
};
</script>

<template>
  <form
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
