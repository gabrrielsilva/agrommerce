/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        interRegular: ['Inter Regular'],
        foundersGrotesk: ['Founders Grotesk'],
        interBold: ['Inter Bold'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
