import { vuexError } from "@/helpers/logError";
import {
  addUser,
  setDialogAddInstance,
  setDialogEditInstance,
  setUserId,
  updateUser,
} from "./action-types";
import {
  SET_DIALOG_EDIT_INSTANCE,
  SET_DIALOG_ADD_INSTANCE,
  SET_USER_ID,
  UPDATE_USER,
  ADD_USER,
} from "./mutation-types";

const staticUsersData = [
  {
    id: 1,
    email: "example@mail.com",
    name: "Владимир",
    surname: "Новиков",
  },
  {
    id: 2,
    email: "koko@mail.com",
    name: "Андрей",
    surname: "Кот",
  },
  {
    id: 3,
    email: "mikatu@mail.com",
    name: "Ольга",
    surname: "Кошкина",
    patronymic: "Владимировна",
  },
  {
    id: 4,
    email: "exple@mail.com",
    name: "Коля",
    surname: "Крупа",
  },
  {
    id: 5,
    email: "examp@mail.com",
    name: "Олег",
    surname: "Велосипед",
  },
];

const initialState = {
  users: staticUsersData,
  dialogEditInstance: null,
  dialogAddInstance: null,
  selectedUserId: null,
};

const getters = {
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.id === +id);
  },
  getLastUserId(state) {
    return state.users[state.users.length - 1].id;
  },
};

const mutations = {
  [ADD_USER](state, payload) {
    state.users = payload;
  },
  [UPDATE_USER](state, payload) {
    state.users = payload;
  },
  [SET_DIALOG_EDIT_INSTANCE](state, payload) {
    state.dialogEditInstance = payload;
  },
  [SET_DIALOG_ADD_INSTANCE](state, payload) {
    state.dialogAddInstance = payload;
  },
  [SET_USER_ID](state, payload) {
    state.selectedUserId = payload;
  },
};

const actions = {
  [addUser]({ state, commit }, newUser) {
    commit(ADD_USER, [...state.users, newUser]);
  },

  [updateUser]({ state, commit }, newUserData) {
    const users = [...state.users];
    const userIndex = users.findIndex((user) => user.id === newUserData.id);

    if (userIndex !== -1) {
      users[userIndex] = newUserData;
      commit(UPDATE_USER, users);
    } else {
      vuexError(`Actions -> ${updateUser}. Не удалось найти пользователя.`);
    }
  },

  [setDialogEditInstance]({ _, commit }, dialog) {
    commit(SET_DIALOG_EDIT_INSTANCE, dialog);
  },

  [setDialogAddInstance]({ _, commit }, dialog) {
    commit(SET_DIALOG_ADD_INSTANCE, dialog);
  },

  [setUserId]({ _, commit }, id) {
    commit(SET_USER_ID, id);
  },
};

export const admin = {
  namespaced: true,
  state: () => initialState,
  getters,
  mutations,
  actions,
};
