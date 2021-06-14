module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({

        'nav-gradient': "url('/static/background/nav-bkg.png')",
        'hero': "url('/static/background/sec_01_bkg.jpg')",
        'fractal-pattern': "url('/static/background/metaverse.svg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
