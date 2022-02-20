module.exports = {
  mode: 'jit',
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
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
        '5px': '5px',
      },
      padding: {
        '10px': '10px',
        '15px': '15px',
      },
      height: {
        '23px': '23px',
        '32px': '32px',
        '40px': '40px',
        '50px': '50px',
      },
      width: {
        '23px': '23px',
        '32px': '32px',
        '40px': '40px',
      },
    }
  }
}