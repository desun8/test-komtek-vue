<script>
import { setDialogEditInstance } from "@/store/modules/admin/action-types";
import BaseDialog from "./BaseDialog.vue";
import AdminUserFormEdit from "./AdminUserFormEdit.vue";
import { mapActions } from "vuex";

export default {
  components: { BaseDialog, AdminUserFormEdit },

  methods: {
    ...mapActions("admin", [setDialogEditInstance]),

    setDialogEl(el) {
      this.setDialogEditInstance(el);
    },
  },
};
</script>

<template>
  <base-dialog
    id="dialog-edit-user"
    title="Редактировать пользователя"
    type="edit-user"
    :set-dialog-el-to-store="setDialogEl"
  >
    <admin-user-form-edit></admin-user-form-edit>
  </base-dialog>
</template>
