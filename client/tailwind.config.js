const colors = require("tailwindcss/colors");

/* eslint-disable global-require */
module.exports = {
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: colors.white,
      cognac: "#4C342F",
      peach: "#E9967A",
      sage: "#d3dacd",
      teal: "#3C7882",
    },
  },
};
