<script>
import AdminUsersTableHeader from "./AdminUsersTableHeader.vue";
import AdminUsersTableRow from "./AdminUsersTableRow.vue";

export default {
  components: { AdminUsersTableHeader, AdminUsersTableRow },
  data() {
    return {
      tableColsName: [
        { name: "имя", srOnly: false },
        { name: "email", srOnly: false },
        { name: "редактировать", srOnly: true },
      ],
    };
  },

  computed: {
    usersData() {
      return this.$store.state.admin.users;
    },
  },
};
</script>

<template>
  <table class="table">
    <admin-users-table-header
      :head-data="tableColsName"
    ></admin-users-table-header>
    <tbody class="table__body">
      <admin-users-table-row
        v-for="user in usersData"
        :key="user.id"
        :user="user"
      ></admin-users-table-row>
    </tbody>
  </table>
</template>
