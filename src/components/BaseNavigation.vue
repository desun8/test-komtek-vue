<script>
import { ROUTES } from "@/router/routes";
export default {
  data() {
    return {
      admin: ROUTES.Admin,
      user: ROUTES.UserLogin,
    };
  },
};
</script>

<template>
  <nav class="grid gap-2 content-center <md:grid-flow-col md:w-60 p-5 bg-white rounded-xl shadow-sm">
    <router-link
      :to="admin"
      class="link"
      v-slot="{ href, navigate, isExactActive }"
    >
      <template>
        <a
          :href="href"
          @click="navigate"
          :class="{ 'text-white bg-primary': isExactActive }"
        >Админ</a>
      </template>
    </router-link>

    <router-link
      :to="user"
      class="link"
      v-slot="{ href, navigate, isActive }"
    >
      <template>
        <a
          :href="href"
          @click="navigate"
          :class="{ 'text-white bg-primary': isActive }"
        >Пользователь</a>
      </template>
    </router-link>
  </nav>
</template>

<style scoped>
.link {
  @apply px-4 py-3 rounded-lg transition-colors duration-200 hover:(bg-gray-100);
}
</style>
