<script>
export default {
  props: {
    headData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <thead class="table__head">
    <tr class="table__row">
      <th
        v-for="title in headData"
        :key="title.name"
        class="table__cell uppercase font-semibold"
      >
        <span
          v-if="title.srOnly"
          class="sr-only"
        >{{ title.name }}</span>
        <template v-else>
          {{ title.name }}
        </template>
      </th>
    </tr>
  </thead>
</template>
