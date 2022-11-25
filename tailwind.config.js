/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], //unuse css remove here
  theme: {
      extend: {
          fontFamily: {
              satoshiRegular: ['Satoshi Regular'],
              satoshiMedium: ['Satoshi Medium'],
              satoshiBold: ['Satoshi Bold'],
              satoshiBlack: ['Satoshi Black'],
              satoshiLight: ['Satoshi Light'],
          },
          colors: {
              info: "#0085FF",
              success: "#3AC430",
              warning: "#FE9705",
              error: "#EF4949",
              null: "#9EA7AD",
              process: "#FEE505",
              borderFocus: "#AEB0CF",
          },
      }
  },
  plugins: [],
}
