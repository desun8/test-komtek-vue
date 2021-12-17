<script>
import { removeUser } from "@/store/modules/user/action-types";
import { mapActions } from "vuex";
import BaseButtonRemove from "./BaseButtonRemove.vue";
export default {
  components: { BaseButtonRemove },
  props: {
    userId: {
      type: Number,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions("user", [removeUser]),

    formatDate(date) {
      return date.toLocaleDateString("ru-RU");
    },

    handleClick() {
      const data = {
        userId: this.userId,
        taskId: this.task.id,
      };

      this.removeUser(data);
    },
  },
};
</script>

<template>
  <tr class="table__row">
    <td class="table__cell">{{ task.describe }}</td>
    <td class="table__cell">{{ task.duration }}</td>
    <td class="table__cell">{{ formatDate(task.date) }}</td>
    <td class="table__cell">
      <base-button-remove @click="handleClick"></base-button-remove>
    </td>
  </tr>
</template>
