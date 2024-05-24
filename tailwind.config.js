import defaultTheme from 'tailwindcss/defaultTheme';

export default {
   content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#004FFF',
            dark: '#2B2D33',
         },
         fontFamily: {
            sans: ['Radio', ...defaultTheme.fontFamily.sans],
         },
      },
   },
   plugins: [],
};
