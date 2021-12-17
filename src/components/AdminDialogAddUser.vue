<script>
import { setDialogAddInstance } from "@/store/modules/admin/action-types";
import BaseDialog from "./BaseDialog.vue";
import AdminUserFormAdd from "./AdminUserFormAdd.vue";
import { mapActions } from "vuex";
export default {
  components: { BaseDialog, AdminUserFormAdd },

  methods: {
    ...mapActions("admin", [setDialogAddInstance]),

    setDialogEl(el) {
      this.setDialogAddInstance(el);
    },
  },
};
</script>

<template>
  <base-dialog
    id="dialog-add-user"
    title="Добавить нового пользователя"
    type="add-user"
    :set-dialog-el-to-store="setDialogEl"
  >
    <admin-user-form-add></admin-user-form-add>
  </base-dialog>
</template>
