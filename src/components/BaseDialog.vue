<script>
import A11yDialog from "a11y-dialog";
import { mapGetters } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    setDialogElToStore: {
      type: Function,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["edit-user", "add-user", "add-task"].indexOf(value) !== -1;
      },
    },
  },

  data() {
    return {
      dialog: null,
      userData: null,
    };
  },

  computed: {
    ...mapGetters("admin", ["getUserById"]),
    
    titleId() {
      return `${this.id}-title`;
    },
  },

  methods: {
    initDialog() {
      this.dialog = new A11yDialog(this.$el);
      this.setDialogElToStore(this.dialog);
      this.addDialogEvents();
    },

    addDialogEvents() {
      this.dialog.on("show", this.onShow);
    },

    onShow() {
      if (this.type === "edit-user") {
        const userId = this.$store.state.admin.selectedUserId;

        if (userId) {
          this.getUser(+userId);
        }
      }
    },

    getUser(id) {
      this.userData = this.getUserById(id);
    },
  },

  mounted() {
    this.initDialog();
  },
};
</script>

<template>
  <!-- 1. The dialog container -->
  <div
    :id="id"
    :aria-labelledby="titleId"
    class="dialog-container"
    aria-hidden="true"
  >
    <!-- 2. The dialog overlay -->
    <div
      class="dialog-overlay"
      data-a11y-dialog-hide
    ></div>
    <!-- 3. The actual dialog -->
    <div
      class="dialog-content rounded-lg shadow-md"
      role="document"
    >
      <!-- 4. The close button -->
      <button
        class="absolute -top-14 right-0 md:(top-0 -right-14) flex justify-center items-center w-10 h-10 rounded-full border border-light-400 text-light-400 hover:(border-red-light text-red-light)"
        type="button"
        data-a11y-dialog-hide
        aria-label="Закрыть диалог."
      >
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <!-- 5. The dialog title -->
      <h1
        :id="titleId"
        class="p-10 font-light uppercase"
      >
        {{ title }}
      </h1>
      <!-- 6. Dialog content -->
      <!-- 
          forward user data to slot form
        -->
      <div class="p-10 pt-0">
        <slot :user="userData"></slot>
      </div>
    </div>
  </div>
</template>

<style>
/**
 * 1. Make the dialog container, and its child overlay spread across
 *    the entire window.
 */
.dialog-container,
.dialog-overlay {
  position: fixed; /* 1 */
  top: 0; /* 1 */
  right: 0; /* 1 */
  bottom: 0; /* 1 */
  left: 0; /* 1 */
}

/**
 * 1. Make sure the dialog container and all its descendants sits on
 *    top of the rest of the page.
 * 2. Make the dialog container a flex container to easily center the
 *    dialog.
 */
.dialog-container {
  z-index: 2; /* 1 */
  display: flex; /* 2 */
}

/**
 * 1. Make sure the dialog container and all its descendants are not
 *    visible and not focusable when it is hidden.
 */
.dialog-container[aria-hidden="true"] {
  display: none; /* 1 */
}

/**
 * 1. Make the overlay look like an overlay.
 */
.dialog-overlay {
  background-color: rgba(43, 46, 56, 0.9); /* 1 */
}

/**
 * 1. Vertically and horizontally center the dialog in the page.
 * 2. Make sure the dialog sits on top of the overlay.
 * 3. Make sure the dialog has an opaque background.
 */
.dialog-content {
  margin: auto; /* 1 */
  z-index: 2; /* 2 */
  position: relative; /* 2 */
  background-color: white; /* 3 */
}
</style>
