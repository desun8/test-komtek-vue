<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    navigate: {
      type: Function,
      required: true,
    },
  },
};
</script>

<template>
  <a
    :href="href"
    @click="navigate"
    class="px-4 py-3 rounded-lg transition-colors duration-200 hover:(bg-gray-100)"
    :class="{ 'text-white bg-primary': isActive }"
  ><slot>Ссылка</slot></a>
</template>
