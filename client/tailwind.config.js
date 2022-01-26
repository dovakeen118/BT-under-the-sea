/* eslint-disable global-require */
module.exports = {
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        cognac: "#4C342F",
        peach: "#E9967A",
        sage: "#d3dacd",
        teal: "#3C7882",
      },
    },
  },
};
