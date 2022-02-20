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
    />
  </div>
</template>
<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      mobileMenuOpen: false,
      loginModalOpen: false,
    }
  },
  methods: {
    logoutHandler() {
      console.log('logoutHandler');
      this.mobileMenuOpen = false;
    }
  },  
}
</script>