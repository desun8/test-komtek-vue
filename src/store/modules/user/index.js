import { vuexError } from "@/helpers/logError";
import { addTask, removeTask, setDialogInstance } from "./action-types";
import { ADD_TASK, REMOVE_USER, SET_DIALOG_INSTANCE } from "./mutation-types";

const staticUserItems = [
  {
    id: 0,
    describe: "задача 1",
    duration: "02:20",
    date: new Date(),
  },
  {
    id: 1,
    describe: "задача 2",
    duration: "00:35",
    date: new Date(),
  },
  {
    id: 2,
    describe: "задача 3",
    duration: "06:02",
    date: new Date(),
  },
];
const staticUserData = [
  {
    id: 1,
    items: [...staticUserItems],
  },
  {
    id: 2,
    items: [...staticUserItems],
  },
  {
    id: 3,
    items: [...staticUserItems],
  },
  {
    id: 4,
    items: [...staticUserItems],
  },
  {
    id: 5,
    items: [...staticUserItems],
  },
];

const initialState = {
  users: staticUserData,
  dialogInstance: null,
};

const getters = {
  getUserById: (state, _, rootState) => (id) => {
    const userState = state.users.find((user) => user.id === +id);

    if (userState) return userState;

    const adminState = rootState.admin.users.find((user) => user.id === +id);

    if (adminState) return { id: adminState.id, items: [] };

    return;
  },
  getLastUserId(state) {
    return state.users[state.users.length - 1].id;
  },
};

const mutations = {
  [ADD_TASK](state, payload) {
    state.users = payload;
  },

  [REMOVE_USER](state, payload) {
    state.users = payload;
  },

  [SET_DIALOG_INSTANCE](state, payload) {
    state.dialogInstance = payload;
  },
};

const actions = {
  [addTask]({ state, commit, rootState }, data) {
    const userId = data.userId;
    const task = data.task;

    const users = [...state.users];
    const userIndex = users.findIndex((user) => user.id === userId);

    const checkUserInAdmin = (id) => {
      const userExist = rootState.admin.users.find((user) => user.id === id);
      return userExist;
    };

    if (userIndex !== -1) {
      users[userIndex].items = [...users[userIndex].items, task];

      commit(ADD_TASK, users);
    } else if (checkUserInAdmin(userId)) {
      users.push({
        id: userId,
        items: [task],
      });

      commit(ADD_TASK, users);
    } else {
      vuexError(`Actions -> ${addTask}. Не удалось найти пользователя.`);
    }
  },

  [removeTask]({ state, commit }, data = { userId, taskId }) {
    const users = [...state.users];
    const userIndex = users.findIndex((user) => user.id === data.userId);

    if (userIndex !== -1) {
      users[userIndex].items = users[userIndex].items.filter(
        (task) => task.id !== data.taskId
      );

      commit(REMOVE_USER, users);
    } else {
      vuexError(`Actions -> ${removeTask}. Не удалось найти пользователя.`);
    }
  },

  [setDialogInstance]({ _, commit }, dialog) {
    commit(SET_DIALOG_INSTANCE, dialog);
  },
};

export const user = {
  namespaced: true,
  state: () => initialState,
  getters,
  mutations,
  actions,
};
