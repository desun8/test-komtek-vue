<script>
import { setDialogInstance } from "@/store/modules/user/action-types";
import { mapActions } from "vuex";
import BaseDialog from "./BaseDialog.vue";
import UserFormTaskAdd from "./UserFormTaskAdd.vue";
export default {
  components: { BaseDialog, UserFormTaskAdd },

  props: {
    userId: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapActions("user", [setDialogInstance]),

    setDialog(instance) {
      this.setDialogInstance(instance);
    },
  },
};
</script>

<template>
  <base-dialog
    id="dialog-add-task"
    title="Добавить новую задачу"
    type="add-task"
    :set-dialog-el-to-store="setDialog"
  >
    <user-form-task-add :user-id="userId"></user-form-task-add>
  </base-dialog>
</template>
