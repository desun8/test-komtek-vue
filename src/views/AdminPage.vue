<script>
import BaseTitlePage from "@/components/BaseTitlePage.vue"
import AdminUsersTable from "@/components/AdminUsersTable.vue";
import AdminButtonAddUser from "@/components/AdminButtonAddUser.vue";
import AdminDialogEditUser from "@/components/AdminDialogEditUser.vue";
import AdminDialogAddUser from "@/components/AdminDialogAddUser.vue";
export default {
  components: {
    BaseTitlePage,
    AdminUsersTable,
    AdminButtonAddUser,
    AdminDialogEditUser,
    AdminDialogAddUser,
  },
};
</script>

<template>
  <div>
    <base-title-page>Admin Page</base-title-page>
    <admin-users-table></admin-users-table>
    <admin-button-add-user></admin-button-add-user>

    <portal to="dialog">
      <admin-dialog-edit-user></admin-dialog-edit-user>
      <admin-dialog-add-user></admin-dialog-add-user>
    </portal>
  </div>
</template>
