<template>
  <div class="container mx-auto">
    <layout-header @mobile-menu-open="mobileMenuOpen = $event "/>
    <nuxt />
    <mobile-menu :open="mobileMenuOpen"/>
  </div>
</template>
<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
  methods: {
  },  
}
</script>