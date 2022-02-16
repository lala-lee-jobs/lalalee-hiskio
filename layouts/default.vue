<template>
  <div class="container mx-auto">
    <layout-header 
      @mobile-menu-open="mobileMenuOpen = $event " 
      @login-modal-open="loginModalOpen = true "/>
    <nuxt />
    <mobile-menu :open="mobileMenuOpen"/>
    <login-modal :open="loginModalOpen" @login-modal-close="loginModalOpen=false" />
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
  },  
}
</script>