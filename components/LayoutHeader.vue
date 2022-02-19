<template>
  <header class="fixed top-0 z-10 w-full bg-white h-50px">
    <div class="relative flex items-center justify-between h-full lg:mx-6 xl:mx-auto xl:max-w-7xl">
      <section class="w-full flex items-center justify-start ">
        <div>
          <img src="~/assets/icons/logo.svg" />
        </div>
        <div class="hidden lg:flex">
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
        <div class="hidden lg:flex">
          <nuxt-link to="">我想開課</nuxt-link>
        </div>
        <div v-if="vxLoggedIn">
          <nuxt-link to="">我的學習</nuxt-link>
        </div>
        <div>
          <img src="~/assets/icons/cart.svg" />
        </div>
        <div class="flex lg:hidden">
          <div v-if="menuOpen" @click="toggleMenu">
            <img src="~/assets/icons/close.svg" />
          </div>
          <div v-else @click="toggleMenu">
            <img src="~/assets/icons/menu.svg" />
          </div>
        </div>
        <div class="hidden lg:flex">
          <template v-if="!vxLoggedIn" >
            <div @click="$emit('login-modal-open')">登入</div>
            <nuxt-link to="">註冊</nuxt-link>
          </template>
          <template v-else>
            <img width="32" :src="vxMemberData.avatar" />
          </template>
        </div>
      </section>
    </div>
  </header>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'LayoutHeader',
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    ...mapState('Member', { vxMemberData: 'memberData' }),
    ...mapGetters('Member', ['vxLoggedIn']),
  },
  create() {
    this.$nuxt.$on('logout', () => {
      console.log('logout');
    });
  },
  beforeDestroy(){
    this.$nuxt.$off('logout');
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.$emit('mobile-menu-open', this.menuOpen);
    },
  },
}
</script>