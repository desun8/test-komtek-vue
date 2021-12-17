import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#49a3f1",
        "primary-light": "#1a73e8",
        second: "#66bb6a",
        "second-light": "#43a047",
        red: "#ef5350",
        "red-light": "#e53935",
      },
      backgroundImage: {
        primary: "linear-gradient(195deg,#49a3f1,#1a73e8)",
      },
    },
  },
});
