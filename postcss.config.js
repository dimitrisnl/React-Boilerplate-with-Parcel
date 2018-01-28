module.exports = {
  modules: true,
  plugins: {
    'postcss-font-magician': {
      variants: {
        'Lobster Two': {
          '300': [],
          '400': [],
          '700': [],
        },
      },
      foundries: ['google'],
    },
    autoprefixer: {},
  },
}
