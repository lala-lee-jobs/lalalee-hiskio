<!-- Please remove this file from your project -->
<template>
  <header class=" w-full flex justify-between">
    <section class="w-full flex items-center justify-start ">
      <div>
        <img src="~/assets/icons/logo.svg" />
      </div>
      <div class="hidden md:flex">
        <div>
          <img src="~/assets/icons/hire.svg" />
        </div>
        <div class="w-full flex items-center justify-around">
          <img src="~/assets/icons/grid.svg" />
          <p>課程</p>
        </div>
      </div>
    </section>
    <search />
    <section class="w-full flex items-center justify-end ">
      <div class="hidden md:flex">
        <nuxt-link to="">我想開課</nuxt-link>
      </div>
      <div>
        <img src="~/assets/icons/cart.svg" />
      </div>
      <div class="flex lg:hidden">
        <div v-if="menuOpen" @click="toggleMenu()">
          <img src="~/assets/icons/close.svg" />
        </div>
        <div v-else @click="toggleMenu()">
          <img src="~/assets/icons/menu.svg" />
        </div>
      </div>
      <div class="hidden md:flex">
        <nuxt-link to="">登入</nuxt-link>
        <nuxt-link to="">註冊</nuxt-link>
      </div>
    </section>
  </header>
</template>
<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.$emit('mobile-menu-open', this.menuOpen);
    },
  },
}
</script>