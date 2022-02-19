module.exports = {
  plugins: [],
  purge: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  theme: {
    // extend 會繼承預設值，並新增變數或覆蓋舊有變數
    extend: {
      margin: {
        '10%': '10%',
      },
      height: {
        '50px': '50px',
      }
    }
  }
}