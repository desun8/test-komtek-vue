<script>
import BaseButtonAdd from "./BaseButtonAdd.vue";
export default {
  components: { BaseButtonAdd },
  computed: {
    dialog() {
      return this.$store.state.admin.dialogAddInstance;
    },
  },

  methods: {
    handleClick() {
      this.dialog.show();
    },
  },
};
</script>

<template>
  <base-button-add
    @click="handleClick"
    class="fixed right-10 bottom-10"
  ></base-button-add>
</template>
