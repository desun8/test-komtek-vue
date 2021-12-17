<script>
import BaseNavigation from "./components/BaseNavigation.vue";
export default {
  components: { BaseNavigation },
};
</script>

<template>
  <div class="pb-32">
    <div class="grid md:grid-cols-[auto,1fr] gap-5 items-start">
      <base-navigation></base-navigation>
      <router-view></router-view>
    </div>
    <portal-target name="dialog"></portal-target>
  </div>
</template>

<style>
body,
html {
  height: 100%;
}

body {
  @apply p-4 md:p-10 bg-light-500;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  @apply transition-colors duration-300;
}

.table {
  @apply w-full p-5 bg-white rounded-lg shadow-sm;
}

.table__head {}

.table__body {}

.table__row:not(.table__head .table__row) {
  @apply border-t;
}

.table__cell {
  @apply p-3 text-left;
}

.table__cell:first-child {
  @apply pl-5;
}

.table__cell:last-child {
  @apply pr-5;
}
</style>
