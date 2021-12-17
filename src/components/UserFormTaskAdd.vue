<script>
import { addTask } from "@/store/modules/user/action-types";
import BaseFormInput from "./BaseFormInput.vue";
import { mapActions } from "vuex";
import BaseFormButtons from "./BaseFormButtons.vue";
export default {
  components: { BaseFormInput, BaseFormButtons },

  props: {
    userId: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    describe: { value: "", isValid: true },
    duration: { value: "", isValid: true },
  }),

  computed: {
    dialog() {
      return this.$store.state.user.dialogInstance;
    },

    isValidForm() {
      if (
        this.describe.value &&
        this.describe.isValid &&
        this.duration.value &&
        this.duration.isValid
      ) {
        return true;
      }

      return false;
    },
  },

  methods: {
    ...mapActions("user", [addTask]),

    resetData() {
      this.describe = { value: "", isValid: true };
      this.duration = { value: "", isValid: true };
    },

    handleSubmit() {
      if (this.isValidForm) {
        const dateMs = Date.now();

        const newTask = {
          id: dateMs,
          describe: this.describe.value,
          duration: this.duration.value,
          date: new Date(dateMs),
        };

        this.addTask({ userId: +this.userId, task: newTask });
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
      v-model="describe"
      id="describe"
      name="describe"
      label="Примечание"
      :required="true"
    ></base-form-input>
    <base-form-input
      v-model="duration"
      id="duration"
      name="duration"
      label="Кол-во часов"
      type="time"
      :required="true"
    ></base-form-input>

    <base-form-buttons
      class="col-span-full"
      :is-valid="isValidForm"
      :on-close="() => dialog.hide()"
    ></base-form-buttons>
  </form>
</template>
