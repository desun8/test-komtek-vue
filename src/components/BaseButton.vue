<script>
export default {
  props: {
    label: String,
  },

  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<template>
  <button
    @click="onClick"
    class="rounded-md"
    type="button"
    :aria-label="label"
  >
    <slot></slot>
  </button>
</template>
