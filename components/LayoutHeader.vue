<template>
  <header class="fixed top-0 z-10 w-full bg-white h-50px">
    <div class="relative flex items-center justify-between h-full mx-[15px] lg:mx-6 xl:mx-auto xl:max-w-7xl">
      <section class="flex items-center justify-start flex-grow h-full">
        <a 
          class="block w-[66px] h-full bg-contain bg-center bg-no-repeat overflow-hidden whitespace-nowrap mr-[6px]"
          :style="{
            'background-image':
              'url(' +
              require('~/assets/icons/logo.svg') +
              ')',
          }"
        />
        <div class="hidden lg:flex items-center">
          <a class="mr-[20px]">
            <img src="~/assets/icons/hire.svg" />
          </a>
          <div class="w-full flex items-center justify-around">
            <img src="~/assets/icons/grid.svg" />
            <p>課程</p>
          </div>
        </div>
        <search />
      </section>
      <section class="flex items-center justify-end ">
        <ul class="hidden lg:flex">
          <li class="px-[8px]">我想開課</li>
          <li v-if="vxLoggedIn" class="px-[8px]">我的學習</li>
        </ul>
        <div class="flex items-center justify-end h-full">
          <button
            class="bg-center bg-no-repeat text-lg w-40px h-40px"
            :style="{
              'background-image':
                'url(' +
                require('~/assets/icons/cart.svg') +
                ')',
            }"
          />
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
            <button 
              class="flex items-center justify-center w-16 h-8 text-sm border-solid border border-blue-400 text-blue-400 mx-[8px] rounded-[4px]" 
              @click="$emit('login-modal-open')">登入</button>
            <button 
              class="flex items-center justify-center w-16 h-8 text-sm border-solid border bg-blue-400 text-white mx-[8px] rounded-[4px]">註冊</button>
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