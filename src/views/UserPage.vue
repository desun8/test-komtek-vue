<script>
import UserDayReview from "@/components/UserDayReview.vue";
import { mapGetters } from "vuex";
import UserButtonAddTask from "@/components/UserButtonAddTask.vue";
import UserDialogAddTask from "@/components/UserDialogAddTask.vue";
import BaseTitlePage from '@/components/BaseTitlePage.vue';
export default {
  components: { UserDayReview, UserButtonAddTask, UserDialogAddTask, BaseTitlePage },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    userData: null,
  }),

  computed: { ...mapGetters("user", ["getUserById"]) },

  beforeRouteEnter(_, _2, next) {
    next((vm) => {
      vm.userData = vm.getUserById(vm.userId);
    });
  },
};
</script>

<template>
  <div>
    <base-title-page>User ID: {{ userId }}</base-title-page>
    <user-day-review
      v-if="userData"
      :user="userData"
    ></user-day-review>
    <user-button-add-task></user-button-add-task>

    <portal to="dialog">
      <user-dialog-add-task :user-id="userId"></user-dialog-add-task>
    </portal>
  </div>
</template>
