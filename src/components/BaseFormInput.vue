<script>
import { isValidEmail, isValidString, isValidTime } from "@/helpers/validation";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: Object,
      default: () => ({ value: "", isValid: "" }),
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    isValid(value) {
      if (!this.required) return true;
      
      switch (this.type) {
        case "text":
          return isValidString(value);
        case "email":
          return isValidEmail(value);
        case "time":
          return isValidTime(value);
        default:
          return true;
      }
    },
  },
};
</script>

<template>
  <div class="grid gap-1">
    <label :for="id">{{ label }}:</label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :required="required"
      :value="value.value"
      :placeholder="placeholder"
      @input="$emit('input', { value: $event.target.value, isValid: isValid($event.target.value) })"
      class="px-2 py-1 border rounded-md"
      :class="{ 'border-red-600': !value.isValid }"
    >
  </div>
</template>
