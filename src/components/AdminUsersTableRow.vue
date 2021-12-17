<script>
import { setUserId } from "@/store/modules/admin/action-types";
import BaseButtonEdit from "./BaseButtonEdit.vue";
import { ROUTES } from "@/router/routes";
import { mapActions } from "vuex";

export default {
  components: { BaseButtonEdit },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  computed: {
    fullname() {
      return `${this.user.surname} ${this.user.name} ${
        this.user.patronymic ? this.user.patronymic : ""
      }`;
    },

    dialog() {
      return this.$store.state.admin.dialogEditInstance;
    },

    userLink() {
      return `${ROUTES.UserLogin}/${this.user.id}`;
    },
  },

  methods: {
    ...mapActions("admin", [setUserId]),

    onClick() {
      this.setUserId(this.user.id);
      this.dialog.show();
    },
  },
};
</script>

<template>
  <tr class="table__row">
    <td class="table__cell">
      <router-link :to="userLink" class="hover:underline">
        {{ fullname }}
      </router-link>
    </td>
    <td>{{ user.email }}</td>
    <td class="table__cell flex place-content-center">
      <base-button-edit @click="onClick"></base-button-edit>
    </td>
  </tr>
</template>
