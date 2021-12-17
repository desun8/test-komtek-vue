module.exports = {
  extends: ["plugin:vue/strongly-recommended"],
  rules: {
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "never",
          normal: "never",
          component: "never",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
};
