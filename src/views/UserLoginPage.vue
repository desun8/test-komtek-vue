<script>
import UserLogin from "@/components/UserLogin.vue";
import BaseTitlePage from "@/components/BaseTitlePage.vue";
export default {
  components: { UserLogin, BaseTitlePage },
};
</script>

<template>
  <div>
    <base-title-page>User Login</base-title-page>
    <user-login></user-login>
  </div>
</template>
