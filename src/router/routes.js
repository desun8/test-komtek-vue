import AdminPage from "@/views/AdminPage.vue";
import UserLoginPage from "@/views/UserLoginPage.vue";
import UserPage from "@/views/UserPage.vue";

export const ROUTES = {
  Base: "/",
  Admin: "/admin",
  UserLogin: "/user",
  User: "/user/:userId"
};

export const routes = [
  {
    path: ROUTES.Base,
    redirect: ROUTES.Admin,
    component: AdminPage,
  },
  {
    path: ROUTES.Admin,
    component: AdminPage,
  },
  {
    path: ROUTES.UserLogin,
    component: UserLoginPage,
  },
  {
    path: ROUTES.User,
    name: 'user',
    component: UserPage,
    props: true
  },
];
