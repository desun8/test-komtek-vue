module.exports = {
  extends: ["plugin:vue/strongly-recommended"],
  rules: {
    "vue/html-self-closing": ["error", {
      "html": 'never',
      "svg": "always",
      "math": "always"
    }]
  },
};
