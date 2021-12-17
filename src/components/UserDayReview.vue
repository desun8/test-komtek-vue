<script>
import UserDayReviewItem from "./UserDayReviewItem.vue";
export default {
  components: { UserDayReviewItem },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  computed: {
    tasks() {
      return [...this.user.items].sort((a, b) => (a.date > b.date ? -1 : 1));
    },
  },
};
</script>

<template>
  <table class="table">
    <thead class="table__head">
      <tr class="table__row">
        <th class="table__cell">Примечание</th>
        <th class="table__cell">Кол-во часов</th>
        <th class="table__cell">Дата</th>
        <th><span class="sr-only">удалить</span></th>
      </tr>
    </thead>

    <tbody>
      <user-day-review-item
        v-for="item in tasks"
        :key="item.id"
        :task="item"
        :user-id="user.id"
      ></user-day-review-item>
    </tbody>
  </table>
</template>
