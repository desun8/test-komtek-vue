<script>
export default {
  props: {
    isValid: {
      type: Boolean,
      required: true,
    },

    onClose: {
      type: Function,
      default: () => {},
    },

    onlySubmit: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div
    class="grid gap-5 md:gap-10"
    :class="{ 'grid-cols-2': !onlySubmit }"
  >
    <button
      class="p-4 text-white rounded-lg bg-primary-light hover:bg-primary disabled:cursor-not-allowed disabled:opacity-75"
      type="submit"
      :disabled="!isValid"
    >
      <slot>Сохранить</slot>
    </button>
    <button
      v-if="!onlySubmit"
      @click="onClose"
      class="p-4 text-white rounded-lg bg-red-light hover:bg-red"
      type="button"
    >
      Отменить
    </button>
  </div>
</template>
