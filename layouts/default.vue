<template>
  <div>
    <layout-header 
      @mobile-menu-open="mobileMenuOpen = $event" 
      @login-modal-open="loginModalOpen = true"
    />
    <nuxt class="relative top-[50px]"/>
    <mobile-menu 
      :open="mobileMenuOpen" 
      @login-modal-open="loginModalOpen = true"
      @logout="logoutHandler"
    />
    <login-modal 
      :open="loginModalOpen" 
      @login-modal-close="loginModalOpen = false" 
      @login-success="loginSuccessHandler"
    />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'LayoutDefault',
  data() {
    return {
      mobileMenuOpen: false,
      loginModalOpen: false,
    }
  },
  methods: {
    ...mapActions('Carts', [
      'vxGetExistCarts'
    ]),
    logoutHandler() {
      console.log('logoutHandler');
      this.mobileMenuOpen = false;
    },
    async loginSuccessHandler() {
      this.loginModalOpen = false;
      await this.vxGetExistCarts();
    }
  },  
}
</script>