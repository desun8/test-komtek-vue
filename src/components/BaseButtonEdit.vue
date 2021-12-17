<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
};
</script>

<template>
  <base-button
    label="Редактировать."
    class="p-1 bg-primary-light text-white transition-colors duration-300 hover:bg-primary"
    @click="$emit('click')"
  >
    <svg
      class="h-5 w-5 pointer-events-none"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
      />
    </svg>
  </base-button>
</template>
