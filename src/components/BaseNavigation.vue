<script>
import { ROUTES } from "@/router/routes";
import BaseNavigationLink from "./BaseNavigationLink.vue";
export default {
  components: { BaseNavigationLink },
  data() {
    return {
      admin: ROUTES.Admin,
      user: ROUTES.UserLogin,
    };
  },
};
</script>

<template>
  <nav
    class="grid gap-2 content-center <md:grid-flow-col md:w-60 p-5 bg-white rounded-xl shadow-sm"
  >
    <router-link
      :to="admin"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <base-navigation-link
        :href="href"
        :navigate="navigate"
        :is-active="isActive"
      >
        Админ
      </base-navigation-link>
    </router-link>

    <router-link
      :to="user"
      v-slot="{ href, navigate, isActive }"
      custom
    >
      <base-navigation-link
        :href="href"
        :navigate="navigate"
        :is-active="isActive"
      >
        Пользователь
      </base-navigation-link>
    </router-link>
  </nav>
</template>
