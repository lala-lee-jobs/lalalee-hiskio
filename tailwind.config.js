module.exports = {
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  theme: {
    extend: {
      margin: {
        '10%': '10%',
      }
    }
  }
}