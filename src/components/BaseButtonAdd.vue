<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  props: {
    label: {
      type: String,
      default: "Добавить пользователя.",
    },
  },
};
</script>

<template>
  <base-button
    @click="$emit('click')"
    class="p-5 bg-second-light text-white rounded-full transition-colors duration-300 hover:(bg-second)"
    :label="label"
  >
    <svg
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        clip-rule="evenodd"
      />
    </svg>
  </base-button>
</template>
